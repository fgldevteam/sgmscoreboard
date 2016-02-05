$(document).ready(function(){


	response = [];
	counter = 0;
	getFeed(counter);
	changeLogoTeams = ["", "Tigers", "Dodgers", "Nationals", "Lightning", "Maple Leafs", "Rockets"];


});

getFeed = function(counter){

	leagues = [ "nba" , "nhl", "mlb"]; 
	var src = "http://stats.tsn.ca/GET/urn:tsn:"+ leagues[counter] +":scoreboard?"
	// var src = "http://scoreapi.flagshipapps.fglsports.com/api/scores"
	$.getJSON( src , {
		dataType: "jsonp",
		data : {},
		
	})
	.done(function(data){
		console.log(data)
		_.each(data, function(index){
			if(index != null)
			{
				response = $.merge( response , $.makeArray(data))	
			}
			
		})

		counter++;
		if(counter < leagues.length ){
			getFeed(counter);
		}
		else{
			filterFeed(response)
		}
		
		

	})
}


filterFeed = function(rawFeed){
	
	
	var allFilteredScores = new Array();
	_.each(rawFeed, function(league){	
		
		
		_.each(league, function(days){
			
			_.each(JSON.parse(days), function(date){
				
				_.each(date.Games, function(game){
					//console.log(game)
					var gameDetails = new Array();
					gameDetails["Id"] 			= game.Id ;
					
					gameDetails["HomeCity"] 	= game.Home.Team.City;
					gameDetails["HomeTeam"] 	= game.Home.Team.Name;
					gameDetails["HomeColors"]	= new Array();
					gameDetails["HomeColors"]["DarkColor"] 	 = game.Home.Team.Colours.DarkColour;
					gameDetails["HomeColors"]["LightColor"]  = game.Home.Team.Colours.LightColour;
					gameDetails["HomeLogo"]		= game.Home.Team.Logo.replace(/&amp;/g, '&').replace(/%s/g, 150);
					if($.inArray(gameDetails["HomeTeam"] , changeLogoTeams) >0){
						gameDetails["HomeLogo"] = "logos/"+gameDetails["HomeTeam"].replace(/ /g, "")+"-live.png" 
						console.log(gameDetails["HomeTeam"].replace(/" "/g, ""));
						console.log(gameDetails["HomeLogo"]);
					}
					if( typeof game.Home.Runs === "undefined"){
						gameDetails["HomeScore"]    = game.Home.Linescore.Score;
						
					}
					else{
						gameDetails["HomeScore"]    = game.Home.Runs;
					}
					
					gameDetails["AwayCity"] 	= game.Away.Team.City;
					gameDetails["AwayTeam"] 	= game.Away.Team.Name;
					gameDetails["AwayColors"]	= new Array();
					gameDetails["AwayColors"]["DarkColor"] 	 = game.Away.Team.Colours.DarkColour;
					gameDetails["AwayColors"]["LightColor"]  = game.Away.Team.Colours.LightColour;
					gameDetails["AwayLogo"]		= game.Away.Team.Logo.replace(/&amp;/g, '&').replace(/%s/g, 150);
					if($.inArray(gameDetails["AwayTeam"] , changeLogoTeams) > 0){
						gameDetails["AwayLogo"] = "logos/"+gameDetails["AwayTeam"].replace(/ /g, "")+"-live.png" ;
						console.log(gameDetails["AwayLogo"]);
					}
					if(typeof game.Away.Runs ===  "undefined"){
						gameDetails["AwayScore"]    = game.Away.Linescore.Score;
						
					}
					else{
						gameDetails["AwayScore"]    = game.Away.Runs;
					}

					

					gameDetails["State"]		= game.State;
					gameDetails["StateDetails"]	= game.StateDetails;

					allFilteredScores.push(gameDetails);
				})
				
			})

		})
	})
	console.log(allFilteredScores)
	fillFeed(allFilteredScores)
}

