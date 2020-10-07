# Weather Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

### `npm install`

To install dependencies

### `npm start`

To run the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

To run the tests in watch mode.<br />

### `npm build`

To build the project to production.<br />

## Usage

At the main route, you will see a map, provided by Leaflet, where you can navigate through the world.
When you find somewhere you would like to know the temperature status, you just click on it, and it will place a pin on the map.

Click on the search button on the right. This will bring the nearest 15 cities from where you pinned.

Click on one of the places listed to know more about the weather there.

Another tab will open, on the route /weather passing the information by query strings

If you wish to reset your search, just click anywhere else on the map and click search again.

## Tecnologies/Libs used:

- **Leaflet** and **React-Leaflet** for the maps
- **Axios** to perform the HTTP request to the weather API
- **Font Awesome** for the pin icon
- **Open Weather Map** API
- **React toastify** to notify any errors on the API call
- **Jest** and **React Testing Library** for the tests
