$(document).ready(function(){

	var leagues = ['nba'];
	allScores = new Array();
	var feedCounter = 1;
	// $.getJSON("sgm.json", function(data){
	// 	console.log(data);
	// 	fillFeed(data);
	// });
	
	getFeed();

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
	// $.getJSON("sgm.json", function(data){
	// 	console.log(data);
	// 	fillFeed(data);
	// });

}



fillFeed = function(filteredFeed){
	var counter = 1;
	_.each(filteredFeed , function(game){

		$("#scoreboard-container").append($('<div>', { class : "scoreboard",
	   													id    : "scoreboard"+counter }))
	   
	   $('#scoreboard'+counter).append($('<div>', { class : "home-team-sgm" ,
	   												style : "background : linear-gradient( 135deg,"+ game["HomeColors"]["DarkColor"] +","+ 
	   																									game["HomeColors"]["LightColor"]+");" }))

	   $('#scoreboard'+counter).append($('<div>', { class : "away-team-sgm",
	   												style : "background: linear-gradient( 135deg,"+ game["AwayColors"]["LightColor"] +","+ 
	   																								   game["AwayColors"]["DarkColor"]+" );"}))
	   
	   // $('<div class="rank"><p> #'+ game["HomeRank"]+'</p></div>').appendTo('#scoreboard-container #scoreboard'+counter + ' .home-team-sgm' )
	   $('<div class="logo"><img src= logos/'+game["HomeLogo"]+' /></div>').appendTo('#scoreboard-container #scoreboard'+counter + ' .home-team-sgm' )
	   $("<div class=\"team-info\"><p class=\"city\">"+ game["HomeCity"] +"</p><p class=\"team\">"+ game["HomeTeam"] +"</p> </div>").appendTo('#scoreboard-container #scoreboard'+counter + ' .home-team-sgm' )
	   $("<div class=\"score\">"+ game["HomeScore"]+"</div>").appendTo('#scoreboard-container #scoreboard'+counter + ' .home-team-sgm' )
	   
	   // $('<div class="rank"><p > #'+ game["AwayRank"]+'</p></div>').appendTo('#scoreboard-container #scoreboard'+counter + ' .away-team-sgm' )
	   $('<div class="logo"> <img src= logos/'+game["AwayLogo"]+' /></div>').appendTo('#scoreboard-container #scoreboard'+counter + ' .away-team-sgm' )
	   $("<div class=\"team-info\"><p class=\"city\">"+ game["AwayCity"] +"</p><p class=\"team\">"+ game["AwayTeam"] +"</p> </div>").appendTo('#scoreboard-container #scoreboard'+counter + ' .away-team-sgm' )
	   $("<div class=\"score\">"+ game["AwayScore"] +"</div>").appendTo('#scoreboard-container #scoreboard'+counter + ' .away-team-sgm')
	   			
	   
	  counter++; 
	} )
	animateFeed()		

}

animateFeed= function(){
	
	var feedCounter  = 1;
	var totalScoreboards =  $(".scoreboard").length;
	var lastCounter  = totalScoreboards;
	
	console.log(totalScoreboards);

	
	// $("#scoreboard"+feedCounter+" .home-team-sgm").show("slide", {direction : "left"},500);
	// $("#scoreboard"+feedCounter+" .away-team-sgm").show("slide", {direction : "right"},500);
	
	var intervalId = setInterval( function(){
	
		if(feedCounter > totalScoreboards){
			feedCounter = 1;
			lastCounter = totalScoreboards;
			$("#scoreboard"+(lastCounter)+" .home-team-sgm").hide("slide", {direction : "left"},500);
			$("#scoreboard"+(lastCounter)+" .away-team-sgm").hide("slide", {direction : "left"},500);
			$(".scoreboard").remove();
			clearInterval(intervalId);
			getFeed();
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










