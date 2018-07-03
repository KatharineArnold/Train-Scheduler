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

$(document).ready(function () {

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

    // Create a variable to reference the database.
    var database = firebase.database();


function calculateNextTrain(firstTrainTime, frequency){
    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % frequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = frequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm"));

    return {
        time: moment(nextTrain).format("HH:mm"),
        minutesAway: tMinutesTillTrain,
    }
};
    

    // At the page load and subsequent value changes, get a snapshot of the local data.
    // This function allows you to update your page in real-time when the values within the firebase 
    // database.ref().on("value", function (snapshot) {});

    // database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function (childSnapshot) {
    database.ref().on("child_added", function (childSnapshot) {
        const firstTrainTime = childSnapshot.val().firstTrainTime;
        const frequency = childSnapshot.val().frequency
       
        const nextTrainInfo = calculateNextTrain(firstTrainTime, frequency);
        $("#tBody").append(`
        <tr>
        <td>${childSnapshot.val().trainName}</td>
        <td>${childSnapshot.val().destination}</td>
        <td>${frequency}</td>
        <td>${nextTrainInfo.time}</td>
        <td>${nextTrainInfo.minutesAway}</td>

        </tr>
        `)
      
    })






    //apend to table
    // train name
    // destination
    // frequency
    // next arrival
    // minutes away
    //     function appendTable() {
    //         $("#tBody").append(`
    //   <tr>
    //   <td>${trainName}</td>
    //   <td>${destination}</td>
    //   <td>${frequency}</td>
    //   <td>${nextArrival}</td>
    //   <td>${minutesAway}</td>
    // </tr>
    // `)

    // }





    //on click submit event handler do this when submit is clicked
    $("#submit-button").on("click", function (event) {
        // Prevent form from submitting
        event.preventDefault();

        // variables
        let trainName = $("#train-name").val().trim();
        let destination = $("#destination").val().trim();
        let frequency = $("#frequency").val().trim();
        let  firstTrainTime= $("#first-train-time").val().trim();

        //calculate what time train arrives
        // let nextArrival =
        //     //calculate how many minutes away
        //     let minutesAway =



        //append to firebase database
        database.ref().push({
            dateAdded: firebase.database.ServerValue.TIMESTAMP,
            trainName: trainName,
            destination: destination,
            frequency: frequency,
            firstTrainTime: firstTrainTime,
        });
    });
});