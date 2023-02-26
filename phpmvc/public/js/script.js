$(function() {
    $('.tombolTambahData').on('click', function() {
        $('#formModalLabel').html('Tambah Data Mahasiswa');
        $('#nama').val('');
        $('#nrp').val('');
        $('#email').val('');
        $('#jurusan').val('');
        $('#id').val('');
        $('.modal-footer button[type=submit]').html('Tambah Data');
        $('.modal-body form').attr('action', baseurlTambah);
        
    });
   
   
    $('.tampilModalUbah').on('click', function () {
        $('#formModalLabel').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        $('.modal-body form').attr('action', baseurlUbah);
        
        const id = $(this).data('id');
       
        $.ajax({
            url: baseurlTampil,
            data: { id: id },
            method: 'post',
            dataType: 'json',
            success: function (data) {
                $('#nama').val(data.nama);
                $('#nrp').val(data.nrp);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
                
            }
        });
  
    });
});