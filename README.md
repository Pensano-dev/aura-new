# Aura
Aura is designed to help users with accessibility needs—whether physical, neurological, or ambient-related—find venues that cater to their specific requirements. By providing detailed information about a venue's accessibility features, Aura empowers users to make informed decisions and plan their visits with confidence.

This app was a prize winner at the Athena Hackathon 2023 for the team comprising of [Elsa Nafar](https://github.com/elnafar), [Juliana Nocchi](https://github.com/junocchi), [Natasha Buckham](https://github.com/natashabuckham), [Tian Pan](https://github.com/Tian807), and [Sidra Iqbal](https://github.com/siqbal181).

## Contents

- [Aura](#aura)
  - [Contents](#contents)
  - [Notes on development in React Native](#notes-on-development-in-react-native)
  - [Setup](#setup)
  - [Starting the app](#starting-the-app)
    - [Starting the frontend and backend from the root directory](#starting-the-frontend-and-backend-from-the-root-directory)
    - [Starting the frontend from the frontend directory](#starting-the-frontend-from-the-frontend-directory)
    - [Starting the backend from the backend directory](#starting-the-backend-from-the-backend-directory)
  - [Setting up your React Native (frontend) development environment](#setting-up-your-react-native-frontend-development-environment)
  - [Backend server and health check](#backend-server-and-health-check)
  - [Database](#database)
  - [Seeding the database collections](#seeding-the-database-collections)
  - [Testing](#testing)
    - [Running Unit and Integration Tests in the Backend](#running-unit-and-integration-tests-in-the-backend)
  - [Resource Links](#resource-links)
  - [Shared Learning](#shared-learning)

## Notes on development in React Native

* It is important to look at the result in both iOS and Android simulators, as the layout can be strikingly different on different devices, particularly in regard to styling. Note that some styling properies are supported in iOS but not in Android, and vice versa.
* Simulator refresh can be sketchy and inconsisent as can the expo commands which sometimes work on iOS or Android but not both.
* With focus on the iOS simulator, pressing `CTRL + CMD + Z` will open the iOS simulator menu, and pressing `Reload` should refresh the app. 
* With focus on the Android simulator, pressing `R` twice quickly will refresh the app.


# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
   ```
   Web is waiting on http://localhost:8081
   ```
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.


## React Navigation
First, you need to install them in your project:

```bash
npm install @react-navigation/native @react-navigation/native-stack
```
If you have an Expo managed project, install the dependencies with expo:

```bash
npx expo install react-native-screens react-native-safe-area-context
```



## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

