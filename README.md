# retrieving-booking-data
retrieving single booking data deflects to user inputs reactive-way


1. Install

clone the repo
open a terminal in the created directory root
$ npm install
$ ng serve

Browser should open on port 4200.

<b>Please note: mocked service serve booking data only with valid booking code, otherwise message will be shown.</b>
Valide code is: "PZIGZ3"</b> (I didn't checked familyName to be equal to a passanger name as well at this time #lackofTime )<br>

2. General information

Application strucure and features:

- components/
  <b>Booking-retrive-form</b>

  a. Display form with two input fields
   - Booking Code (validation: 5-6 car length, only alphabet and number 2-9),
   - Family name (validation: 2-30 car length only alphabet)
  b. If validation failed error is shown above the form.
  c. button disabled until booking code is formally valid
  d. calls the passed callback onSubmit

  <b>h-content</b><br>
    a. only view component display and stlye text.<br>
  <b>h-title</b> <br>
    a. only view component display static header with background.<br>
- interfaces<br>
  <b>booking.interface</b><br>
  a. booking interface with two rewiered string type field<br>
- services<br>
  <b>booking.service</b><br>
  a. make http request with bookingCode as param (TODO: add lastName to query)
  b. extract data as json from response Observable
  c. very simple error handling

  <b>in-memory-data.service</b><br>
    a. return the mocked booking response. <br>

- <b>App Component</b><br>
  This is the  main component located in the root.
  a. handling reuests to services
  b. display template parts with the dynamic data (for instance: if we got booking detail or not).
  c. transform data to be displayed
  d. display the booking retrieve form component or a simple list with booking details (I displayed here values from the mocked data, without serious style, just a simple list.

Additional info

I choosed a more modular separation to seperate services, components, interfaces, main component. In a bigger app it is probably useful to make it more modular (for instace folders to components).

The appication is fully responsive. Just to simplify the development I used only breakpoint (640px wide) to seperate mobile and desktop view. I used only pure css here, no preprocessor added.

I've try to pay attention to accessiblity like using labels for inputs.
I've follow the attached design,  please note this is a prototype not pixel perfect (fonts are different (Excellence In Motion was no available))

Possible todos
 - unit test!!!
 - check bookingcode and familyname as well to return mock data.
 - using node server to for handling requests and serve the application.
    server.js attached already but in use.
    serve app from here with command: ng build => create dist and node server.js => serve from dist))
 - improve error handling
 - attache router to handling app changes
 - more attention to CSS and design (for instance list of booking details, refact to a nice table with labels).

3. Build and testing

Application was built with angular-cli, so please check angular-cli for avaliable commands.

Please NOTE: <b>!!! It seems current version of angular-cli has a webpack issue. ng test not running at all (neither with newly generated empty project). </b> Similar issue to this: https://github.com/angular/angular-cli/issues/6457. Since this is my first experiment with angular 4 it would be more time debugging this.
