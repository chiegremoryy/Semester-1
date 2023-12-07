function edit(id){
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []
    contactList.forEach(function (value){
        if(value.id == id){
           document.getElementById('id').value = value.id
           document.getElementById('nama').value = value.nama
           document.getElementById('jumlah').value = value.jumlah
           
        }
    })
}