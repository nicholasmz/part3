
document.addEventListener("DOMContentLoaded", function () {

    const map = L.map('map').setView([40.7128, -74.0060], 13); 


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([40.7128, -74.0060]).addTo(map)
        .bindPopup('New York City')
        .openPopup();
});
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar', 
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'], 
            datasets: [{
                label: 'Monthly Data', 
                data: [10, 20, 15, 30, 25, 40], 
                backgroundColor: 'rgba(75, 192, 192, 0.2)', 
                borderColor: 'rgba(75, 192, 192, 1)', 
                borderWidth: 2 
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true 
                }
            }
        }
    });
});
