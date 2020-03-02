//PROBLEM 1
//change colour in the div elelment
var div = document.createElement("div");
var br = document.createElement("br");

div.style.color = "yellow";
div.textContent="TOUCH HERE"
document.body.appendChild(div)
div.addEventListener("mouseover",myscript);
function myscript(){
	
	div.style.color = "red";
}

//changing the contents of div using a button click event
document.body.appendChild(br);

var div1 = document.createElement("div");
var div2 = document.createElement("div");
var but = document.createElement("button");


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
var br = document.createElement("br");
document.body.appendChild(br)
var text1 = document.createElement("input");
var text2 = document.createElement("input");
var but1= document.createElement("button");
text1.style.position="absolute"
text1.style.top="20%"
text1.style.right="80%"
text2.style.position="absolute"
text2.style.top="20%"
text2.style.right="65%"
//text1.style.middle="10px"
but1.style.position="absolute"
but1.style.top="20%"
but1.style.right="75%"
//but1.style.middle="30px"
but1.style.marginTop="30px"
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
	var div_err1 = document.createElement("div");
	var div_valid = document.createElement("div");
	var div_valid_pwd = document.createElement("div");
	
	document.body.appendChild(div_err1);
	document.body.appendChild(div_err);
	document.body.appendChild(div_valid);
	document.body.appendChild(div_valid_pwd);
	div_err.textContent="";
	div_err1.textContent="";
	div_valid.textContent="";
	div_valid_pwd.textContent="";
	div_err.style.position="absolute"
	div_err1.style.position="absolute"
	div_valid.style.position="absolute"
	div_valid_pwd.style.position="absolute"
	div_err.style.top="30%"
	div_err.style.right="75%"	
	div_err1.style.top="30%"
	div_err1.style.right="75%"
	div_valid.style.top="30%"
	div_valid.style.right="75%"
	div_valid_pwd.style.top="35%"
	div_valid_pwd.style.right="75%"
	var uname=text1.value;
	var pwd=text2.value;
	var srch1=uname.search("@");
	var srch2=uname.search(".com");
	//Username validation
	if ((uname.length==0)&&(pwd.length>0))
	{
		
		div_err1.style.color="red";
		div_err1.textContent="username and password are mandatory fields"
	}
	else if((uname.length>0)&&(pwd.length==0))
	{
		
		div_err1.style.color="red";
		div_err1.textContent="username and password are mandatory fields"
	}
	else if((uname.length==0)&&(pwd.length==0))
	{
		
		div_err1.style.color="red";
		div_err1.textContent="username and password are mandatory fields"
	}
	else
	{
		if ((srch1 == -1) || (srch2 == -1)){
			srch1=0;
			srch2=0;
		}
		//alert(res)
		if ((srch1) && (srch2))
		{
			alert("hey u entered email id");
			div_valid.style.color="green";
			div_valid.textContent="hey u entered email id"
		}
		else if ((isNaN(uname)==false) && (uname.length==10))
		{
			alert("hey you entered a phone number");
			div_valid.style.color="green";
			div_valid.textContent="hey you entered a phone number"
		}
		else
		{
			
			div_err1.style.color="red";
			div_err1.textContent="Enter a valid email or phone number"
		}
			//password validation
	
		last_char=pwd.substr(-1);
	
		var regex = /^[!@#\$%\^\&*\)\(+=._-]+$/g
		if(pwd.length>8){
			if (regex.test(last_char)==true)
			{
				alert("you have a valid password")
				div_valid_pwd.style.color="green";
				div_valid_pwd.textContent="you have a valid password"
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
	


	

}

//Imgage hovering  on mouseover event
img_arr=["flower1.jpeg","flower2.jpg","flower3.jpg","flower4.jpg","flower5.jpg","flower6.jpg"]
document.body.appendChild(br)
var div_img = document.createElement("div");
document.body.appendChild(div_img);

var img = document.createElement("img");
document.body.appendChild(img);


img.style.height="200px"
img.style.width="200px"
img.style.position="absolute"
img.style.top="50%"
img.style.middle="10px"
img.style.marginTop="-50px"
//img.style.left="1"
img.addEventListener("mouseover",image_hover);
var i=0;
img.src=img_arr[0];
function image_hover()
{
i=i+1;
i=i%img_arr.length;
img.src=img_arr[i]
}



		

      




	

        