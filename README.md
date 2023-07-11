## Installation

- Clone the project
- Run `npm install` to install the dependancies

## Available Dependancies

- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- @types/jest
- @types/node
- @types/react
- @types/react-dom
- react
- react-dom
- react-scripts
- typescript
- web-vitals

## Available Scripts

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Package & Technologies

Package - npm (v8.15.0) / node (v16.17.0)
Technologies - React (v18.2.0) / Typescript (v4.9.5)

## Styling & Fonts

- Separate CSS file create for styling `index.css`
- Medai queries included to make the application behave properly in smaller devices
- Google Font `Rajdhani` has been used [https://fonts.google.com/specimen/Rajdhani?query=Rajdhani]

## Usage & Testing guidelines

- Simplified code with a component `Counter`
- Usage of `useReducer` to manage multiple actions to do changes to the state
- `Eslint` has been configured to provide an error free quality code
- Counter value is allowed to increase upto 10 maximum
- Trying to increase the value more that 10 will prompt an alert
- Trying to decrease the value less than 0 will prompt an alert
- Resetting the counter will bring the counter value back to 0
