window.onload=display();
function display(){
    var res_t1=parseInt((localStorage.getItem("res_T1"))); 
    var p_score_t1_arr=localStorage.getItem("player_score_T1").split(",").map(Number); 
    document.getElementById("Score_T1").value=res_t1;
    var res_t2=parseInt((localStorage.getItem("res_T2")));
    var p_score_t2_arr=localStorage.getItem("player_score_T2").split(",").map(Number);
    
    document.getElementById("Score_T2").value=res_t2;
    if(res_t1>res_t2){
        document.getElementById("Win_team").value="Team 1 Wins by " +  (res_t1-res_t2) + " runs";
    }
    else if(res_t1<res_t2){
        
        document.getElementById("Win_team").value="Team 2 Wins by "+ (res_t2-res_t1)+" runs";
    }
    else{
        document.getElementById("Win_team").value="Match is draw";
    }
    
    var T1_scoreboard=document.getElementById("T1_scoreboard");
    for (var i=0;i<p_score_t1_arr.length;i++){
        var row=T1_scoreboard.insertRow(-1);
       
            var cell1=row.insertCell(-1);
            var cell2=row.insertCell(-1);
            cell1.innerHTML="player "+ (i+1);
            cell2.innerHTML=p_score_t1_arr[i];
        
    }

    var T2_scoreboard=document.getElementById("T2_scoreboard");
    for (var i=0;i<p_score_t2_arr.length;i++){
        var row=T2_scoreboard.insertRow(-1);
      
            var cell1=row.insertCell(-1);
            var cell2=row.insertCell(-1);
            cell1.innerHTML="player "+ (i+1);
            cell2.innerHTML=p_score_t2_arr[i];
        
    }
   
    
    

}