fillFeed = function(filteredFeed){

	var counter = 1;
	_.each(filteredFeed , function(game){

		$("#scoreboard-container").append($('<div>', { class : "scoreboard",
	   													id    : "scoreboard"+counter }))
	   
	   $('#scoreboard'+counter).append($('<div>', { class : "home-team" ,
	   												style : "background : linear-gradient( 135deg,"+ game["HomeColors"]["DarkColor"] +","+ 
	   																									game["HomeColors"]["LightColor"]+");" }))

	   $('#scoreboard'+counter).append($('<div>', { class : "away-team",
	   												style : "background: linear-gradient( 135deg,"+ game["AwayColors"]["LightColor"] +","+ 
	   																								   game["AwayColors"]["DarkColor"]+" );"}))
	   
	   $('<div class="logo"><img src= '+game["HomeLogo"]+'></div>').appendTo('#scoreboard-container #scoreboard'+counter + ' .home-team' )
	   $("<div class=\"team-info\"><p class=\"city\">"+ game["HomeCity"] +"</p><p class=\"team\">"+ game["HomeTeam"] +"</p> </div>").appendTo('#scoreboard-container #scoreboard'+counter + ' .home-team' )
	   $("<div class=\"score\">"+ game["HomeScore"]+"</div>").appendTo('#scoreboard-container #scoreboard'+counter + ' .home-team' )
	   
	   $('<div class="logo"> <img src= '+game["AwayLogo"]+'></div>').appendTo('#scoreboard-container #scoreboard'+counter + ' .away-team' )
	   $("<div class=\"team-info\"><p class=\"city\">"+ game["AwayCity"] +"</p><p class=\"team\">"+ game["AwayTeam"] +"</p> </div>").appendTo('#scoreboard-container #scoreboard'+counter + ' .away-team' )
	   $("<div class=\"score\">"+ game["AwayScore"] +"</div>").appendTo('#scoreboard-container #scoreboard'+counter + ' .away-team')
	   			
	   if(game["State"] == "PreGame"){
	   	$('<div class=\"game-state\"><p>' + game["StateDetails"] + "</p></div>").appendTo('#scoreboard-container #scoreboard'+counter )
	   }
	   if(game["State"] == "InProgress"){
	   	$('<div class=\"game-state\"><p>' + game["StateDetails"] + "</p></div>").appendTo('#scoreboard-container #scoreboard'+counter )
	   }
	  counter++; 
	} )
			
	animateFeed()
}

animateFeed= function(){

	var feedCounter  = 1;
	var totalScoreboards =  $(".scoreboard").length;
	var lastCounter  = totalScoreboards;
	
	console.log(totalScoreboards);

	
	$("#scoreboard"+feedCounter+" .home-team").show("slide", {direction : "right"},500);
	$("#scoreboard"+feedCounter+" .away-team").show("slide", {direction : "left"},500);
	var intervalId = setInterval( function(){
		
		if(feedCounter > totalScoreboards){
			//waitTime = 0;
			clearInterval(intervalId)
			feedCounter = 1;
			lastCounter = totalScoreboards;
			$("#scoreboard"+(lastCounter)+" .game-state").hide();
			$("#scoreboard"+(feedCounter)+" .home-team").show("slide", {direction : "right"},500, function(){
				setTimeout(0)
			});
			$("#scoreboard"+(feedCounter)+" .away-team").show("slide", {direction : "left"},500, function(){
				setTimeout(0);
			});
			$(".scoreboard").remove();
			getFeed();
		}

		lastCounter = feedCounter;
		feedCounter++;
		$("#scoreboard"+(feedCounter-1)+" .home-team").hide("slide", {direction : "left"},500, function(){
			$("#scoreboard"+(feedCounter)+" .home-team").show("slide", {direction : "right"},500, function(){
				
			})
		});
		$("#scoreboard"+(feedCounter-1)+" .away-team").hide("slide", {direction : "right"},500, function(){
			$("#scoreboard"+(feedCounter)+" .away-team").show("slide", {direction : "left"},500, function(){
				$("#scoreboard"+(lastCounter)+" .game-state").hide();
				$("#scoreboard"+(feedCounter)+" .game-state").show();

			})
		});
	
	}, 5000);
			
}








