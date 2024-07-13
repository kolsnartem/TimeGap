let is24HourFormat = true;

function calculateTimeDifference() {
    const time1 = document.getElementById('time1').value;
    const time2 = document.getElementById('time2').value;

    if (!time1 || !time2) {
        alert('Будь ласка, введіть обидва значення часу.');
        return;
    }

    const date1 = new Date(`2000-01-01T${time1}`);
    const date2 = new Date(`2000-01-01T${time2}`);

    let diff = Math.abs(date2 - date1);
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);

    document.getElementById('result').textContent = `Різниця: ${hours} год ${minutes} хв`;
}

function toggleTimeFormat() {
    is24HourFormat = !is24HourFormat;
    const inputs = document.querySelectorAll('input[type="time"]');
    inputs.forEach(input => {
        if (is24HourFormat) {
            input.step = '1';
        } else {
            input.step = '60';
        }
    });
}

// Ініціалізація формату часу
toggleTimeFormat();