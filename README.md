# Location Selector Application

This is a simple React-based web application that allows users to select a country, state, and city using dropdown menus. The application fetches location data from an API and displays the selected location.

## Features

- Fetches a list of countries, states, and cities from a remote API.
- Updates the available states based on the selected country.
- Updates the available cities based on the selected state.
- Displays the full selected location (city, state, and country).
- Handles errors gracefully when fetching data fails.

## Demo

You can try out the application here: [Location Selector Demo](https://xstate-livid.vercel.app/).

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash   
   git clone https://github.com/surendergupta/xstate.git
   
   ```

2. Navigate to the project directory:
   ```bash   
   cd xstate
   
   ``` 
3. Install the required dependencies:
   ```bash   
   npm install
   
   ``` 

4. Start the development server:
   ```bash   
   npm start

   ``` 

   The application should be running on ```http://localhost:3000```.

## API Endpoints

The application interacts with a REST API for fetching the location data. Below are the API endpoints:

- Get all countries:
  ```GET /countries```

- Get all states by country:
  ```GET /country={countryName}/states```

- Get all cities by country and state:
  ```GET /country={countryName}/state={stateName}/cities```

Replace ```{countryName}``` and ```{stateName}``` with the appropriate values to get the states and cities.

## Application Structure

```plaintext
src
├── App.js           # Main component that handles the location selection
├── App.css          # CSS file for styling
├── index.js         # Entry point of the application
└── ...

```

## App Component

- **useEffect** hooks are used to fetch data from the API based on user selections.
- **useState** manages the selected country, state, city, and any error messages.
- The application dynamically updates the states dropdown based on the selected country, and similarly, updates the cities dropdown based on the selected state.

## CSS Styling

- Basic styles are defined in ```App.css```.
- Error messages are displayed in red when there is a problem with the API call.

## Error Handling

- If the API request for countries, states, or cities fails, a message will be displayed to the user in the UI.

## How to Use

1. Select a country from the first dropdown.
2. Once a country is selected, the states dropdown will be populated.
3. Select a state, and the cities dropdown will be populated.
4. Once you have selected a country, state, and city, the full location will be displayed on the screen.

## Future Enhancements

- Add a loading spinner while the API requests are being processed.
- Improve the UI with better design and accessibility.
- Allow search functionality within the dropdowns for large datasets.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

### Key sections:
- **Introduction**: Explains the purpose of the app.
- **Demo**: A link to a deployed version of the app (replace with your actual deployment link if applicable).
- **Installation**: Instructions on how to run the app locally.
- **API Endpoints**: Details about the API interaction.
- **Application Structure**: Breakdown of the important files and components.
- **Error Handling**: Describes how errors are managed.
- **Future Enhancements**: Possible features to add later.
- **License**: Type of license governing the app.
 
