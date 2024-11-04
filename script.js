function showPeriodInput() {
    document.getElementById("period-section").style.display = "block";
}

function validatePeriod() {
    const periodInput = document.getElementById("period");
    const predictButton = document.getElementById("predictButton");

    // Set the maximum input length to 17 digits
    periodInput.maxLength = 17;

    // Enable/disable the predict button based on input length
    if (periodInput.value.length === 17) {
        predictButton.disabled = false;
    } else {
        predictButton.disabled = true;
        if (periodInput.value.length < 17 && periodInput.value.length > 0) {
            alert("Please enter a 17-digit period number.");
        }
    }
}

function startPrediction() {
    const periodValue = document.getElementById("period").value;
    if (periodValue.length !== 17) {
        alert("Please enter a 17-digit period number.");
        return;
    }

    // Hide result and show loading animation
    document.getElementById("result").style.display = "none";
    document.getElementById("loading").style.display = "block";
    
    // Start buffering animation and display result after 2 seconds
    setTimeout(generatePrediction, 2000);
}

function generatePrediction() {
    const randomNum = Math.floor(Math.random() * 10);
    const outcome = randomNum < 5 ? "Small" : "Big";
    const color = Math.random() < 0.1 ? "Violet" : (Math.random() < 0.5 ? "Red" : "Green");

    document.getElementById("result").innerHTML = 
        `Prediction: ${randomNum} - ${color} - ${outcome}`;
    document.getElementById("loading").style.display = "none";
    document.getElementById("result").style.display = "block";
}

// Attach an input event listener to call validatePeriod each time the input changes
document.getElementById("period").addEventListener("input", validatePeriod);
