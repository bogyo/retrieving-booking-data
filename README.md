# retrieving-booking-data
retrieving single booking data deflects to user inputs reactive-way


<b>1. Install</b>

- clone the repo<br>
- open a terminal in the created directory root<br>
- $ npm install<br>
- $ ng serve<br>

Browser should open on port 4200.

<b>Please note: mocked service serve booking data only with valid booking code, otherwise message will be shown.</b>
Valid code is: "PZIGZ3"</b><br>

<b>2. General information</b>

Application strucure and features:

- components/
  <b>Booking-retrive-form</b>

  a. Display form with two input fields<br>
   - Booking Code (validation: 5-6 car length, only alphabet and number 2-9),<br>
   - Family name (validation: 2-30 car length only alphabet)<br>
  b. If validation failed and related input was touched error message will be shown above the form.<br>
  c. button disabled until booking code is formally valid<br>
  d. calls the passed callback onSubmit<br>

  <b>h-content</b><br>
    a. only view component display and style text.<br>
  <b>h-title</b> <br>
    a. only view component display static header with background.<br>
- interfaces<br>
  <b>booking.interface</b><br>
  a. booking interface with two string type field<br>
- services<br>
  <b>booking.service</b><br>
  a. make http request with bookingCode as param (TODO: add lastName to query)<br>
  (I used only a booking code check to simply development process.)<br>
  b. extract data as json from response Observable<br>
  c. very simple error handling<br>

  <b>in-memory-data.service</b><br>
    a. return the mocked booking response.(Same as in mock.json) <br>

- <b>App Component</b><br>

  This is the  main component, located in the root.<br>
  a. handling request to services <br>
  b. display template parts with the dynamic data.<br>
  c. transform data to be displayed <br>
  d. display the booking retrieve form component or a simple list with booking details (I displayed here values from the mocked data, without serious style, just a simple list.<br>

<b>Additional info</b>

I choosed a more modular separation to seperate services, components, interfaces and the main component. In a bigger app it is probably useful to make it more modular (for instance folders to components).
I leaved the main component in the app route, to indicate this is the main component in the application.

The application is fully responsive. Just to simplify the development I used only one breakpoint (640px wide) as a seperation of mobile and desktop view. I used only pure css here, no preprocessor added.

I've try to pay attention to accessibility like using labels for inputs.
I've follow the attached design,  please note this is a prototype not pixel perfect (fonts are different (Excellence In Motion was no available))

<b>Possible todos</b><br>
 - unit test!!!
 - check bookingcode and familyname as well to return mock data.
 - using node server to for handling requests and serve the application.
    server.js attached already but in use.
    serve app from here with command: ng build => create dist and node server.js => serve from dist))
 - improve error handling
 - attache router to handling app changes
 - more attention to CSS and design (for instance list of booking details, refact to a nice table with labels).

<b>3. Build and testing</b>

Application was built with angular-cli, so please check angular-cli for avaliable commands.

Please NOTE: <b>!!! It seems current version of angular-cli has a webpack issue. ng test not running at all (neither with newly generated empty project). </b> Similar issue to this: https://github.com/angular/angular-cli/issues/6457. Since this is my first experiment with angular 4 it would be more time debugging this.
