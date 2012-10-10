document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    checkConnection();
    
    var buttonCheckConnection = document.getElementById("buttonCheckConnection");
    buttonCheckConnection.addEventListener("click", checkConnection, false);
}
  
function checkConnection() {
    // Note that iOS can only report whether the device is on a cellular connection,
    // not of what type, thus it will always report as CELL_2G
    var networkState = navigator.network.connection.type,
        messageConnectionType = document.getElementById("messageConnectionType"),
        currentTimeDiv = document.getElementById("currentTime");
    
    //Display the connection type
    messageConnectionType.innerText = networkState;
    
    // Display the time of the test
    currentTimeDiv.innerText = formatTime();
}

function formatTime() {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    var currentSecond = currentDate.getSeconds();
    return currentHour + ":" + fixTime(currentMinute) + ":" + fixTime(currentSecond);
     
    function fixTime(value) {
        if (value < 10) {
            return "0" + value;
        }
        else {
            return value;
        }
    }
}