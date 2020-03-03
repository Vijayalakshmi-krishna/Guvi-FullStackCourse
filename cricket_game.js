function fn_bat(but_id){
     
    if(but_id=="bat_team_1"){
               
        Disable_button("bat_team_2");
        var play_obj1=new Team(11,36,6)
        var tot_runs=play_obj1.calculateRun();
        document.getElementById("result_team1").value=tot_runs;
        
        localStorage.setItem("res_T1", result_team1.value);
        
        fn_play();
        
    }
    
       if(but_id=="bat_team_2") {

        Disable_button("bat_team_1");
        var play_obj2=new Team(11,36,6)
        var tot_runs=play_obj2.calculateRun();
        document.getElementById("result_team2").value=tot_runs;
        
        localStorage.setItem("res_T2", result_team2.value);
        
        fn_play();
        
       }  
     
}

function fn_play(){

        if((document.getElementById("result_team1").value!="")&&(document.getElementById("result_team2").value!=""))
        {
            Disable_button("bat_team_1");
            Disable_button("bat_team_2");
        }
        else if (document.getElementById("result_team1").value!="")
        {
            Disable_button("bat_team_1");
            Enable_button("bat_team_2");
        }
        else if(document.getElementById("result_team2").value!=""){
            Disable_button("bat_team_2");
            Enable_button("bat_team_1");
        }
        else{
            Enable_button("bat_team_1");
            Enable_button("bat_team_2");

        }
        
        
}
function Enable_button(id){
    document.getElementById(id).disabled=false;
           
}
function Disable_button(id){
    document.getElementById(id).disabled=true;
}



class Team{
    constructor(players,tot_balls,player_balls){
        this.players=players;
        this.tot_balls=tot_balls;
        this.runs=0;
        this.player_balls=player_balls;
    }
    calculateRun(){
        var score_arr=[];
        
        while(this.tot_balls>0)
        {
           
            while(this.players>0)
            {
                this.player_balls=6;
               
                while(this.player_balls>0)
                {
                    var gen_rand=Math.floor((Math.random()*100)%7);
                    
                    if (gen_rand==0){
                        break;
                    }
                    this.runs+=gen_rand;
                    this.player_balls--;

                }
               // scoreboard(this.players,this.runs);
                score_arr.push(this.runs);
                this.players--;
               
            }
            
            this.tot_balls--;
           
        }
        score_arr=score_arr.map(Number);
        var score_lbl=document.createElement("label");
        document.body.appendChild(score_lbl);
        for (var i=0;i<score_arr.length;i++){
            if (i==0){
                score_lbl.textContent+="player 0="+score_arr[i];
            }
            else{
                score_lbl.textContent+="Player "+ i.toString() + "=" +(score_arr[i]-score_arr[i-1]).toString();
            }
            
        }

        return (this.runs);
    }
    


}