// Function to display the current time
function displayTime() {
    const currentTime = new Date();
    const timeString = currentTime.toLocaleTimeString();
    document.getElementById('current-time').innerText = "Current Time: " + timeString;
}
