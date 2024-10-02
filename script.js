// List of correct numbers for each image in order
const correctNumbers = [1, 2, 3, 4, 5, 6, 7, 9]; // Updated to include 8 images
const totalImages = correctNumbers.length;

// Function to get a random image index
function getRandomImageIndex() {
    return Math.floor(Math.random() * totalImages);
}

// Function to display a random image
function displayRandomImage() {
    const randomIndex = getRandomImageIndex();
    const correctNumber = correctNumbers[randomIndex];

    // Update the image source to PNG
    document.getElementById('color-blind-image').src = `images/color-blind-${correctNumber}.png`;

    // Clear the input field and hide it initially
    document.getElementById('color-blind-input').value = ''; // Clear previous input
    document.getElementById('color-blind-input').style.display = 'none'; // Hide input until the image is shown

    // Show the image for 2 seconds before enabling the input
    setTimeout(() => {
        document.getElementById('color-blind-input').style.display = 'inline'; // Show input after 2 seconds
    }, 2000); // 2000 milliseconds = 2 seconds
}

// Function to check user input
function checkColorBlindness() {
    const userInput = parseInt(document.getElementById('color-blind-input').value);
    const correctNumber = parseInt(document.getElementById('color-blind-image').src.split('-').pop().split('.')[0]);

    // Check if the input is correct
    if (userInput === correctNumber) {
        alert("Correct!");
    } else {
        alert(`Incorrect. The correct number was ${correctNumber}.`);
    }

    // Ask if the user wants to try another image
    const retry = confirm("Do you want to try another image?");
    if (retry) {
        displayRandomImage(); // Show a new random image
    } else {
        alert("Thank you for taking the test!");
    }

    // Hide the input field after submission
    document.getElementById('color-blind-input').style.display = 'none';
}

// Wait for the DOM to load before starting the test
document.addEventListener("DOMContentLoaded", () => {
    displayRandomImage();
});
