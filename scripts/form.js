document.getElementById('bimbinganForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
  
    // Display SweetAlert confirmation
    Swal.fire({
        title: 'Confirm Submission',
        text: "Are you sure you want to submit the form?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, submit it!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Form submission confirmed
            console.log(data); // You can replace this with actual form submission code (e.g., AJAX request)
            Swal.fire(
                'Submitted!',
                'Your form has been submitted.',
                'success'
            );
            // Optionally, you can submit the form programmatically here
            // this.submit();
            localStorage.setItem('form1Data', JSON.stringify(data));
        }
    });
});