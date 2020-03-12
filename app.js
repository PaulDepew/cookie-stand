'use strict';

// var locations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima' ]

var allStore = [];
var hours = 14;

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
    custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust) ;

    // this finds the hourly sales total by multiplying cookiesPerCustomer by custPerHour
    this.hourlySales.push(Math.floor(this.cookiesPerCustomer * custPerHour));

  }
  // this sums all the cookies in the daily sales array
  for (var i = 0; i < this.hourOpen; i++) {
    this.cookieSum = (this.cookieSum + this.hourlySales[i]);
  }

  // this writes a table row to the salesreport table
  this.tableEl = document.getElementById('salesreport');
  // console.log(this.tableEl);
  this.row = document.createElement('tr');
  this.tableEl.appendChild(this.row);
  // console.log(this.row);
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

  allStore.push(this);
  console.log(allStore);
};

var Seattle = new Store( 'Seattle' , 23, 63, 14, 6.3);
var Tokyo = new Store('Tokyo' , 3, 24, 14, 1.2);
var Dubai = new Store('Dubai', 11, 38, 14, 3.7);
var Paris = new Store('Paris', 20, 38, 14, 2.3);
var Lima = new Store('Lima', 2, 16, 14, 4.6);

footerRow(allStore);

function footerRow() {
  var dailySum =0;
  // First Row Cell
  var tableEl = document.getElementById('salesreport');
  var row = document.createElement('tr');
  tableEl.appendChild(row);
  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.textContent = 'Totals';

  // loop through
  for (var hour = 0; hour <= hours; hour++) {
    var hourlySum = 0;
    cell = document.createElement('td');
    row.appendChild(cell);
    // loop through the stores
    for (var store = 0; store < allStore.length; store++){
      hourlySum = hourlySum + allStore[store].hourlySales[hour];
      console.log(hourlySum);
    }
    cell.textContent = hourlySum;
    row.appendChild(cell);

    dailySum += hourlySum;
  }
  cell - document.createElement('td');
  cell.textContent = dailySum;
  row.appendChild(cell);
}

