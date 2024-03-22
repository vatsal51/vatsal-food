## Project Setup

To set up the project, you can use either npm or yarn to install the required dependencies:

```
npm install
or
yarn install
```

Usage
After installing the dependencies, you can start the development server by running:

```
npm start
or
yarn start
```

This will run the app in development mode. Open http://localhost:3000 in your web browser to view the application.

# Food Menu App

This project is a React-based food menu application that allows users to browse through a list of food items, view details of individual items, apply filters, and sort the items.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Food Menu App is a web application built using React. It leverages context API for state management and makes use of external APIs to fetch food data. The app provides a user-friendly interface for browsing food items, exploring their details, and applying filters based on area.

## Features

- **Browsing Food Items:** Users can browse through a list of food items fetched from an external API.

- **Viewing Item Details:** Clicking on a food item displays its details in a modal, including image, name, and ingredients.

- **Applying Filters:** Users can filter food items by area, such as Indian, Italian, etc., using the dropdown filter.

- **Sorting Items:** The app allows users to sort food items in ascending or descending order based on their names.

- **Pagination:** If the list of food items exceeds a certain limit, pagination is provided for easy navigation.

## Project Structure

The project follows a modular structure, with separate components for different functionalities:

- **FoodMenuPage:** The main component responsible for rendering the food menu interface, including filters, food items, and pagination.

- **Filters:** A component for applying filters to the list of food items based on area.

- **FoodItem:** Represents a single food item card displayed in the menu.

- **Modal:** Displays detailed information about a selected food item in a modal dialog.

- **Pagination:** Provides pagination controls for navigating through the list of food items.

- **FoodContext:** Context provider for managing global state related to food items, including fetching data from APIs and managing filters.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/vatsal51/vatsal-frontend.git
   ```
