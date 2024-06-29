document.getElementById('InputMhs').addEventListener('submit', function(event) {
  event.preventDefault(); 

  let nama = document.getElementById('nama').value.trim();
  let nim = document.getElementById('nim').value.trim();
  let program = document.getElementById('program').value.trim();
  let stsbimbingan = document.getElementById('stsbimbingan').value.trim();
  let nohp = document.getElementById('nohp').value.trim();

  if (nama === '' || nim === '' || program === '' || stsbimbingan === '' || nohp === '') {
      Swal.fire({
          icon: 'warning',
          title: 'data tidak boleh kosong',
          text: 'Silakan lengkapi semua kolom',
      });
  } else {
      Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          text: 'Data berhasil disimpan!',
      });

      let form2Data = {
          nama: nama,
          nim: nim,
          program: program,
          status_bimbingan: stsbimbingan,
          no_telepon: nohp
      };

      localStorage.setItem('form2Data', JSON.stringify(form2Data));
  }
});