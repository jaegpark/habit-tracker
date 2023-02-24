# Introduction
Habit. A bite size technology to help you build good habits.

Made for MakeUofT 2023 by Kyrylo Kalashnikov, Jae Gwan Park, Richard Hanxu, Ammar Vora

## A short description

Introducing our new Smart Habit Tracker for developing habits! Our app allows you to set and customize your habit preferences and schedule, and once set, the information is passed to the arduino using Bluetooth. With a sleek and premium 3D model design, our device can easily fit in your pocket or attach to your bag with a carabiner. Our app is user-friendly with an intuitive onboarding process, a dashboard to view progress and habits, and customizable settings. Start developing healthy habits today with our Smart Habit Tracker.

# Project Story

## Inspiration

https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/391/182/datas/original.png

[image](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/391/182/datas/original.png)

With the increasing number of distractions in our world, it has become harder to develop strong personal habits. Task planners and productivity apps only help momentarily[1] before being drowned out by online distractions, and seeing yourself fall further behind just compounds the downward spiral. 

There is a desperate need for a solution to the “productivity” crisis, and we believe our product, “Habit”, is the answer. We were inspired to create a device to enhance the long-term focus of the user by over 40% by introducing haptic cues [2]. Research has shown that people who received text messages reminding them to perform a new habit were more successful when the text message included a physical cue, such as a specific location or object, compared to a non-specific reminder [3].

## What it does
Habit is a wearable device that can connect via Bluetooth to your phone, where you can set habit timers in the accompanying app. When it's time to complete a habit, the device will remind you with visual, auditory, and haptic cues. These sensory combinations better motivate Habit users to tackle the task, not forget, avoid phone distractions, and to build and maintain desired habits. 

## How we built it
Our team worked rapidly and cohesively to develop the hardware, software, and IoT of the product. For hardware, we used an Arduino Uno and a HC-06 Bluetooth module, along with 3 LEDs, a button, and a buzzer in the design of the physical wearable for the user. The chassis was planned in Fusion 360 and constructed with 3D polymer printing. The team carefully came up with a step-by-step plan to build the circuitry in an “agile” fashion, integrating parts together as we went along.

Using mockups and user flow models as a guide, we designed a working app in React-Native that served as a proof of concept of the software accompanying our physical product. This proof of concept is viable on both Android and IOS systems. We also 3D-printed a “commercial” version for the wearable chassis that highlights the final vision and size of the product.

## Challenges we ran into
- iPhone not connecting to hc-06 Bluetooth sensor due to IOS16 privacy and existing react-native library.
- Could not find React-Native libraries that could use the Bluetooth functionality of a phone to communicate with Arduino.
- We tried finding Python scripting solutions for the above problem for Android, but ran into package issues.
- Configuring a software serial for the Bluetooth module so that pins 1 and 2 were available for uploading code.
- Creating a robust 3D model of the casing that would be able to be produced with a 3D printer. 
- Creating a global React state using Redux to hold the list of habits and their parameters across different screens.
- The second half of the 3D print failed unexpectedly.

## Accomplishments that we're proud of
- Using Software Serials (or virtual serials) to communicate with the Bluetooth module.
- Implementing a “hardware timer” of sorts for each individual LEDs (inspired by FPGAs).
- Programming an edge-capture feature to turn a push-activated button into a toggling mechanism.
- Designing a professional looking casing for the system.
- Learning React-Native on the spot and designing a functioning proof of concept app.
- Integrating the hardware was an awesome experience for the team as we were able to leverage previous engineering coursework and project experience, while also gaining more knowledge about Arduino and microcontrollers.

## What we learned
- Learned Arduino and Bluetooth interfacing.
- Learning how to set up a production environment for mobile apps using Expo and React-Native.
- How to use Contexts in React to organize global data structures across components.

## What's next for Habit

Our goal for this hackathon was to build a prototype of a technology that can actively change people’s lives. Breaking bad habits and building new ones is a challenging task, one that resonates with all of our team. In the future, we plan on pursuing a structured, manufacturing process that can bring a polished product to users, and potentially scaling this into a startup. First, we plan to manufacture prototypes for our team and distribute it among our friends to get their initial feedback. After, there are several other things that need to be done to make this possible, such as a smaller printed circuit board, user-friendly electronics (LEDs, buzzers), and industry-grade materials such as Polycarbonate. 

In addition, when we accumulate data, we will be able to optimize the user habits according to their availability, gender, occupation, and age. This will allow our users to have a more personal connection with the app and be even more useful!

By introducing Habit to people all around the world, we hope to break up the unhealthy attention overloading of mobile phones and help users build good habits, one step at a time.

Built With

Arduino - to power the circuit and communicate with the phone.
Figma - to create mockups, personas, and plan the project.
Fusion360 - to create the 3D model of the enclosure and model if the components would fit.
React Native - to create the prototype app. 

“Try It Out” Links
https://github.com/jaegpark/habit-tracker 
https://www.figma.com/proto/Tv1TLbwocjlg4sWj9fg8mS/Mobile-UI-kit-(Community)-(Copy)-(Copy)?node-id=326%3A3656&scaling=scale-down&page-id=221%3A1890&starting-point-node-id=328%3A6716

References

[1] N. D’Aurizio, T. L. Baldi, G. Paolocci and D. Prattichizzo, "Preventing Undesired Face-Touches With Wearable Devices and Haptic Feedback," in IEEE Access, vol. 8, pp. 139033-139043, 2020, doi: 10.1109/ACCESS.2020.3012309.

[2] Peng W, Li L, Kononova A, Cotten S, Kamp K, Bowen M. Habit Formation in Wearable Activity Tracker Use Among Older Adults: Qualitative Study. JMIR Mhealth Uhealth 2021;9(1):e22488. URL: https://mhealth.jmir.org/2021/1/e22488. DOI: 10.2196/22488

[3] Prestwich, A., Perugini, M., Hurling, R., & Richens, Y. (2009). Using theory to develop and test interventions to promote changes in health behaviour: Evidence, issues, and recommendations. Current Opinion in Psychiatry, 22(3), 194-201. https://doi.org/10.1016/j.copsyc.2009.02.007

[4] Lally, P., van Jaarsveld, C. H., Potts, H. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. European Journal of Social Psychology, 40(6), 998-1009. https://doi.org/10.1002/ejsp.674
