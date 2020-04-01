export{};
interface Teamtypes{
    players:Number,
    tot_balls:Number,
    player_balls:Number
}

class Team {
    players;
    tot_balls;
    runs;
    player_balls;
    score_arr;
    player_score;
    constructor(teamDet:Teamtypes){
        this.players=teamDet.players;
        this.tot_balls=teamDet.tot_balls;
        this.runs=0;
        this.player_balls=teamDet.player_balls;
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
       (<HTMLInputElement> document.getElementById(id)).disabled=false;
               
    }

     Disable_button(id){
        (<HTMLInputElement> document.getElementById(id)).disabled=true;
}


}


let fn_bat=(but_id)=>{
     
    if(but_id=="bat_team_1"){
               
       
        var play_obj1=new Team({players:11,tot_balls:36,player_balls:6})
        var tot_runs=play_obj1.calculateRun(but_id);
        var pl_sc_arr=play_obj1.calcplayerscore(but_id);   
        
        localStorage.setItem("res_T1", tot_runs.toString());
        localStorage.setItem("player_score_T1", pl_sc_arr.toString());
       
        play_obj1.Disable_button("bat_team_1");
       // fn_play(pl_sc_arr,but_id);
        
    }
    
       if(but_id=="bat_team_2") {

        //Disable_button("bat_team_1");
        var play_obj2=new Team({players:11,tot_balls:36,player_balls:6})
        var tot_runs=play_obj2.calculateRun(but_id);
        var pl_sc_arr=play_obj2.calcplayerscore(but_id); 
        localStorage.setItem("res_T2", tot_runs.toString());
        localStorage.setItem("player_score_T2", pl_sc_arr.toString());
        play_obj2.Disable_button("bat_team_2");
      //  fn_play(pl_sc_arr,but_id);
        
       }  
     
}