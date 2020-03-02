
var groups = [
  { 'id': 1, 'name': 'Student1', 'confirmed': false },
  { 'id': 2, 'name': 'Student2', 'confirmed': true },
  { 'id': 3, 'name': 'Student3', 'confirmed': false },
  { 'id': 4, 'name': 'Student4', 'confirmed': false },
  { 'id': 5, 'name': 'Student5', 'confirmed': true },
  { 'id': 6, 'name': 'Student6', 'confirmed': true },
  { 'id': 7, 'name': 'Student7', 'confirmed': true },
  { 'id': 8, 'name': 'Student8', 'confirmed': true }
];

    
var table = document.createElement('table');

        // SET THE TABLE ID. 
        // WE WOULD NEED THE ID TO TRAVERSE AND EXTRACT DATA FROM THE TABLE.
table.setAttribute('id', 'stud_tbl');
table.setAttribute("border", "4");

var arrHead = new Array();
arrHead = ['ID','NAME','ID','NAME'];
var tr = table.insertRow(-1);

for (var h = 0; h < (arrHead.length); h++) {
    var th = document.createElement('th');              
    th.innerHTML = arrHead[h];
    tr.appendChild(th);
}
st_val=0;
for (var c = 0; c < groups.length/2; c++) {
tr = table.insertRow(-1);

for (var j = st_val; j < st_val+2; j++) {
    var td = document.createElement('td');          
    td1 = tr.insertCell(-1);
    td2 = tr.insertCell(-1);
    td1.innerHTML = groups[j].id;  
    td2.innerHTML = groups[j].name;                
}
st_val=st_val+2;
}

document.body.appendChild(table);