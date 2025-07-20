// Get locations from the data attribute
const mapLeaflet = document.getElementById("map");

if (mapLeaflet) {
    const locations = JSON.parse(mapLeaflet.dataset.locations);
    // Initialize the map with a broad view
    const map = L.map("map", {
        scrollWheelZoom: false,
        zoomControl: false,
        zoomAnimation: true,
    }).setView([20, 0], 2); // Start with world view

    // Add the tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // Prepare points and bounds
    const points = locations.map((loc) => [
        loc.coordinates[1],
        loc.coordinates[0],
    ]);
    const bounds = L.latLngBounds(points);

    // Add markers
    locations.forEach((loc) => {
        L.marker([loc.coordinates[1], loc.coordinates[0]])
            .addTo(map)
            .bindPopup(`<p>Day ${loc.day}: ${loc.description}</p>`, {
                autoClose: false,
            })
            .openPopup();
    });

    // Add animated zoom to bounds after delay
    setTimeout(() => {
        map.flyToBounds(bounds, {
            padding: [150, 150],
            duration: 2,
        });
    }, 200);
}
