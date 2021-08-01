#### Date Difference 
Calculate the difference in days between the two pairs of dates

### How to run
1. Open the project folder
2. Run the index.html through the browser

### How to use
1. Open the index.html webpage.
2. Enter the Start date and end date separately in "DD MM YYYY" format.
3. Click on the Submit button.
4. The result will be displayed below in this format: "DD MM YYYY, DD MM YYYY, difference" and the difference is the number of days.

### Test Validations
1.Check input date pairs 

Input: 02 02 1993, 03 02 1993
Output: 02 02 1993 , 03 02 1993 , 1

Input: 31 02 1993 29 02 1993
Output: Invalid day!

Input: 02 24 1993, 05 02 1993
Output: Invalid Month!

Input: 02 24 1993, 05 02 2222
Output: Input year must be between 1900 - 2010!

Input: 11 02 1993, 10 02 1993
Output: Start date should be ealier than end date!

Input: 11 02 1993, 22 05 1992
Output: Start date should be ealier than end date!

Input: 30 12 1993, 22 11 1995
Output: 30 12 1993 , 22 11 1995 , 692
