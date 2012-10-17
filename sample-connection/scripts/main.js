document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state
document.addEventListener("touchstart", function() {
}, false);

function onDeviceReady() {
	var connectionInfo = new ConnectionApp();
	connectionInfo.run();
}

function ConnectionApp() {
	
}

ConnectionApp.prototype = {
	run: function() {
		var buttonCheckConnection = document.getElementById("buttonCheckConnection"),
		that = this;
		buttonCheckConnection.addEventListener("click",
											   function() {
												   that.checkConnection.apply(that, arguments)
											   },
											   false);
		that.checkConnection();
	},
	
	checkConnection: function() {
		var networkState = navigator.network.connection.type,
		messageConnectionType = document.getElementById("messageConnectionType"),
		currentTimeDiv = document.getElementById("currentTime"),
		that = this;
        
		messageConnectionType.innerText = networkState;
        
		currentTimeDiv.innerText = that.formatTime();
	},
    
	formatTime: function() {
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
}