# TeleHealth 🏥

A comprehensive React Native mobile application for telehealth services, enabling users to consult with doctors, book appointments, access healthcare services, and manage their health from the comfort of their homes.

## 📱 Features

### Authentication & Onboarding
- **Welcome Screens**: App intro slider with onboarding experience
- **User Authentication**: Sign up, sign in, password reset, and verification
- **Privacy Policy**: Built-in privacy policy screen

### Core Functionality
- **Doctor Consultation**: Browse and consult with specialized doctors
- **Appointment Booking**: Schedule appointments with healthcare providers
- **Doctor Search**: Search doctors, medicines, and hospitals
- **Recently Visited**: Quick access to recently consulted doctors
- **Specialized Services**: Access to various medical specialties

### Additional Services
- **Lab Tests**: Book lab tests from home with online report viewing
- **Health Articles**: Access to health-related articles and information
- **Location Services**: GPS-based location detection and Google Places integration
- **Maps Integration**: View doctor locations and healthcare facilities
- **Real-time Updates**: Socket.io integration for real-time notifications

## 🛠️ Tech Stack

### Core Technologies
- **React Native**: `0.62.2`
- **Expo**: `~38.0.8`
- **React**: `16.11.0`

### State Management
- **Redux**: State management
- **React Redux**: React bindings for Redux
- **Redux Thunk**: Async action handling

### Navigation
- **React Native Router Flux**: Primary navigation library
- **React Navigation**: Screen navigation support

### UI Components
- **Native Base**: UI component library
- **React Native Elements**: Additional UI components
- **React Native Vector Icons**: Icon support

### Key Libraries
- **Axios**: HTTP client for API requests
- **JWT Decode**: JSON Web Token decoding
- **Socket.io Client**: Real-time bidirectional communication
- **React Native Maps**: Map integration
- **React Native Google Places Autocomplete**: Location search
- **React Native Country Picker**: Country selection
- **React Native Phone Number Input**: Phone number handling
- **React Native Image Viewing**: Image viewer functionality
- **React Native Snap Carousel**: Carousel component

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio) (for Android development)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development, macOS only)

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/superdev947/telehealth.git
   cd telehealth
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure API Keys**
   - Update the Google Maps API key in `app.json` under `android.config.googleMaps.apiKey`
   - Configure any backend API endpoints in your services

### Running the Application

#### Development Mode
```bash
npm start
# or
expo start
```

This will start the Expo development server. You can then:
- Press `a` to open in Android emulator
- Press `i` to open in iOS simulator (macOS only)
- Scan the QR code with Expo Go app on your physical device

#### Web
```bash
npm run build:web
# or
expo start --web
```

#### Build for Production

**Android**
```bash
npm run build
# or
expo build:android
```

**iOS**
```bash
npm run build:ios
# or
expo build:ios
```

**Get Android Fingerprint**
```bash
npm run build:fingerprint
# or
expo fetch:android:hashes
```

## 📁 Project Structure

```
telehealth/
├── src/
│   ├── assets/              # Images, fonts, and other static assets
│   ├── components/          # Reusable UI components
│   │   ├── appIntroSlider.js
│   │   ├── index.js
│   │   └── merge-extradata.js
│   ├── constants/           # App constants and configurations
│   │   ├── Color.js         # Color palette
│   │   ├── Layout.js        # Layout constants and dimensions
│   │   ├── Profile.js       # Profile configurations
│   │   ├── Root.js          # Root configurations
│   │   └── Slides.js        # Intro slider slides
│   ├── containers/          # Screen components
│   │   ├── AuthScreen/      # Authentication screens
│   │   │   ├── ExploreScreen.js
│   │   │   ├── ForgetScreen.js
│   │   │   ├── PrivacyPolicyScreen.js
│   │   │   ├── ResetpasswordScreen.js
│   │   │   ├── SignInScreen.js
│   │   │   ├── SignUpScreen.js
│   │   │   ├── VerificationScreen.js
│   │   │   └── WelcomeScreen.js
│   │   └── MainScreens/     # Main application screens
│   │       ├── AppointmentsScreen.js
│   │       ├── BookAppointmentScreen.js
│   │       ├── DoctorScreen.js
│   │       └── HomeScreen.js
│   ├── navigate/            # Navigation configuration
│   │   ├── Guest.js         # Guest user navigation
│   │   ├── Logged.js        # Authenticated user navigation
│   │   └── SideMenu.js      # Side menu/drawer navigation
│   ├── redux/               # Redux state management
│   │   ├── Store.js         # Redux store configuration
│   │   ├── actions/         # Redux actions
│   │   │   └── authActions.js
│   │   ├── reducers/        # Redux reducers
│   │   │   ├── index.js
│   │   │   ├── appData/
│   │   │   └── auth/
│   │   └── services/        # Services and utilities
│   │       ├── index.js
│   │       └── navigator.js
│   ├── Router.js            # Main router component
│   └── Welcome.js           # Welcome navigation
├── App.js                   # App entry point
├── app.json                 # Expo configuration
├── babel.config.js          # Babel configuration
├── metro.config.js          # Metro bundler configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🔑 Key Features Implementation

### State Management
The app uses Redux for centralized state management with the following structure:
- **appData**: Application-level data (auth token, welcome state)
- **auth**: Authentication-related data (user information)

### Navigation Flow
1. **Welcome Screens**: First-time user onboarding
2. **Guest Navigation**: Unauthenticated user screens
3. **Logged Navigation**: Authenticated user screens with drawer menu

### Authentication
JWT-based authentication with token management and secure storage.

## 🎨 Customization

### Colors
Update colors in `src/constants/Color.js`

### Layout & Dimensions
Modify dimensions in `src/constants/Layout.js`

### App Configuration
Update app metadata in `app.json`:
- App name
- Bundle identifier
- Version
- Icon and splash screen
- API keys

## 📝 Environment Configuration

### Google Maps API
1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Update in `app.json`:
   ```json
   "android": {
     "config": {
       "googleMaps": {
         "apiKey": "YOUR_API_KEY_HERE"
       }
     }
   }
   ```

## 🧪 Testing

```bash
npm test
# or
yarn test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
