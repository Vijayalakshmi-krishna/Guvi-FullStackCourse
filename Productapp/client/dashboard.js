window.onload = showCart();
//window.onload=getUserData();
async function getUserData() {
    var user = await fetch("http://localhost:3000/user", {
        method: 'GET'
    });
    var userData = await user.json();


   //document.getElementById("h1").innerHTML="welcome "+  userData.name;
}

async function insert() {
    var data = {
        product: document.getElementById("essentials").value,
        quantity: document.getElementById("quantity").value
    };
    var resData = await fetch("http://localhost:3000/insert", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"

        },
        body: JSON.stringify(data)

    })
    var vpdtlist = await resData.json();
    console.log(vpdtlist);
    var row = mycart.insertRow();
    var cell1 = row.insertCell(0);
    cell1.innerHTML = data.product;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = data.quantity;
    var cell3 = row.insertCell(2);

    img = document.createElement("img");
    img.src = "trash.jpj";
    img.style.cursor = "pointer";
    img.style.width = "10px";
    cell3.appendChild(img);

}
async function showCart() {

    var resData = await fetch("http://localhost:3000/display", {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"

        }

    });
    var dispcart = await resData.json();
    console.log(dispcart);
    var x = document.getElementById("mycart").rows.length;
    /*if(x>0){
         for(i=1;i<x;i++)
         {
             document.getElementById("mycart").deleteRow(i);
         }
     }*/

    for (i = 0; i < dispcart.length; i++) {
        var row = mycart.insertRow();

        var cell1 = row.insertCell(0);
        cell1.innerHTML = dispcart[i].product;
        var cell2 = row.insertCell(1);
        cell2.innerHTML = dispcart[i].quantity;
        var cell3 = row.insertCell(2);

        img = document.createElement("img");
        img.id = dispcart[i]._id
        img.src = "trash.jpg";
        img.style.cursor = "pointer";
        img.style.width = "25px";
        cell3.appendChild(img);
        (function (i) {
            img.onclick = function () {
                var rowid = row.parentNode.parentNode.rowIndex;
                delItem(dispcart[i].product, rowid);
            }
        })(i);

        var cell4 = row.insertCell(3);

        img = document.createElement("img");
        img.id = dispcart[i]._id
        img.src = "edit.png";
        img.style.cursor = "pointer";
        img.style.width = "25px";
        cell4.appendChild(img);
        (function (i) {
            img.onclick = function () {
                var rowid = row.parentNode.parentNode.rowIndex;
                updateItem(dispcart[i].product, rowid)
            }
        })(i);
    }
}

async function delItem(item, rowid) {

    var data = { product: item }
    console.log(data);
    fetch("http://localhost:3000/delete", {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

        .then(function (data) {
            console.log(data.json())
        })
    document.getElementById("mycart").deleteRow(rowid);

}

async function updateItem(item, rowid) {

    var data = {
        product: item,
        quantity: document.getElementById("quantity").value
    }
    console.log(data);
    fetch("http://localhost:3000/update", {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

        .then(function (data) {
            console.log(data.json())
        })


}


