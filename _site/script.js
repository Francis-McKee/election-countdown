// Set the date for Election Day
const electionDate = new Date("November 5, 2024 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = electionDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown-timer").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Update the countdown every second
    setTimeout(updateCountdown, 1000);
}

// Start the countdown
updateCountdown();
