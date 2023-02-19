/* Arduino tutorial - Buzzer / Piezo Speaker
   More info and circuit: http://www.ardumotive.com/how-to-use-a-buzzer-en.html
   Dev: Michalis Vasilakis // Date: 9/6/2015 // www.ardumotive.com */

#include <SoftwareSerial.h>

SoftwareSerial BTserial(11, 12); // RX | TX

const int buzzerPin = 13; //buzzer to arduino pin 9
const int buttonPin = 7;
const int ledPin = 9;

// States for toggling the Button
bool buttonEnable = false;
bool buttonMidway = false;

// States of the LEDs
bool ledStates[] = {false, false, false};

// Size of the task list
int taskSize;
int timeout = 200;


struct Task {
  int taskId;
  int periodicity;
  int counter;
  int timeout;
  bool valid;
};

const int MAX_HABITS = 3; // max amount of tasks we can complete
int numTasks = 3; // current amount of tasks
Task tasks[MAX_HABITS] = {
  {0, 300, 300, timeout, true},   // task ID 1, every 1 second
  {1, 600, 600, timeout, true},   // task ID 2, every 5 seconds
  {2, 900, 900, timeout, true}   // task ID 3, every 10 seconds
};

const int numPartitions = 9; // number of particions divided divided by the comas
String inputSignal[numPartitions]; //array to store all the particions



void setup(){
  Serial.begin(9600);
  BTserial.begin(9600);
  pinMode(buzzerPin, OUTPUT); // Set buzzer - pin 9 as an output
  pinMode(buttonPin, INPUT_PULLUP);
  

  taskSize = sizeof(tasks)/sizeof(tasks[0]);

};

void addTask(int outputArray[]){
  
  // Find space in the array to insert
  int idx = -1;
  for (int i = 0; i < taskSize; i++){
    if (tasks[i].taskId == outputArray[0]) {
      idx = i;
      break;
    }
  }

  if (idx == -1) { // Space not found
    Serial.println("Task list full");
    return;
  } 

  
  tasks[idx].taskId = outputArray[0];
  tasks[idx].periodicity = outputArray[1]; // depends on the type
  tasks[idx].counter = outputArray[1]; // depends on the type
  tasks[idx].timeout = timeout; // depends on the type
  tasks[idx].valid = true;
  
  Serial.println("Task added");
  BTserial.write("Task added\n");
}

void deleteTask(int id) {
  for (int i = 0; i < taskSize; i++) {
    if (tasks[i].taskId == id) {
      tasks[i].valid = false;
      Serial.println("Task deleted");
      BTserial.write("Task deleted\n");
      break;
    }
  }
}

void clearTasks(){
  for(int i = 0; i < taskSize ;i++){
    ledStates[i] = false;
    tasks[i].valid = false;
  }
}


void buzzer(){
  // Turn on Buzzer based on state
  bool buzzerEnable = false;
  
  for (int i = 0; i < taskSize; i++) {  
    if (ledStates[i] && tasks[i].valid){
      buzzerEnable = true;
    }
  }

  if (buzzerEnable) {
    // turn on the buzzer
    tone(buzzerPin, 1000);
  } else {
    // turn off the buzzer
    noTone(buzzerPin);
  }
  
}

void buttonHandler() {
   
   int buttonDown = !digitalRead(buttonPin);

   if (!buttonMidway && buttonDown) { // Push Down
      buttonMidway = true;
//      Serial.println("DOWN");
   } else if (buttonMidway && !buttonDown) { // Push Up
      buttonMidway = false;
      buttonEnable = !buttonEnable;
      Serial.println("UP");
   } 

   

    if (buttonEnable){
//      Serial.println("Button was ENABLED");
//      digitalWrite(ledPin, HIGH);
      
      // Only enable button if an LED is on
      bool stayOn = false;
      for (int i = 0; i < taskSize; i++) {
         if (ledStates[i] && tasks[i].valid){
          stayOn = true;
         }
      }

      buttonEnable = stayOn;
      
    } else {
//      Serial.println("Button was DISABLED");
//      digitalWrite(ledPin, LOW);
    }
}

void checkTasks() {

  // Loop through all the tasks to check completion
  for (int i = 0; i < taskSize; i++) {
    if (tasks[i].counter == 0) {
      ledStates[i] = true; // Enable LED
//      Serial.println("LED ENABLED");
      tasks[i].timeout = tasks[i].timeout - 1;

      // Check if reset was pressed
      if (buttonEnable || tasks[i].timeout == 0) {
        tasks[i].counter = tasks[i].periodicity; // Reset counter
        tasks[i].timeout = timeout; // Reset timeout
        buttonEnable = false; // Reset the reset button
        ledStates[i] = false;
      }
      
      
    } else {
//      Serial.println("LED DISABLED");
      tasks[i].counter = tasks[i].counter - 1;
      ledStates[i] = false;
    }
  }  
}

void ledHandler() {

  // Turn on LEDs based on state
  for (int i = 0; i < taskSize; i++) { 
    
    if (ledStates[i] && tasks[i].valid) {
      digitalWrite(8 + tasks[i].taskId, HIGH);
    } else {
      digitalWrite(8 + tasks[i].taskId, LOW);
    }
  }

  delay(10);
}


void partitionString(String inputString, int arraySize, String outputArray[]) {
  int currentIndex = 0;
  int lastCommaIndex = -1; //Left array pointer
  int currentArrayIndex = 0;

  // go through every char in the array 
  while (currentIndex < inputString.length() && currentArrayIndex < arraySize) {
    if (inputString.charAt(currentIndex) == ',') {
      outputArray[currentArrayIndex] = inputString.substring(lastCommaIndex + 1, currentIndex);
      lastCommaIndex = currentIndex;
      currentArrayIndex++;
    }
    currentIndex++; //keep increasing the current most right index
  }
  
  // Add the last part of the input string to the array
  if (currentArrayIndex < arraySize) {
    outputArray[currentArrayIndex] = inputString.substring(lastCommaIndex + 1);
  }
}

void listenBluetooth(){
  if(BTserial.available()){
    String habitString = BTserial.readStringUntil('\n');
    Serial.println(habitString);

    
    partitionString(habitString, numPartitions, inputSignal);

    for (int i = 0; i < numPartitions - 2; i+= 3) {
      if (inputSignal[i] == NULL) {
        break;
      }
      
      String command = inputSignal[i];
      int id = inputSignal[i + 1].toInt();
      int period = inputSignal[i + 2].toInt();

      if (command == "add") {
        int outputArray[] = {id, period};
        addTask(outputArray);
      } else if (command == "delete") {
        deleteTask(id);
      }
    }
    
  }
}

String myString = "hello,world,this";
const int myArraySize = 3;
String myArray[myArraySize];

void loop(){
  listenBluetooth();
  buttonHandler();
  checkTasks();
  buzzer();
  ledHandler();

}