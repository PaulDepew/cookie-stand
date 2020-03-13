'use strict';

var allStore = [];
var hours = 14;
var cookieSum = [];
var times = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM','6PM', '7PM'];
var formEl = document.getElementById('generateReport');

function handleForm(event) {
  event.preventDefault();
  var inputs = event.target;

  var newStore = new Store(inputs.name.value, inputs.minCust.value, inputs.maxCust.value, inputs.hourOpen.value, inputs.cookiesPerCustomer.value);
  newStore.push(allStore);
}

formEl.addEventListener('submit', handleForm);

// function handleButton(event) {
//   documen
// }

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
  cookieSum.push(this.cookieSum);
  // console.log(allStore);
};


console.log(cookieSum);
var Seattle = new Store( 'Seattle' , 23, 63, 14, 6.3);
var Tokyo = new Store('Tokyo' , 3, 24, 14, 1.2);
var Dubai = new Store('Dubai', 11, 38, 14, 3.7);
var Paris = new Store('Paris', 20, 38, 14, 2.3);
var Lima = new Store('Lima', 2, 16, 14, 4.6);

headerRow(allStore);

function headerRow() {
  // First Row Cell
  var tableEl = document.getElementById('salesreport');
  var head = document.createElement('td');
  var row = document.createElement('tr');
  row.appendChild(head);
  head.textContent = 'Locations' ;
  tableEl.prepend(row);


  for (var i = 0; i < times.length; i++) {
    var cell = document.createElement('td');
    row.appendChild(cell);
    cell.textContent = times[i];
  }

  var foot = document.createElement('td');
  row.appendChild(foot);
  foot.textContent = 'Totals';


}


function footerRow() {
  // First Row Cell
  var tableEl = document.getElementById('salesreport');
  var row = document.createElement('tr');
  tableEl.appendChild(row);
  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.textContent = 'Totals';
  var dailySum = 0;

  for (var i = 0; i < 5; i++) {
    dailySum = (dailySum + cookieSum[0]);
    // console.log('This is dailySum ' + dailySum);
  }

  // loop through
  for (var hour = 0; hour <= hours; hour++) {
    var hourlySum = 0;
    cell = document.createElement('td');
    row.appendChild(cell);
    // loop through the stores
    for (var store = 0; store < allStore.length; store++){
      hourlySum = hourlySum + allStore[store].hourlySales[hour];
      // console.log(hourlySum);
    }
    cell.textContent = hourlySum;
    row.appendChild(cell);

  }
  cell - document.createElement('td');
  cell.textContent = dailySum;
  row.appendChild(cell);
}

footerRow(allStore);