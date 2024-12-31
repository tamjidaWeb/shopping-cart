function updateProgress(progress) {
    const progressRing = document.getElementById('progress-ring');
    const progressText = document.getElementById('progress-text');

    // Calculate the stroke-dashoffset based on the progress
    const circumference = 314; // Circumference of the circle (2 * π * radius)
    const offset = circumference - (progress / 100) * circumference;
    
    // Update the progress ring and text
    progressRing.style.strokeDashoffset = offset;
    progressText.textContent = `${progress}%`;
  }

  // Set initial progress (e.g., 70% or 80%)
  let progress = 70;  // Change this to 70 or 80 or any value between 0-100
  updateProgress(progress);  

