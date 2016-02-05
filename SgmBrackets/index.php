<!DOCTYPE HTML>
<html>
<head>
	<title>
		SGM Brackets
	</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="main.css">
<link rel="stylesheet" type="text/css" href="logos.css">

</head>

<body>
	<div id="burst-container"></div>
	<div id="trophy">
		<div class="card" id="winner"></div>
	</div>
	<div id="bracket-container"  >
		<div id="title">
		</div>
		<div class= "pool-panel" > 
			<div class="conference-name"> 
				<img src="assets/lighting-bolt.png">
				Zeus Conference 
				<img src="assets/lighting-bolt.png">
			</div>
			<div class="row pool-name" > Central Division</div>
			<div class="row pool" id="pool1">
				<div class="col-md-6">
						<div class="card flyers"></div>
						<div class="card vipers"></div>
						<div class="card devils"></div>
				</div>
				<div class="col-md-6">	
						<div class="card phil"></div>
						<div class="card scorp"></div>
						<div class="card cobras"></div>
						<div class="card mara"></div>
				</div>

			</div>

			<div class="row pool-name" > Prairies Division</div>
			<div class="row pool " id = "pool2">
				<div class="col-md-6">
						<div class="card bison"></div>
						<div class="card bears"></div>
						<div class="card eagles"></div>
				</div>
				<div class="col-md-6">
						<div class="card jack"></div>
						<div class="card attack"></div>
						<div class="card huskies"></div>
					
				</div>

			</div>	

		</div>


		<div class="pool-winners-panel" id ="pool-winners-panel1">
			<div class="row">
				<div class ="pool-winners"  id="pool1-winners">
					<div class="pool-winner-container">
						<div class="card " id= "pool1-winner1"></div>
					</div>
					<div class="pool-winner-container">
						<div class="card " id= "pool1-winner2"></div>
					</div>
				</div>


			</div>
			<div class="row">
				<div class ="pool-winners" id="pool2-winners">
					<div class="pool-winner-container">
						<div class="card " id= "pool2-winner1"></div>
					</div>
					<div class="pool-winner-container">
						<div class="card " id= "pool2-winner2"></div>
					</div>
				</div>
			</div>
		</div>


		<div class="col-md-4 finals">
			<div class="col-md-6">
				<div class="pool-winner-container">	
					<div class="card "  id="finalist1"></div>
				</div>	
				<div class="pool-winner-container">	
					<div class="card " id="finalist2"></div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="pool-winner-container">	
					<div class="card " id="finalist3"></div>
				</div>
				<div class="pool-winner-container">
					<div class="card " id="finalist4"></div>
				</div>
			</div>
		</div>


		<div class="pool-winners-panel" id ="pool-winners-panel2">
			<div class="row">
				<div class ="pool-winners" id="pool3-winners">
					<div class="pool-winner-container">
						<div class="card " id= "pool3-winner1"></div>
					</div>
					<div class="pool-winner-container">
						<div class="card " id= "pool3-winner2"></div>
					</div>	
				</div>
			</div>
			<div class="row">
				<div class ="pool-winners" id="pool4-winners">
					<div class="pool-winner-container">	
						<div class="card " id= "pool4-winner1"></div>
					</div>
					<div class="pool-winner-container">	
						<div class="card " id= "pool4-winner2"></div>
					</div>

				</div>
			</div>
		</div>





		<div class="pool-panel">
			<div class="conference-name">
				<img src="assets/trident.png">
			 	Poseidon Conference 
		 		<img src="assets/trident.png">
		 		</div>
			<div class="row pool-name" >Atlantic Division</div>
			<div class="row pool" id="pool3">
				<div class="col-md-6">
					
					<div class="card dragons"></div>
					<div class="card avengers"></div>
					<div class="card glad"></div>
					<div class="card hitmen"></div>
				</div>
				<div class="col-md-6">	
					<div class="card cannibals"></div>
					<div class="card rhinos"></div>
					<div class="card lumber"></div>
				</div>

			</div>
			<div class="row pool-name" >Pacific Division</div>
			<div class="row pool" id = "pool4">
				<div class="col-md-6">
					
					<div class="card pbears"></div>
					<div class="card tigers"></div>
					<div class="card owls"></div>
				</div>
				<div class="col-md-6">
					<div class="card fug"></div>
					<div class="card cudas"></div>
					<div class="card carn"></div>

				</div>

			</div>
		</div>
		
		
	</div>
	<div id="banners">



	</div>

<script type="text/javascript"  src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
<script type="text/javascript">
	var degrees = 1;
	var rotate = function(){
		$("#burst-container").css({'transform' : 'rotate('+ degrees +'deg)' });
		$("#burst-container").css({'transition': 'all 10s ease'});
		degrees += 5;
		
	};
	setInterval(rotate, 500);
    var classAppenders = ["", "-off", "-wc", "-wc-off"]
	$(".card").click(function(){
		
		var currentClass = $(this).attr('class').split(" ")[1];
		var index =1;
		if(currentClass.endsWith("-wc")){
			index = 3;
			$(this).removeClass(currentClass);
			currentClass = currentClass.replace("-wc", "");

		}
		else if(currentClass.endsWith("-off")){
			if(currentClass.endsWith("-wc-off")){
				index = 0;
				$(this).removeClass(currentClass);
				currentClass = currentClass.replace("-wc-off", "");
			}
			else{
				index = 2;
				$(this).removeClass(currentClass);
				currentClass = currentClass.replace("-off", "");
			}
		}
		else{
			index = 1;
		}

		$(this).removeClass(currentClass);
		$(this).addClass(currentClass+classAppenders[index]);

	});

</script>
</body>
</html>