
var preview_box = document.createElement("img");
document.body.appendChild(preview_box);
preview_box.style.height="200px"
preview_box.style.width="200px"
preview_box.src="flower2.jpg";

var img_box1 = document.createElement("img");
img_box1.style.height="200px"
img_box1.style.width="200px"
img_box1.src="flower2.jpg";

img_box1.style.position="absolute"
img_box1.style.bottom="0px"
//img_box1.style.right="0px"
img_box1.id="img_box1"
document.body.appendChild(img_box1);

var img_box2 = document.createElement("img");
img_box2.style.height="200px"
img_box2.style.width="200px"
img_box2.style.position="absolute"
img_box2.style.right="0px"
img_box2.style.bottom="0px"
img_box2.src="flower3.jpg";
img_box2.id="img_box2"
document.body.appendChild(img_box2);


var img_box3 = document.createElement("img");
img_box3.style.height="200px"
img_box3.style.width="200px"
img_box3.style.position="absolute"
img_box3.style.left="0px";
img_box3.style.bottom="0px";
img_box3.src="flower4.jpg";
img_box3.id="img_box3"
document.body.appendChild(img_box3);

img_box1.addEventListener("click",pre_box1);
img_box2.addEventListener("click",pre_box1);
img_box3.addEventListener("click",pre_box1);
function pre_box1(){

	 //document.getElementById("img_box1")
	 if (this.id=="img_box1"){
	 	preview_box.src="flower2.jpg";
	 	//alert("hi");
	 }
	 else if (this.id=="img_box2"){
	 	preview_box.src="flower3.jpg";
	 	//alert("hi");
	 }
	 else if (this.id=="img_box3"){
	 	preview_box.src="flower4.jpg";
	 	//alert("hi");
	 }
	 else
	 {

	 }
	
}