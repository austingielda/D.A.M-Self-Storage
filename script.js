// Modal handling
const reserveBtn = document.getElementById('reserveBtn');
const reservationModal = document.getElementById('reservationModal');
const closeModal = document.getElementById('closeModal');

reserveBtn.addEventListener('click', () => {
    reservationModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    reservationModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === reservationModal) {
        reservationModal.style.display = 'none';
    }
});

// Form submission
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your reservation has been submitted successfully!');
    reservationModal.style.display = 'none';
});
