function startCountdown() {
    let seconds = parseInt(document.getElementById("secondsInput").value);
    const display = document.getElementById("countdownDisplay");
  
    const interval = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(interval);
        display.textContent = "Hết giờ!";
      } else {
        let mins = Math.floor(seconds / 60);
        let secs = seconds % 60;
        display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        seconds--;
      }
    }, 1000);
  }
