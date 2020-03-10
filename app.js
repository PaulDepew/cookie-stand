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

  }
  // this sums all the cookies in the daily sales array
  for (var i = 0; i < this.hourOpen; i++) {
    this.cookieSum = (this.cookieSum + this.hourlySales[i]);
  }

  // this write a table row to the salesreport table

  this.tableEl = document.getElementById('salesreport');
  console.log(this.tableEl);
  this.row = document.createElement('tr');
  this.tableEl.appendChild(this.row);
  console.log(this.row);
  this.head = document.createElement('td');
  this.row.appendChild(this.head);
  this.head.textContent = storeName ;

  for (i = 0; i < this.hourlySales.length; i++) {
    this.cell = document.createElement('td');
    this.row.appendChild(this.cell);
    this.cell.textContent = this.hourlySales[i];
  }

  this.foot = document.createElement('td');
  this.row.appendChild(this.foot);
  this.foot.textContent = this.cookieSum;

};

var Seattle = new Store( 'Seattle' , 23, 63, 14, 6.3);
console.log(Seattle);
var Tokyo = new Store('Tokyo' , 3, 24, 14, 1.2);
var Dubai = new Store('Dubai', 11, 38, 14, 3.7);
var Paris = new Store('Paris', 20, 38, 14, 2.3);
var Lima = new Store('Lima', 2, 16, 14, 4.6);

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