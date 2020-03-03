function setdata(a){
    
    
    if (a!='c'){
        document.getElementById("text1").value+=a;
    }
    else
    {
        document.getElementById("text1").value="";
    }
    
    
    
}
function calculate(){
   var op;
var inp=document.getElementById("text1").value;


var num_arr=inp.split("");
if (num_arr.includes('+')){
    
    op='+';
    
}
else if(num_arr.includes('-')){
    op='-';
}
else if(num_arr.includes('*')){
    op='*';
}
else if(num_arr.includes('/')){
    op='/';
}
else{
    op="";
}
if(op!=""){

    var val=inp.split(op);
    var num1=parseInt(val[0]);
    var num2=parseInt(val[1]);
}
var obj=new calculator(num1,num2);
var res=0;
switch (op){
    case '+':
            res=obj.add();
            document.getElementById("text1").value=res;
            break;
    case '-':
            res=obj.sub();
            document.getElementById("text1").value=res;
            break;
    case '*':
            res=obj.mul();
            document.getElementById("text1").value=res;
            break;
    case '/':
            res=obj.div();
            document.getElementById("text1").value=res;
            break;
    case 'c':
            document.getElementById("text1").value="";
            break;
}
}
class calculator{
    constructor(a,b){
        this.a=a;
        this.b=b;
        
    }
    add(){
        
        return this.a+this.b;


    }
   
    sub(){
        return this.a-this.b;
    }

    mul(){
        return this.a*this.b;
    }

    div(){
        return this.a/this.b;
    }
    
}
