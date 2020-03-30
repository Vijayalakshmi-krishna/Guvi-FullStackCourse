async function signin() {
    
    var data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    //Login for registered
    var resData = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-Type": "application/json"

        },
        body: JSON.stringify(data)

    })

    var rData = await resData.json();
    console.log(rData);
    var vtoken = (rData.token);
    console.log(vtoken);
    //store the token in local storage
    
   localStorage.setItem('token', vtoken);
  

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", vtoken);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    //get the decoded token for token verified users
    fetch("http://localhost:3000/dashboard", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            alert("user login verifed");
            location.replace("dashboard.html");
        })
        .catch(error => console.log('error', error));
}