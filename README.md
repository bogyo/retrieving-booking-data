# retrieving-booking-data
retrieving single booking data deflects to user inputs reactive-way


1. Install

clone the repo
open a terminal in the created directory root
$ npm install
$ ng serve

Browser should open on port 4200.


2. General information

Please NOTE: This is my first experiment with angular 4. 

Application strucure and features:
- components/
  <b>Booking-retrive-form</b>

  a. Display form with two input fields
   - Booking Code (validation: 5-6 car length, only alphabet and number 2-9),
   - Family name (validation: 2-30 car length only alphabet)
  b. If validation failed error is shown above the form. 
  c. calls the passed callback onSubmit
  
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
  a. handling reuest to services
  b. display template parts with the dynamic data.
  c. transform data to be displayed
  

Possible todos

3. Build and testing

Application was built with angular-cli, so please check angular-cli for avaliable commands.
