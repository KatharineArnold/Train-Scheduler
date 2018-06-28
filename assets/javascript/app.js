// Instructions

// Make sure that your app suits this basic spec:

// When adding trains, administrators should be able to submit the following:
// Train Name
// Destination 
// First Train Time -- in military time
// Frequency -- in minutes
// Code this app to calculate when the next train will arrive; this should be relative to the current time.
// Users from many different machines must be able to view same train times.
// Styling and theme are completely up to you. Get Creative!


//set time


// variables
let trainName = $("#train-name").val().trim();
let destination = $("#destination").val().trim();
let frequency = $("#frequency").val().trim();
//calculate what time train arrives
let nextArrival =
    //calculate how many minutes away
    let minutesAway =
        //what to set current ime to?
        let currentTime =





  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAwB8prXB-CkTZtniP7A8FBati7N5f_Qlw",
    authDomain: "train-scheduler-261e1.firebaseapp.com",
    databaseURL: "https://train-scheduler-261e1.firebaseio.com",
    projectId: "train-scheduler-261e1",
    storageBucket: "train-scheduler-261e1.appspot.com",
    messagingSenderId: "813704391239"
};
firebase.initializeApp(config);




// At the page load and subsequent value changes, get a snapshot of the local data.
// This function allows you to update your page in real-time when the values within the firebase 
database.ref().on("value", function (snapshot) {});




    //apend to table
    // train name
    // destination
    // frequency
    // next arrival
    // minutes away
    function appendTable() {
        $("#tBody").append(`
  <tr>
  <td>${trainName}</td>
  <td>${destination}</td>
  <td>${frequency}</td>
  <td>${nextArrival}</td>
  <td>${minutesAway}</td>
</tr>
`)
    }
    appendTable();




    //on click submit event handler do this when submit is clicked
$("#submit-button").on("click", function(event) {
    // Prevent form from submitting
    event.preventDefault();
});