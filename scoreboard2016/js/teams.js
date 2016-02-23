var teams = [
	{
		
		"name": "gladiators",
		"score": 100,
		"logo": "gladiators.png",
		"colors": {
						"DarkColor": "#d62e26",
						"LightColor": "#f1554e"
					}
	},

	{

		"name": "owls",
		"score": 98,
		"logo": "owls.png",
		"colors": {
						"DarkColor": "#961a33",
						"LightColor": "#ac3149"
					}
	},
	{
		"name": "phoenix",
		"score": 95,
		"logo": "phoenix.png",
		"colors": {
						"DarkColor": "#042B9A",
						"LightColor": "#042FA8"
					}
	},
	{
		
		"name": "bison",
		"score": 92,
		"logo": "bison.png",
		"colors": {
							"DarkColor": "#041E42",
							"LightColor": "#033B7F"
					},
	},
	{
		
		"name": "polarbears",
		"score": 90,
		"logo": "polarbears.png",
		"colors": {
						"DarkColor": "#ef747a",
						"LightColor": "#3a4163"
					},
	},
	{
		
		"name": "lumberjacks",
		"score": 87,
		"logo": "lumberjacks.png",
		"colors": {
						"DarkColor": "#7c2336",
						"LightColor": "#b52344"
					},
	},
	{
		"name": "bears",
		"score": 85,
		"logo": "bears.png",
		"colors": {
						"DarkColor": "#034d2f",
						"LightColor": "#067c4c"
					},
	},
	{
		"name": "barracudas",
		"score": 84,
		"logo": "barracudas.png",
		"colors": {
						"DarkColor": "#1d355b",
						"LightColor": "#2a759d"
					}
	},
	{
		"name": "cannibals",
		"score": 84,
		"logo": "cannibals.png",
		"colors": {
						"DarkColor": "#7c2336",
						"LightColor": "#b52344"
					},
		
	},
	{
		
		"name": "eagles",
		"score": 82,
		"logo": "eagles.png",
		"colors": {
						"DarkColor": "#0096d4",
						"LightColor": "#22beff"
					},
	},
	{
		"name": "marauders",
		"score": 80,
		"logo": "marauders.png",
		"colors": {
						"DarkColor": "#ee3a43",
						"LightColor": "#ef747a"
					}
	},
	{
		
		"name": "cobras",
		"score": 79,
		"logo": "cobras.png",
		"colors": {
						"DarkColor": "#d91f2a",
						"LightColor": "#fc4e58"
					}
	},
	{
		"name": "rampage",
		"score": 79,
		"logo": "rampage.png",
		"colors": {
						"DarkColor": "#6e4d29",
						"LightColor": "#7b6246"
					}
	},
	{
		"name": "hitmen",
		"score": 79,
		"logo": "hitmen.png",
		"colors": {
						"DarkColor": "#2b3a53", 
						"LightColor": "#2051a4" 
					}
	},
	{
		"name": "avengers",
		"score": 78,
		"logo": "avengers.png",
		"colors": {
						"DarkColor": "#190C3D",
						"LightColor": "#6D5AA3" 
					}
	},


	{
		
		"name": "tigers",
		"score": 77,
		"logo": "tigers.png",
		"colors": {
						"DarkColor": "#c26e00",
						"LightColor": "#f7a539"
					},
	},
	{
		"name": "dragons",
		"score": 76,
		"logo": "dragons.png",
		"colors": {
						"DarkColor": "#db3c26",
						"LightColor": "#f15e4a" 
					}
	},
	{
		"name": "rhinos",
		"score": 75,
		"logo": "rhinos.png",
		"colors": {
						"DarkColor": "#2b3a53",
						"LightColor": "#3c537d" 
					}
	},
	{
		"name": "bulldogs",
		"score": 74,
		"logo": "bulldogs.png",
		"colors": {
						"DarkColor": "#434380",
						"LightColor": "#616198" 
					}
	},

	{
		
		"name": "devils",
		"score": 74,
		"logo": "devils.png",
		"colors": {
						"DarkColor": "#c42631",
						"LightColor": "#cc5860"
					}
	},
	{
		
		"name": "flyers",
		"score": 72,
		"logo": "flyers.png",
		"colors": {
						"DarkColor": "#7c2336",
						"LightColor": "#b52344"
					}
	},
	{
		
		"name": "scorpions",
		"score": 72,
		"logo": "scorpions.png",
		"colors": {
						"DarkColor": "#f9d01a",
						"LightColor": "#d8b311"
					}
	},
	{
		
		"name": "carnivores",
		"score": 71,
		"logo": "carnivores.png",
		"colors": {
						"DarkColor": "#bb7f32",
						"LightColor": "#d7a15a"
					}
	},
	{
		
		"name": "vipers",
		"score": 71,
		"logo": "vipers.png",
		"colors": {
						"DarkColor": "#d91f2a",
						"LightColor": "#fc4e58"
					}
	},
	


	{
		"name": "fugitives",
		"score": 70,
		"logo": "fugitives.png",
		"colors": {
						"DarkColor": "#264c2c",
						"LightColor": "#3f7f49"
					}
	},
	
	{
		"name": "huskies",
		"score": 70,
		"logo": "huskies.png",
		"colors": {
							"DarkColor": "#bd342e",
							"LightColor": "#ca5b56"
					}
	}

	
]

$(document).ready(function(){
	var sortedTeams = sortResults('score', false);
	showResults(sortedTeams);
})

var sortResults= function(prop, asc) {
    
    sortedteamsArray = teams.sort(function(a, b) {
    	
        if (asc){
        	return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);	
        } 
        else {
        	return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
        }
    });
    return sortedteamsArray;
}

var showResults = function(teams){
	console.log(teams);
	var index = 1;
	var totalScore = 300;
	$.each(teams, function (key, value) {
		
		var selector = ".col-1";
		if( index > 13) {
			selector = ".col-2";
		}
		
		$(selector).append('<div class="team">'+
				'<div class="count">'+ index + '</div>'+
				'<div class="logo '+ value.name +'"></div>'+
				'<div class="team-info">'+ value.name + '</div>'+
				'<div class="bar-container">'+
					'<div class="bar">' +
						'<div class="score">'+ value.score +'</div>'+
						'<div class="progress" id="progress-'+ value.name +'"></div>'+
					'</div>'+
				'</div>'+
				
				'</div>'
				);
		var totalWidth = $("body").find('.bar').width();
		var percentage =  (value.score/totalScore)*100;
		var scaledWidth = (percentage * totalWidth)/100;

		$("body").find("#progress-" + value.name).css('width', scaledWidth);
		index++;
			
	});
}
