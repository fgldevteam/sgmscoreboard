<?php
	$db = new mysqli('localhost', 'root', '', 'sgm');

	if($db->connect_errno > 0) {
		die ('Unable to connect to the database [' . $db->connect_error .']');
	}

	$sql = "Select * from scoreboard where pool_b = true order by score desc";

	if(!$result = $db->query($sql)){
    	die('There was an error running the query [' . $db->error . ']');
	}

	$rows = array();
    while($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }

	$counter = 1;
	$response = [];
	for($i =0 ; $i<count($rows) ; $i=$i+2 ){
	    $game = [];
	    $game["HomeCity"] 	= $rows[$i]["dm_name"];
	    $game["HomeTeam"]	= $rows[$i]["team_name"];
	    $game["HomeScore"]	= $rows[$i]["score"];
	    $game["HomeLogo"]	= $rows[$i]["logo"];
	    $game["HomeColors"]	= [  "DarkColor" => $rows[$i]["dark-color"], "LightColor" => $rows[$i]["light-color"]];
	    $game["HomeRank"]	= $counter;

	    $counter++; 

	    $game["AwayCity"] 	= $rows[$i+1]["dm_name"];
	    $game["AwayTeam"]	= $rows[$i+1]["team_name"];
	    $game["AwayScore"]	= $rows[$i+1]["score"];
	    $game["AwayLogo"]	= $rows[$i+1]["logo"];
	    $game["AwayColors"]	= [ "DarkColor" => $rows[$i+1]["dark-color"], "LightColor" => $rows[$i+1]["light-color"]];
	    $game["AwayRank"]	= $counter;


	    $counter++;
	    array_push($response, $game);
	    
	}

	print_r(json_encode($response));


?> 