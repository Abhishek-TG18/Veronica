if ("geolocation" in navigator) {
    // Geolocation is available
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log("Latitude: " + latitude);
            console.log("Longitude: " + longitude);
        },
        function(error) {
            console.error("Error occurred: " + error.message);
        }
    );
} else {
    console.log("Geolocation is not supported by this browser.");
}
const lat = 37.7749; // Latitude
const lon = -122.4194; // Longitude

const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const placeName = data.display_name;
        console.log('Place Name:', placeName);
    })
    .catch(error => console.error('Error fetching location:', error));
