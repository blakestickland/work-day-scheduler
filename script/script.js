// script.js

    // "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
    $(document).ready(function() {setInterval(function() {

// Display the current day and date at the top of the calendar

        let currentDayTime = moment().format('dddd, MMMM Do');
        $("#currentDay").text(currentDayTime);
        return currentHour;
    }, 1000) ;
    

// global variables
    var currentHour = moment().hour();  // note this is outside createTimeRow function



// funcion to generate one row per hour on the schedule

function createTimeRow(time) {
    
    // Use timeblocks to display the activities for the day
    let newRow = $("<div>");
    newRow.attr("class", "row");
    
    // hour of the day
    let newColTime = $("<div>");
    newColTime.attr("class", "col col-1 col-sm-2 hour");
    newColTime.text(time);
    
    // activity
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

    newColActivity.append(newActivityText);

    // save button (icon)
    let newColSave = $("<div>");
    newColSave.attr("class", "col col-1 col-sm-2 saveBtn");
    let saveBtn = $("<i>");
    saveBtn.attr("class", "far fa-save");

    newColSave.append(saveBtn);

    // add new row
    newRow.append(newColTime, newColActivity, newColSave);
    return newRow;

}


let calendarContainer = $("#calendar");
let times = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

for (let index = 0; index < times.length; index++) {
    const time = times[index];
    calendarContainer.append(createTimeRow(time));
};


// TODO: color code the timeblocks to indicate whether it is in the past, present or future
    // let activityEntry = $("#activity-entry");
    // let calendar24H = index + 9;
    // ** Classes for the different colors in CSS
    //         if (calendar24H < currentHour) {
    //             activityEntry.attr("class", "col col-10 col-sm-8 past");
    //             console.log("past" + currentHour);
    //             console.log("past" + calendar24H);
            
    //         }
    //         else if (calendar24H == currentHour) {
    //             activityEntry.attr("class", "col col-10 col-sm-8 present");
    //             console.log("current" + currentHour);
    //             console.log("current" + calendar24H);
            
    //         }
    //         else {
    //             activityEntry.attr("class", "col col-10 col-sm-8 future");
    //             console.log("future" + currentHour);
    //             console.log("future" + calendar24H);
    //         }

// TODO: be able to save activity entry to local storage
    //TODO: be able to see user input in "activity" textarea
    let userEntry = $("#Activity-9am");
    // add index to userEntry to target each "activity"


    localStorage.setItem("hour", userEntry.val());
    localStorage.getItem("hour");





    let userActivityInput = document.querySelectorAll("textarea");

    var activities = [];

    init();

    function renderActivities() {

        


    }

    function init() {

    // Get stored activities from localStorage,
    // Parsing the JSON string object
    var storedActivities = JSON.parse(localStorage.getItem("activities"));

    // If activities were retrieved from localStorage,  update the activities array to it
    if (storedActivities !== null) {
        activities = storedActivities;
    }

    // Render activities to the DOM
    renderActivities();

    }



    function storeActivities() {
        //Stringify and set "activities" key in localStorage to activities array
        localStorage.setItem("activities", JSON.stringify(activities));
    }

    // When save icon is pressed....
    $(".saveBtn").click(function(event) {
        event.preventDefault();

        console.log(userEntry.val());

        var activityText = userEntry.val().trim();

        //Return from function early if submitted activityText is blank
        if (activityText === "") {
            alert("Please enter activity in text box before clicking save.");
            return;
        }

        // Add new activityText to activities array
        activities.push(activityText);

        // Store update activities in localStorage, re-render the list
        storeActivities();
        renderActivities();
    });
    

// userEntry.keyup(function saveToStorage() {
//     userEntry.attr("style", "background:blue");
//     localStorage.setItem("hour", JSON.stringify(userEntry.value));
//     console.log(userEntry.value);


})

// TODO: make an object that contains HOUR and ACTIVITY
  // create user object from submission
//   let calendar24H = index + 7;

//   var user = {
    // hourColumn: calendar24H.value,
    // userActivity: userActivityInput.value.trim(),
//   };

//   console.log(user);



// TODO: Function to be able to click to save the new event

// TODO: Be able to refresh the page and the saved data persists. 


// });
