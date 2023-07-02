## Aura App

Aura is a project created during the ShowCode Athena 2023 Hackathon.

Our idea was born out of a user problem example, where a person who is autistic might feel stressed or anxious when visiting a new cafe and finding that the environment is stressful, due to loud noises or bright lights. We wanted to create this app in order to be one place where users who have accessibility needs (be it physical, neurological, or even ambient-related) to know if the venue they want to visit addresses their accessibility needs.

Our app will have features such as:
- User signing up and choosing which group(s) they identify with to refine their needs (parent, student, LGBTQ+)
- Users can filter for venues based on accessibility symbol features
- Users can review places they have recently visited
- Our app also has some concepts we wish to build out such as:
- Community-based mystery shoppers
- Google Maps/Citymapper integration
- Nurturing the Aura community with events and hubs on the app

NB: Our codebase is not completed so our Figma wireframe and demo are the best demonstrations of the app.

Link to Canva: https://www.canva.com/design/DAFnaNSUH6c/3HwneJ2_axm4dUbXObnFIQ/view?utm_content=DAFnaNSUH6c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink
Link to Figma: https://www.figma.com/file/YgPoK1QzFK9QRcrTwP2g2u/ambiance-t?type=design&node-id=0%3A1&mode=design&t=bgFtdIxiKGBCBIsG-1

# Maps Example
<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
</p>

## 🚀 How to use

- Install packages with `yarn` or `npm install`.
- Run `yarn start` or `npm run start` to start the bundler.
- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)

## Running/Modifying Native Code

You can generate native iOS and Android projects from your Expo config file (**app.json**/ **app.config.js**) by runnning `npx expo prebuild`. These native projects can then be compiled and run via XCode and Android Studio.

> 💡 Learn more about [native code in Expo](https://docs.expo.dev/workflow/customizing/)

## Publishing

- Configure your app to be able to use react-native-maps in production using this guide : [MapView configuration](https://docs.expo.dev/versions/v38.0.0/sdk/map-view/#configuration)
- Deploy the native app to the App store and Play store using this guide: [Deployment](https://docs.expo.dev/distribution/app-stores/).

## 📝 Notes

- Learn more about [MapView](https://docs.expo.dev/versions/v38.0.0/sdk/map-view).
- Learn more about [react-native-maps](https://github.com/react-native-community/react-native-maps).
