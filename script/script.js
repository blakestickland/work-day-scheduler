// script.js

    // "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
    $(document).ready(function() {setInterval(function() {


// PSEUDOCODE STEPS

// Display the current day at the top of the calendar
// To do this, use moment() JS to get the current day and date from computer clock

        let currentDayTime = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").text(currentDayTime);
    }, 1000) ;

// global variables


// funcion to generate one row per hour on the schedule

function createTimeRow(time) {
    
    // Use timeblocks to display the activities for the day
    let newRow = $("<div>");
    newRow.attr("class", "row");
    
    let newColTime = $("<div>");
    newColTime.attr("class", "col col-1 col-sm-2 hour");
    // TODO: add time
    newColTime.text(time);
    
    let newColActivity = $("<div>");
    newColActivity.attr("class", "col col-10 col-sm-8");
    newColActivity.attr("id", "activity-entry");
    let newActivityText = $("<textarea>");
    let newActivityTextId = "Activity-" + time;
    newActivityText.attr("id", newActivityTextId);
    newActivityText.attr("name", "Activity");
    newActivityText.attr("cols", "30");
    newActivityText.attr("rows", "3");
    newActivityText.attr("placeholder", "Enter activity here");
     // TODO: add attr
    newColActivity.append(newActivityText);

    let newColSave = $("<div>");
    newColSave.attr("class", "col col-1 col-sm-2 saveBtn");
    let saveBtn = $("<i>");
    saveBtn.attr("class", "far fa-save");
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
function createBgColor (ColActivity, index) {
        // let currentHour = moment().hour();
    let activityBgColor = $("#activity-entry");
    activityBgColor.attr("style", "background:pink");
    let calendar24H = index + 7;
    let currentHour = 10;
    // ** Classes for the different colors in CSS
            if (calendar24H < currentHour) {
                activityBgColor.attr("class", "col col-10 col-sm-8 past");
                console.log("past" + currentHour);
                console.log("past" + calendar24H);
            
            }
            else if (calendar24H == currentHour) {
                activityBgColor.attr("class", "col col-10 col-sm-8 present");
                console.log("current" + currentHour);
                console.log("current" + calendar24H);
            
            }
            else {
                activityBgColor.attr("class", "col col-10 col-sm-8 future");
                console.log("future" + currentHour);
                console.log("future" + calendar24H);
            }
    }


// TODO: make an object that contains HOUR and ACTIVITY
console.log();


// TODO: Function to be able to click to save the new event
$(".saveBtn").click(function save() {
    alert("this is save btn clicked");
    localStorage.setItem("activity")
});

// TODO: Be able to refresh the page and the saved data persists. 


});
