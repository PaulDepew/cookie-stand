'use strict';

// var locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima' ] 

var Store = function(storeName, minCust, maxCust, hourOpen, cookiesPerCustomer ) {

  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hourOpen = hourOpen;
  this.cookiesPerCustomer = cookiesPerCustomer;
  this.hourlySales = [];
  this.cookieSum = 0;
  var custPerHour = this.custPerHour;


  for (var currentHour = 0; currentHour < this.hourOpen; currentHour++) {

    // this creates a random customer amount 14 times
    custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust) ;
   
    // this finds the hourly sales total by multiplying cookiesPerCustomer by custPerHour
    this.hourlySales.push(Math.floor(this.cookiesPerCustomer * custPerHour));

    // // this creates 1 array of average hourly sales
    // this.hourlySales.push(this.hourlySales) ;
  }

  for (var i = 0; i < this.hourOpen; i++) {
    this.cookieSum = (this.cookieSum + this.hourlySales[i]);
    
  }

  var tableEL = document.getElementById('salesreport');
  for (var index = 0; index < this.hourOpen; index++) {
    var ChildEl = document.createElement('td');
    ChildEl.appendChild
  }

};

var Seattle = new Store( 'Seattle' , 23, 63, 14, 6.3);
console.log(Seattle);

// var Store = {

//   storeName: 'Seattle',
//   minCust: 23 ,
//   maxCust: 65 ,
//   hourOpen: 14 ,
//   cookiesPerCustomer: 6.3 ,
//   hourlySales: [],
//   currentHour: [],
//   cookieSum:  0,

//   totalPerHour: function() {
//     // this makes the function run 1 per hour open
//     for (var currentHour = 0; currentHour < this.hourOpen; currentHour++) {

//       // this creates a random customer amount 14 times
//       var custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust) ;
//       console.log(custPerHour);

//       // this finds the hourly sales total by multiplying cookiesPerCustomer by custPerHour
//       var hourlySales = Math.floor(this.cookiesPerCustomer * custPerHour) ;

//       // this creates 1 array of average hourly sales
//       this.hourlySales.push(hourlySales);
//       console.log(hourlySales);
//       console.log(currentHour);
//     }
//   } ,

//   sumCookies: function() {
//     for (var currentHour = 0; currentHour < this.hourOpen; currentHour++) {
//       this.cookieSum = Number(this.cookieSum + this.hourlySales[currentHour]);
//     } console.log(this.cookieSum);
//   },

//   // this is a function to create a currentHour Array
//   hours: function() {
//     console.log(this);
//     for (var currentHour = 0; currentHour < this.hourOpen; currentHour++) {
//       this.currentHour.push(currentHour);
//       console.log(currentHour);
//     } return [this.currentHour];
//   } ,

//   togetherColumn: function() {
//     Store.hours();
//     var parent1 = document.getElementById( 'salesreport' );
//     var head1 = document.createElement('p');
//     parent1.appendChild(head1);
//     head1.textContent = this.storeName ;

//     for (var i = 0; i <this.hourlySales.length; i++) {
//       var display = 'For the ' + this.currentHour[i] + ' hour, ' + this.storeName + ' sold ' + this.hourlySales[i] + ' cookies!' ;
//       var child1 = document.createElement('li');
//       parent1.appendChild(child1);
//       child1.textContent = display;
//     }
//     var foot1 = document.createElement('li');
//     parent1.appendChild(foot1);
//     foot1.textContent = ' Total ' + this.cookieSum ;
//   },

// } ;

// Store.totalPerHour();
// Store.sumCookies();
// Store.togetherColumn();