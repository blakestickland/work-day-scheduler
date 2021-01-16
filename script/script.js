// script.js

// global variables
let currentHour = moment().hour();  // note this is outside createTimeRow function
let calendarContainer = $("#calendar");
let times = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];

// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
$(document).ready(function() {

    setInterval(function() {

        // Display the current day and date at the top of the calendar
        let currentDayTime = moment().format('dddd, MMMM Do');
        $("#currentDay").text(currentDayTime);
        
    }, 1000) ; 


// funcion to generate one row per hour on the schedule
function createTimeRow(time, note, colorClass) {
    
    // Use timeblocks to display the activities for the day
    let newRow = $("<div>");
    newRow.attr("class", "row");
    
    // hour of the day
    let newColTime = $("<div>");
    newColTime.attr("class", "col col-2 col-sm-1 hour");
    let newH4Time = $("<h5>");
    newH4Time.text(time);
    newColTime.append(newH4Time);
    
    // activity
    let newColActivity = $("<div>");
    newColActivity.attr("class", "col col-8 col-sm-10 " + colorClass);
    newColActivity.attr("id", "activity-entry");
    
    let newActivityText = $("<textarea>");
    let newActivityTextId = "Activity-" + time;
    newActivityText.attr("id", newActivityTextId);
    newActivityText.attr("data-hour", time);
    newActivityText.attr("cols", "30");
    newActivityText.attr("rows", "3");
    newActivityText.attr("placeholder", "Enter activity here");
    newActivityText.val(note);
    
    newColActivity.append(newActivityText);
    
    // save button (icon)
    let newColSave = $("<div>");
    newColSave.attr("class", "col col-2 col-sm-1 saveBtn");
    newColSave.attr("data-hour", time);
    let saveBtn = $("<i>");
    saveBtn.attr("class", "far fa-save");
    
    newColSave.append(saveBtn);
    
    // add new row
    newRow.append(newColTime, newColActivity, newColSave);
    return newRow;
};




for (let index = 0; index < times.length; index++) {
    const time = times[index];
    let note = localStorage.getItem(time);
    let momentTime = moment(time, "hha").hour();
    let currentTime = moment().hour();
    let color;
    if (momentTime < currentTime) {
        color = "past";
    }
    else if (momentTime === currentTime) {
        color = "present";
    }
    else if (momentTime > currentTime) {
        color = "future";
    }
    calendarContainer.append(createTimeRow(time, note, color));
};


// When save icon is pressed....
function saveActivityLocalStorage(event) {
    event.preventDefault();
    
    let clickedHour = $(this).attr("data-hour");
    let clickedHourActivity = "#Activity-" + clickedHour;
    let activityToBeSaved = $(clickedHourActivity).val().trim();
    
    //Return from function early if submitted activityToBeSaved is blank
    if (activityToBeSaved === "") {
        alert("Please enter activity in text box before clicking save.");
        return;
    }

    
    // Store update activities in localStorage, re-render the list
    localStorage.setItem(clickedHour, activityToBeSaved);
};

                
// Add click event listeners to all elements with a class of "saveBtn" 
$(document).on("click", ".saveBtn", saveActivityLocalStorage);

});
