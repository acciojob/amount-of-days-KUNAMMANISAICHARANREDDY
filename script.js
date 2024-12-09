//your JS code here. If required.
function daysOfAYear(year) {
  // Check if the year is a leap year
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366;  // Leap year has 366 days
  } else {
    return 365;  // Non-leap year has 365 days
  }
}
function daysOfAYear(year) {
  // Check if the year is a leap year
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366;  // Leap year has 366 days
  } else {
    return 365;  // Non-leap year has 365 days
  }
}

// Prompt the user to enter a year
let year = parseInt(prompt("Enter a year:"));

// Ensure the input is a valid number and then display the result
if (!isNaN(year)) {
  alert(daysOfAYear(year));  // Display the result in an alert
} else {
  alert("Please enter a valid year.");
}


