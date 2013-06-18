document.addEventListener("deviceready", onDeviceReady, false);
//Activate :active state on devices
document.addEventListener("touchstart", function() {
}, false);

function onDeviceReady() {
	navigator.splashscreen.hide();
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
		var now = new Date().toTimeString();
		
		currentTimeDiv.innerText = now;
	},
    
}