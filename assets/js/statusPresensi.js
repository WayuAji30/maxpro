// Function to handle status selection and show alert
function setupStatusSelection() {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const alertBox = document.querySelector('.alert');
    const statusPresensi = document.getElementById('statusPresensi');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function () {
            const selectedStatus = this.textContent.trim();
            statusPresensi.textContent = `"${selectedStatus}"`;
            alertBox.classList.remove('d-none');
        });
    });

    document.querySelector('.remove-button').addEventListener('click', function () {
        alertBox.classList.add('d-none');
    });
}

document.addEventListener('DOMContentLoaded', setupStatusSelection);