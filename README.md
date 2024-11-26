# Sales Dashboard - React Application
This is a Sales Dashboard built using React, Ant Design, Chart.js, and Axios. The dashboard visualizes sales data, allowing users to filter by product, date range, sales quantity, and revenue.

## Features
- Filter products, date range, sales quantity, and revenue.
- Display data in a bar chart and table format.
- Responsive layout for different screen sizes.

## Prerequisites
Before running this project, make sure you have the following installed:
- Node.js (v14 or above)
- npm 

## Installation

1. Clone the repository:
   git clone https://github.com/ayush7078/Smollan-Assignment-frontend.git

2. Navigate to the project folder:
cd Smollan-Assignment-frontend

3. Install dependencies:
 npm install

4. Create a .env file in the root directory and add the following:
REACT_APP_BACKEND_URL
This URL will be used to fetch sales data from the backend.

# Running the Application
To start the development server, run:
npm start
Open the application in your browser at http://localhost:3000.

# Folder Structure
The folder structure of the application is as follows:

- /src
-  /components
-    FiltersSection.js
-    MainSection.js
-    InfoSection.js
-    ChartSection.js
-    Table.js
-  App.js
-  index.js
-  /assets
-  /styles
-  /utils
- /.env
- .gitignore
- package.json
- README.md

# Technologies Used
- React: JavaScript library for building user interfaces.
- Chart.js: Used for rendering sales data as bar charts.
- Ant Design: UI components for building the user interface.
- Axios: HTTP client for making API requests.
- Day.js: Library for date handling.
