#Incident-Mapping Project

Deliverable
-----------

* Steps to install and run my application:

    1. clone git repository
    2. cd client -> npm install -> npm start
    3. cd server -> npm install -> node server.js

* Did you complete the project? comment as needed.

    I did not complete the project. I did enjoy learning about map APIs / Google Maps API.
    I was able to read the local JSON file to get the address and coordinates from a JSON example incident. If you click the submit button, it will mark the example incident.
    I was thinking, I could implement a JSON import button so that a user can import an incident file and generate a marker with data on the map.

    A couple of notes I took while developing:
        
        Step 1: Set up coding project with React front-end / Node/Express backend stack.

        Step 2: Find map Api. Used google-map-react library with google map Api.

        Step 3: Get it to show map on page. Still deciding on MapQuest API vs Google Maps API?

        QUESTIONS:
        how does the app receive the data?
        - from JSON file upload?
        - from long/lad data input on webpage?

        Steps to produce enrich data:

        1. Get data - start with JSON example data given
        - if its a 911 emergency, id take in the address and then enrich data from there by getting address coordinates -> need to geocode address**
            So:
            - Get address string that user typed into our search input element.
            - Geocode the address string.

        2. Enrich data - add attributes to it through gaining more data through weather api and parcel using THIS api: 
        http://gis.richmondgov.com/ArcGIS/rest/services/StatePlane4502/Ener/MapServer/0/

         *********

        Thank you for giving me the opportunity to do the project.
        I think this would be a very good project for me to continue working on to expand my knowledge of full-stack development.

        -Kristian Saenz

* How much time did you spend on the project?
    Longer than anticipated, 7+ hours. 
