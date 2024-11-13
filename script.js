function openModal(title, description, imageUrl) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-image').src = imageUrl;
    document.getElementById('modal').style.display = 'flex'; // Set to flex to show the modal
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

//Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Toggle Navigation Function
    function toggleNav() {
        var sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.toggle('show');
        } else {
            console.error("Element with ID 'sidebar' not found");
        }
    }
})