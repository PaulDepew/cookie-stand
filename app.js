'use strict';

// var locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima' ] ;

var Store = {

  storeName: 'Seattle',
  minCust: 23 ,
  maxCust: 65 ,
  hourOpen: 14 ,
  cookiesPerCustomer: 6.3 ,
  hourlySales: [],
  currentHour: [],
  display: this.totalPerHour()[0],
  display2: this.hours()[0],

  totalPerHour: function() {
    // this makes the function run 1 per hour open
    for (var currentHour = 0; currentHour < this.hourOpen; currentHour++) {

      // this creates a random customer amount 14 times
      var custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust) ;
      console.log(custPerHour);

      // this finds the hourly sales total by multiplying cookiesPerCustomer by custPerHour
      var hourlySales = Math.floor(this.cookiesPerCustomer * custPerHour) ;

      // this creates 2 arrays  pairing of current hours and hourly sales
      // hourlySales = [hourlySales];
      // currentHour = [currentHour];
      this.hourlySales.push(hourlySales);
      console.log(hourlySales);
      console.log(currentHour);
    } return [this.hourlySales];
  } ,

  // this is a function to create a currentHour Array
  hours: function() {
    for (var currentHour = 0; currentHour < this.hourOpen; currentHour++) {

      this.currentHour.push(currentHour);
      console.log(currentHour);
    } return [this.currentHour];
  } ,

  // this is a function to write the totalPerHour to the document

  column1: function(){
    for (var i = 0 ; i < this.display.length; i++) {
      var parent1 = document.getElementById( 'salesreport');
      var child1 = document.createElement('li');
      parent1.appendChild(child1);
      child1.textContent = this.display[i];
    }
  } ,

  //this is a function to write the current hour to the document
  column2: function() {
    for (var index = 0 ; index < this.display2.length; index++) {
      var parent2 = document.getElementById('saleshours') ;
      var child2 = document.createElement('li');
      parent2.appendChild(child2);
      child2.textContent = this.display2[index];
    }
  }
} ;

Store.totalPerHour();


// var display = Store.totalPerHour()[0];
// var display2 = Store.hours()[0];
// console.log(display + "This is it!");
// console.log(display2 + "This is That");


// for (var i = 0 ; i < display.length; i++) {
//   var parent1 = document.getElementById( 'salesreport');
//   var child1 = document.createElement('li');
//   parent1.appendChild(child1);
//   child1.textContent = display[i];
// }

// for (var index = 0 ; index < display2.length; index++) {
//   var parent2 = document.getElementById('saleshours') ;
//   var child2 = document.createElement('li');
//   parent2.appendChild(child2);
//   child2.textContent = display2[index];
// }
