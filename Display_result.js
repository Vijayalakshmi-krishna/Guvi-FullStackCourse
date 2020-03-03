window.onload=display();
function display(){
    var res_t1=parseInt((localStorage.getItem("res_T1"))); 
    document.getElementById("Score_T1").value=res_t1;
    var res_t2=parseInt((localStorage.getItem("res_T2")));
    document.getElementById("Score_T2").value=res_t2;
    if(res_t1>res_t2){
        document.getElementById("Win_team").value="Team 1 Wins";
    }
    else if(res_t1<res_t2){
        
        document.getElementById("Win_team").value="Team 2 Wins";
    }
    else{
        document.getElementById("Win_team").value="Match is draw";
    }
    
}
