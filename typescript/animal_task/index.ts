export{}
var animaltable=<HTMLTableElement>document.getElementById("animaltable");
var row;
class Cat{
    name:String;
    constructor(catName)
    {
        this.name=catName;
        var catImage = document.createElement("img");
        catImage.src = 'https://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg';
        catImage.style.cursor = "pointer";
        catImage.style.width = "200px";
        let row= animaltable.insertRow();
        let cell1=row.insertCell(0);        
        let cell2=row.insertCell(1);
        cell1.append(catImage);
        catImage.onclick=this.clickCat();
        document.body.appendChild(animaltable);
    }

    clickCat=()=>{
        return()=>{alert(this.name + " is clicked")} 
    }
}

class Dog{
    name:String;
    constructor(name)
    {
        this.name=name;
        let dogImage=document.createElement("img");        
        dogImage.src='https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg'
        dogImage.style.cursor = "pointer";
        dogImage.style.width = "200px";
         row= animaltable.insertRow();
         let cell1=row.insertCell(0);
        let cell2=row.insertCell(1);
        cell2.append(dogImage);
        dogImage.onclick=this.clickDog();
        document.body.appendChild(animaltable);
    }
    clickDog=()=>
    {
        return ()=>{
            alert(this.name + " is clicked")
        }
    }
}

let createCat=()=>
{
    let name=prompt("give a cat name:")
    new Cat(name);
}

let createDog=()=>{
    let name=prompt("give a dog name:")
    new Dog(name);
}

