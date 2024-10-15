const noButton = document.getElementById('no');
const modal = document.getElementById('modal');
const continueButton = document.getElementById('continue');
const container = document.getElementById('container');
const gallery = document.getElementById('gallery'); // Reference to the gallery section
let countdown; // Variable to hold the countdown interval
let timeLeft = 3; // 3 seconds countdown

// Show the modal when the page loads
window.onload = () => {
    modal.style.display = 'flex';
};

// Function to move the "No" button
function moveButton() {
    const randomX = Math.random() * (600 - noButton.offsetWidth); // Random x position within 300 pixels
    const randomY = Math.random() * (400 - noButton.offsetHeight); // Random y position within 200 pixels
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Function to handle "No" button click
function handleNoClick() {
    noButton.textContent = "Are you sure?";
    clearInterval(countdown); // Clear any existing countdown
    timeLeft = 3; // Reset countdown
    updateCountdown(); // Start the countdown
}

// Function to update the countdown
function updateCountdown() {
    countdown = setInterval(() => {
        if (timeLeft > 0) {
            noButton.textContent = `Are you sure? (${timeLeft})`;
            timeLeft--;
        } else {
            clearInterval(countdown); // Stop the countdown
            noButton.textContent = "No"; // Reset to "No"
        }
    }, 1000); // Update every second
}

// Continue button to close the modal and show the main question
continueButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
    container.style.display = 'block'; // Show the main question
});

// Add event listener to the "No" button
noButton.addEventListener('mouseenter', moveButton);
noButton.addEventListener('click', handleNoClick); // Add click event listener

// Add event listener for the "Yes" button
document.getElementById('yes').addEventListener('click', () => {
    gallery.style.display = 'block'; // Show the gallery section
    
    // Randomly position each image
    const images = document.querySelectorAll('#gallery img');
    images.forEach(img => {
        const randomX = Math.random() * (window.innerWidth - 100); // Random x position
        const randomY = Math.random() * (window.innerHeight - 100); // Random y position
        img.style.transform = `translate(${randomX}px, ${randomY}px)`; // Position the image
    });

    alert("YAHOOOOOOOOOO!!!!!! I'm so happy you pressed yes po!(DI DAHIL NAPILITAN KA LANG KASI DI MO MAPRESS YUNG NO😛)");
});
