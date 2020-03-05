function fn_bat(but_id){
     
    if(but_id=="bat_team_1"){
               
       
        var play_obj1=new Team(11,36,6)
        var tot_runs=play_obj1.calculateRun(but_id);
        var pl_sc_arr=play_obj1.calcplayerscore(but_id);   
        
        localStorage.setItem("res_T1", tot_runs);
        localStorage.setItem("player_score_T1", pl_sc_arr);
       
        play_obj1.Disable_button("bat_team_1");
       // fn_play(pl_sc_arr,but_id);
        
    }
    
       if(but_id=="bat_team_2") {

        //Disable_button("bat_team_1");
        var play_obj2=new Team(11,36,6)
        var tot_runs=play_obj2.calculateRun();
        var pl_sc_arr=play_obj2.calcplayerscore(but_id); 
        localStorage.setItem("res_T2", tot_runs);
        localStorage.setItem("player_score_T2", pl_sc_arr);
        play_obj2.Disable_button("bat_team_2");
      //  fn_play(pl_sc_arr,but_id);
        
       }  
     
}

/*function fn_play(pl_sc_arr,but_id){

        if(pl_sc_arr.length>0 && but_id=="bat_team_1")
        {
            Disable_button("bat_team_1");
            Enable_button("bat_team_2");
        }
        else if(pl_sc_arr.length>0 && but_id=="bat_team_2")
        {
            Disable_button("bat_team_2");
            Enable_button("bat_team_1");
        }
        else{
            Enable_button("bat_team_1");
            Enable_button("bat_team_2");

        }
        
        
}*/
/*function Enable_button(id){
    document.getElementById(id).disabled=false;
           
}
function Disable_button(id){
    document.getElementById(id).disabled=true;
}*/



class Team{
    constructor(players,tot_balls,player_balls){
        this.players=players;
        this.tot_balls=tot_balls;
        this.runs=0;
        this.player_balls=player_balls;
        this.score_arr=[];
        this.player_score=[];
    }
    calculateRun(but_id){
       
        
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
              
                this.score_arr.push(this.runs);
                this.players--;
               
            }
            
            this.tot_balls--;
           
        }       
       
        return (this.runs);
    }

    calcplayerscore(but_id){

        for (var i=0;i<this.score_arr.length;i++){
            if (i==0){
                this.player_score.push(this.score_arr[0]);
            }
            else{
                this.player_score.push(this.score_arr[i]-this.score_arr[i-1]);

            }
        }
        return (this.player_score);
        
    }
    Enable_button(id){
        document.getElementById(id).disabled=false;
               
    }

     Disable_button(id){
    document.getElementById(id).disabled=true;
}


}