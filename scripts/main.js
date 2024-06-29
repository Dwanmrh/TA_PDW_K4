
document.getElementById("submitBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah pengiriman form
  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
      Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Username dan Password Tidak Boleh Kosong!',
      });
      return false;
  }

  window.location.href = "home.html";
  return true;
}

// Optional: Jika Anda memiliki form lain yang perlu divalidasi dengan cara yang sama
document.getElementById("dataForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman form

  if (validateForm()) {
      this.submit(); // Mengirimkan form jika valid
  }
});


