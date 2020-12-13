// script.js

    // "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
    $(document).ready(function() {setInterval(function() {


// PSEUDOCODE STEPS

// Display the current day at the top of the calendar
// To do this, use moment() JS to get the current day and date from computer clock

        let currentDayTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").text(currentDayTime);
    }, 1000) ;


function createTimeRow(time) {

// Use timeblocks to display the activities for the day
let newRow = $("<div>");
newRow.attr("class", "row");

let newColTime = $("<div>");
newColTime.attr("class", "col col-1 col-sm-2 hour");
// TODO: add time
newColTime.text(time)

let newColActivity = $("<div>");
newColActivity.attr("class", "col col-10 col-sm-8");
let newActivityText = $("<textarea>");
newActivityText.attr("name", "Activity");
newActivityText.attr("id", "");
newActivityText.attr("cols", "40");
newActivityText.attr("rows", "3");
// TODO: add attr
newColActivity.append(newActivityText);

let newColSave = $("<div>");
newColSave.attr("class", "col col-1 col-sm-2 saveBtn");
let saveBtn = $("<button>");
saveBtn.text("Save");
newColSave.append(saveBtn);

newRow.append(newColTime, newColActivity, newColSave);
return newRow;
}

let calendarContainer = $("#calendar");
let times = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
for (let index = 0; index < times.length; index++) {
    const time = times[index];
    calendarContainer.append(createTimeRow(time));
}


// TODO: color code the timeblocks to indicate whether it is in the past, present or future
    // ** Classes for the different colors in CSS

// TODO: Be able to enter events in the timeblocks

// TODO: Be able to click to save the new event

// TODO: Be able to refresh the page and the saved data persists. 


});
