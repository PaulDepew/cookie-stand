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

  totalPerHour: function() {
    // this makes the function run 1 per hour open
    for (var currentHour = 0; currentHour < this.hourOpen; currentHour++) {

      // this creates a random customer amount 14 times
      var custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust) ;
      console.log(custPerHour);

      // this finds the hourly sales total by multiplying cookiesPerCustomer by custPerHour
      var hourlySales = Math.floor(this.cookiesPerCustomer * custPerHour) ;

      // this creates 1 array of average hourly sales
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

  column1: function() {
    for (var i = 0 ; i < this.hourlySales.length; i++) {
      var parent1 = document.getElementById( 'salesreport');
      var child1 = document.createElement('li');
      parent1.appendChild(child1);
      child1.textContent = this.hourlySales[i];
    }
  } ,

  //this is a function to write the current hour to the document
  column2: function() { 
    Store.hours();
    for (var index = 0 ; index < this.currentHour.length; index++) {
      var parent2 = document.getElementById('saleshours') ;
      var child2 = document.createElement('li');
      parent2.appendChild(child2);
      child2.textContent = this.currentHour[index];
    }
  }
} ;

Store.totalPerHour();
Store.column1();
Store.column2();

