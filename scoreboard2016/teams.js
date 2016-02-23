var teams = {
	0:{
		
		"name": "gladiators",
		"score": "100",
		"logo": "gladiators.png",
		"colors": {
						"DarkColor": "#d62e26",
						"LightColor": "#f1554e"
					}
	},

	1:{

		"name": "owls",
		"score": "98",
		"logo": "owls.png",
		"colors": {
						"DarkColor": "#961a33",
						"LightColor": "#ac3149"
					}
	},
	2:{
		"name": "phoenix",
		"score": "95",
		"logo": "phoenix.png",
		"colors": {
						"DarkColor": "#042B9A",
						"LightColor": "#042FA8"
					}
	},
	3:{
		
		"name": "bison",
		"score": "92",
		"logo": "bison.png",
		"colors": {
							"DarkColor": "#041E42",
							"LightColor": "#033B7F"
					},
	},
	4:{
		
		"name": "polarbears",
		"score": "90",
		"logo": "polarbears.png",
		"colors": {
						"DarkColor": "#ef747a",
						"LightColor": "#3a4163"
					},
	},
	5:{
		
		"name": "lumberjacks",
		"score": "87",
		"logo": "lumberjacks.png",
		"colors": {
						"DarkColor": "#7c2336",
						"LightColor": "#b52344"
					},
	},
	6:{
		"name": "bears",
		"score": "85",
		"logo": "bears.png",
		"colors": {
						"DarkColor": "#034d2f",
						"LightColor": "#067c4c"
					},
	},
	7:{
		"name": "barracudas",
		"score": "84",
		"logo": "barracudas.png",
		"colors": {
						"DarkColor": "#1d355b",
						"LightColor": "#2a759d"
					}
	},
	8:{
		"name": "cannibals",
		"score": "84",
		"logo": "cannibals.png",
		"colors": {
						"DarkColor": "#7c2336",
						"LightColor": "#b52344"
					},
		
	},
	9:{
		
		"name": "eagles",
		"score": "82",
		"logo": "eagles.png",
		"colors": {
						"DarkColor": "#0096d4",
						"LightColor": "#22beff"
					},
	},
	10:{
		"name": "marauders",
		"score": "80",
		"logo": "marauders.png",
		"colors": {
						"DarkColor": "#ee3a43",
						"LightColor": "#ef747a"
					}
	},
	11:{
		
		"name": "cobras",
		"score": "79",
		"logo": "cobras.png",
		"colors": {
						"DarkColor": "#d91f2a",
						"LightColor": "#fc4e58"
					}
	},
	12:{
		"name": "rampage",
		"score": "79",
		"logo": "rampage.png",
		"colors": {
						"DarkColor": "#6e4d29",
						"LightColor": "#7b6246"
					}
	},
	13:{
		"name": "hitmen",
		"score": "79",
		"logo": "hitmen.png",
		"colors": {
						"DarkColor": "#2b3a53", 
						"LightColor": "#2051a4" 
					}
	},
	14:{
		"name": "avengers",
		"score": "78",
		"logo": "avengers.png",
		"colors": {
						"DarkColor": "#190C3D",
						"LightColor": "#6D5AA3" 
					}
	},


	15:{
		
		"name": "tigers",
		"score": "77",
		"logo": "tigers.png",
		"colors": {
						"DarkColor": "#c26e00",
						"LightColor": "#f7a539"
					},
	},
	16:{
		"name": "dragons",
		"score": "76",
		"logo": "dragons.png",
		"colors": {
						"DarkColor": "#db3c26",
						"LightColor": "#f15e4a" 
					}
	},
	17:{
		"name": "rhinos",
		"score": "75",
		"logo": "rhinos.png",
		"colors": {
						"DarkColor": "#2b3a53",
						"LightColor": "#3c537d" 
					}
	},
	18:{
		"name": "bulldogs",
		"score": "74",
		"logo": "bulldogs.png",
		"colors": {
						"DarkColor": "#434380",
						"LightColor": "#616198" 
					}
	},

	19:{
		
		"name": "devils",
		"score": "74",
		"logo": "devils.png",
		"colors": {
						"DarkColor": "#c42631",
						"LightColor": "#cc5860"
					}
	},
	20:{
		
		"name": "flyers",
		"score": "72",
		"logo": "flyers.png",
		"colors": {
						"DarkColor": "#7c2336",
						"LightColor": "#b52344"
					}
	},
	21:{
		
		"name": "scorpions",
		"score": "72",
		"logo": "scorpions.png",
		"colors": {
						"DarkColor": "#f9d01a",
						"LightColor": "#d8b311"
					}
	},
	22:{
		
		"name": "carnivores",
		"score": "71",
		"logo": "carnivores.png",
		"colors": {
						"DarkColor": "#bb7f32",
						"LightColor": "#d7a15a"
					}
	},
	23:{
		
		"name": "vipers",
		"score": "71",
		"logo": "vipers.png",
		"colors": {
						"DarkColor": "#d91f2a",
						"LightColor": "#fc4e58"
					}
	},
	


	24:{
		"name": "fugitives",
		"score": "70",
		"logo": "fugitives.png",
		"colors": {
						"DarkColor": "#264c2c",
						"LightColor": "#3f7f49"
					}
	},
	
	25:{
		"name": "huskies",
		"score": "18",
		"logo": "huskies.png",
		"colors": {
							"DarkColor": "#bd342e",
							"LightColor": "#ca5b56"
					}
	}

	
}


$.each(teams, function (key, value) {
	console.log(value.name);
	console.log(value.logo);
	console.log(value.score);
	console.log(value.colors.DarkColor);
	console.log(value.colors.LightColor);
})