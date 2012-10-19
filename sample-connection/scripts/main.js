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
		var that = this,
		    buttonCheckConnection = document.getElementById("buttonCheckConnection");
		
		buttonCheckConnection.addEventListener("click",
											   function() {
												   that._checkConnection.apply(that, arguments)
											   },
											   false);
		that._checkConnection();
	},
	
	_checkConnection: function() {
		var that = this,
		networkState = navigator.network.connection.type,
		messageConnectionType = document.getElementById("messageConnectionType"),
		currentTimeDiv = document.getElementById("currentTime");
        
		messageConnectionType.innerText = networkState;
        
		currentTimeDiv.innerText = that._formatTime();
	},
    
	_formatTime: function() {
		var currentDate = new Date(),
		    currentHour = currentDate.getHours(),
		    currentMinute = currentDate.getMinutes(),
		    currentSecond = currentDate.getSeconds();
		
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