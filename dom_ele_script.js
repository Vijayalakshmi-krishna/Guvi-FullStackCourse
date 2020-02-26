//change colour in the div elelment
var div = document.createElement("div");
div.style.color = "yellow";
//div.setAttribute("id", "mydiv");

div.textContent="touch here"
document.body.appendChild(div)
div.addEventListener("mouseover",myscript);
function myscript(){
	//alert("hello viji");
	div.style.color = "red";
}

//changing the contents of div using a button click event
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var but = document.createElement("button");
//div.style.color = "yellow";
//div.setAttribute("id", "mydiv");

div1.textContent="I am div 1"
div2.textContent="I am div 2"
document.body.appendChild(div1)
document.body.appendChild(div2)
document.body.appendChild(but)
but.style.height="20px";
but.style.width="100px";
but.textContent="click me"
but.addEventListener("click",myscript1);
function myscript1(){
	var temp="";
	temp=div1.textContent;
	div1.textContent=div2.textContent;	
	div2.textContent=temp;
}

//username password validation

var text1 = document.createElement("input");
var text2 = document.createElement("input");
var but1= document.createElement("button");
document.body.appendChild(text1)
document.body.appendChild(text2)
document.body.appendChild(but1)


text1.placeholder="username"
text2.placeholder="password"
but1.textContent="submit"
but1.style.height="20px";
but1.style.width="100px";
//but1.addEventListener("click",submit_click);
but1.addEventListener("click",submit_wout_regex);
function submit_click()
{
	var uname=text1.value;
	var phoneno = /^\d{10}$/;
	 var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
           
        if (reg.test(uname) == true) 
            {
                alert('you have entered email');
            }

        else if (phoneno.test(uname)){
        	alert("hey you have entered phone num")
        }
	
}
function submit_wout_regex()
{
	var div_err = document.createElement("div");
	document.body.appendChild(div_err);
	div_err.textContent="";
	var uname=text1.value;
	var srch1=uname.search("@");
	var srch2=uname.search(".com");
	if ((uname=="") || (pwd==""))
	{
		
		div_err.style.color="red";
		div_err.textContent="username and password are mandatory fields"
	}
	if ((srch1 == -1) || (srch2 == -1)){
		srch1=0;
		srch2=0;
	}
	//alert(res)
	if ((srch1) && (srch2))
	{
		alert("hey u entered email id");
	}
	else if ((isNaN(uname)==false) && (uname.length==10))
	{
		alert("hey you entered a phone number");
	}
	else
	{
		
		div_err.style.color="red";
		div_err.textContent="Enter a valid email or phone number"
	}

	var pwd=text2.value;

	last_char=pwd.substr(-1);
	
	var regex = /^[!@#\$%\^\&*\)\(+=._-]+$/g
	if(pwd.length>8){
		if (regex.test(last_char)==true)
		{
			alert("you have a valid password")
		}
		else
		{
			
			div_err.style.color="red";
			div_err.textContent="Password should end with a special character"
		}

	}
	else
	{
		
		div_err.style.color="red";
		div_err.textContent="Password must have atleast 8 characters"
	}

}







