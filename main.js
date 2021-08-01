//Caculate Dates Difference
// After the HTML document is loaded, execute the following functions
 window.onload = (function() {
  // handle submit
  document.getElementById('submit').addEventListener('click', function(event) {
      clearPreviousResult();
      let dates = document.getElementById("dates").value;

      function clearPreviousResult() {
          document.getElementById('result').innerHTML = "";
      };
      //Get dates value
      function getEnteredArgs() {
          enteredInputs = document.getElementById("dates").value;
      }
      getEnteredArgs();
      inputs = enteredInputs;
      let inputsArray = enteredInputs.split(',')
      if (dates) {
          let daysDiff = dateDiff(inputsArray[0].trim(), inputsArray[1].trim())
          displayResult(daysDiff);
      } else {
          alert('Input Empty!')
      }
  });

  //Diplay date difference result
  function displayResult(result) {
      let para = document.createElement("P");
      para.appendChild(document.createTextNode(result));
      document.getElementById('result').appendChild(para);
  };

  // Check if is the leap year
  function isLeapYear(year) {
      if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
          return 366;
      } else {
          return 365
      }
  };

  //get days of each month
  function daysInMonth(year, month) {
      switch (month) {
          case 1:
          case 3:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
              return 31
          case 4:
          case 6:
          case 9:
          case 11:
              return 30
          case 2:
              if (isLeapYear(year) === 366) {
                  return 29;
              } else {
                  return 28

              }
      }
  };

  //get total days based on year,month
  function totalDays(year, month = false) {
      return month ?
          daysInMonth(year, month) : isLeapYear(year);
  };

  /**
   * Get the rest days of the year
   */
  function restDays(dateObject) {
      const {
          day,
          month,
          year
      } = dateObject;
      let passedDays = 0;
      for (let i = 1; i < month; i++) {
          passedDays += totalDays(year, i);
      }
      return totalDays(year) - (passedDays + day);
  };


  //Get the passed days of the year
  function passedDays(dateObject) {
      const {
          year
      } = dateObject;
      return totalDays(year) - restDays(dateObject);
  };

  //Check if the input year is between 1900-2010, month between 1-12, days in correct range
  function yearRange(year) {
      if (year >= 1900 && year <= 2010) {
          return true;
      } else {
          return false;
      }

  };

  function monthRange(month) {
      if (month >= 1 && month <= 12) {
          return true;
      } else {
          return false;
      }

  };

  function dayRange(year, month, day) {
      if (day >= 1 && day <= daysInMonth(year, month)) {
          return true;
      } else {
          return false;
      }


  };

  //construct a json object like {day:?, month:?, year:?}
  function dateObject(inputDate) {
      return {
          "day": parseInt(inputDate.split(' ')[0]),
          "month": parseInt(inputDate.split(' ')[1]),
          "year": parseInt(inputDate.split(' ')[2]),
      }
  };


  // Caculate the days between two entered dates
  function dateDiff(firstInputDate, secondInputDate) { //set keys for object
      const keys = ["day", "month", "year"];

      //string to object
      const [date1, date2] = [dateObject(firstInputDate), dateObject(secondInputDate)];

      //Validate year, month 
      if (!yearRange(date1.year) || !yearRange(date2.year)) {
          return "Input year must be between 1900 - 2010!";
      } else if (!monthRange(date1.month) || !monthRange(date2.month)) {
          return "Invalid Month!";
      } else if (!dayRange(date1.year, date1.month, date1.day) || !dayRange(date2.year, date2.month, date2.day)) {
          return "Invalid day!";
      };
      //validate the first date is the earliest
      if (date1.year > date2.year) {
          return "first date should be ealier than second date!";
      } else if (date1.year >= date2.year && date1.month > date2.month) {
          return "first date should be ealier than second date!";
      } else if (date1.year >= date2.year && date1.month >= date2.month && date1.day > date2.day) {
          return "first date should be ealier than second date!";
      }

      // Counter used for calculation
      let daysBetweenYears = 0;

      // If the year number of the start year is the same as the second one
      if (date1.year === date2.year) {
          return firstInputDate + ' , ' + secondInputDate + ' , ' + (passedDays(date2) - passedDays(date1));
      }
      // If the years are not the same
      for (let i = date1.year; i < date2.year - 1; i++) {

          daysBetweenYears += totalDays(i);
      }
      return (firstInputDate + ' , ' + secondInputDate + ' , ' +
          (restDays(date1) +
              daysBetweenYears +
              passedDays(date2))
      );
  }

})