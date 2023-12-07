function save(){
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []
    var id
    contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0
    if(document.getElementById('id').value){
        contactList.forEach(value => {
            if(document.getElementById('id').value == value.id){
                value.nama      = document.getElementById('nama').value, 
                value.jumlah    = document.getElementById('jumlah').value; 
            }
        });
        document.getElementById('id').value = ''
    } else{
        var item = {
            id        : id + 1, 
            nama      : document.getElementById('nama').value, 
            jumlah    : document.getElementById('jumlah').value, 
        }
        contactList.push(item)
    }

    localStorage.setItem('listItem', JSON.stringify(contactList))
    all()
    document.getElementById('form').reset()
    }