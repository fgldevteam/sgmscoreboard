 $(document).ready(function(){

	var leagues = ['nba'];
	allScores = new Array();
	var feedCounter = 1;
	$.getJSON("leaderboard.json", function(data){
		console.log(data);
		fillFeed(data);
	});
	
	//getFeed();

});

getFeed = function (){

	console.log(
		"hello")
	var src = "http://localhost:8001/sgmScoreboard.php";
	$.getJSON( src,
		{
			dataType: 'jsonp'
		}

	 , function(data){
		console.log(data);
	})
	.done(function(data){
		fillFeed(data)
		
	})

}



fillFeed = function(filteredFeed){
	var counter = 1;
	var rank = 1;
	_.each(filteredFeed , function(game){

		$("#scoreboard-container").append($('<div>', { class : "scoreboard",
	   													id    : "scoreboard"+counter }))
	   
	   $('#scoreboard'+counter).append($('<div>', { class : "home-team-sgm" ,
	   												style : "background : linear-gradient( 180deg,"+ game["HomeColors"]["DarkColor"] +","+ 
	   																									game["HomeColors"]["LightColor"]+");" }))

	   $('#scoreboard'+counter).append($('<div>', { class : "away-team-sgm",
	   												style : "background: linear-gradient( 180deg,"+ game["AwayColors"]["LightColor"] +","+ 
	   																								   game["AwayColors"]["DarkColor"]+" );"}))
	   
	   // $('<div class="rank"><p> #'+ game["HomeRank"]+'</p></div>').appendTo('#scoreboard-container #scoreboard'+counter + ' .home-team-sgm' )
	   $('<div class="count">'+rank+'</div><div class="logo"><img src= logos/'+game["HomeLogo"]+' /></div>').appendTo('#scoreboard-container #scoreboard'+counter + ' .home-team-sgm' )
	   $("<div class=\"team-info\"><p class=\"city\">"+ game["HomeCity"] +' '+ game["HomeTeam"] +"</p> </div>").appendTo('#scoreboard-container #scoreboard'+counter + ' .home-team-sgm' )
	   $("<div class=\"score\">"+ game["HomeScore"]+"</div>").appendTo('#scoreboard-container #scoreboard'+counter + ' .home-team-sgm' )
	   rank = parseInt(rank)+1;
	   // $('<div class="rank"><p > #'+ game["AwayRank"]+'</p></div>').appendTo('#scoreboard-container #scoreboard'+counter + ' .away-team-sgm' )
	   $('<div class="count">'+ rank +'</div><div class="logo"><img src= logos/'+game["AwayLogo"]+' /></div>').appendTo('#scoreboard-container #scoreboard'+counter + ' .away-team-sgm' )
	   $("<div class=\"team-info\"><p class=\"city\">"+ game["AwayCity"] + " " + game["AwayTeam"] +"</p> </div>").appendTo('#scoreboard-container #scoreboard'+counter + ' .away-team-sgm' )
	   $("<div class=\"score\">"+ game["AwayScore"] +"</div>").appendTo('#scoreboard-container #scoreboard'+counter + ' .away-team-sgm')
	   			
	  rank++;
	  counter++; 
	} )
	//animateFeed()		

}

animateFeed= function(){
	
	var feedCounter  = 1;
	var totalScoreboards =  $(".scoreboard").length;
	var lastCounter  = totalScoreboards;
	
	console.log(totalScoreboards);

	
	// $("#scoreboard"+feedCounter+" .home-team-sgm").show("slide", {direction : "left"},500);
	// $("#scoreboard"+feedCounter+" .away-team-sgm").show("slide", {direction : "right"},500);
	
	setInterval( function(){
		
		if(feedCounter > totalScoreboards){
		feedCounter = 1;
		lastCounter = totalScoreboards;
		
		}
		
		$("#scoreboard"+(lastCounter)+" .home-team-sgm").hide("slide", {direction : "left"},500, function(){
			$("#scoreboard"+(feedCounter)+" .home-team-sgm").show("slide", {direction : "left"},500, function(){
				console.log(lastCounter);
				console.log(feedCounter)
				lastCounter = feedCounter;
				feedCounter++;
			})
		});
		$("#scoreboard"+(lastCounter)+" .away-team-sgm").hide("slide", {direction : "right"},500, function(){
			$("#scoreboard"+(feedCounter)+" .away-team-sgm").show("slide", {direction : "right"},500, function(){			

			})
		});

		console.log(feedCounter)
		console.log(lastCounter)
		

	
	}, 5000);
			
}










