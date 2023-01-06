// Fungsi untuk menampilkan pesan alert
function showAlert(message) {
    alert(message);
  }
  
  // Event listener untuk tombol "Show Alert"
  document.getElementById('btn-show-alert').addEventListener('click', function() {
    showAlert('Hello World!');
  });
  
  // Fungsi untuk mengubah warna latar belakang website
  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  // Event listener untuk tombol "Change Color"
  document.getElementById('btn-change-color').addEventListener('click', function() {
    changeBackgroundColor('#333');
  });
  