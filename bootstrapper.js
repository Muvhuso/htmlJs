console.log("Loaded bootstrapper");

info = null;

function onTimeout() {
	console.log("timeout has been callled");
	info = "$('.startScreenMessage')"

	console.log(info);
}

setTimeout(onTimeout, 20000);