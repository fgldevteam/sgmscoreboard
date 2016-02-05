<?

$apikey = 'sjqndqud5rv84gc6bpfzfkvk';
$secret = 'PmhFdyTg8k';
$timestamp = gmdate('U');  
$sig = hash('sha256', $apikey . $secret . $timestamp);
$sports = ["baseball"=>"mlb", "hockey"=>"nhl", "basketball"=>"nba", "football"=>"nfl"];
$teamsJson = array();
$teamCounter = 0;
foreach ($sports as $sport=>$league)
{
		$url = "http://api.stats.com/v1/stats/".$sport."/". $league."/teams/?accept=json&api_key=".$apikey."&sig=".$sig;

		
		$content = file_get_contents($url);
		
		$json = json_decode($content);
		
		// var_dump($content);
		if( $content )
		{
			
			$season = ($json->apiResults[0]->league->season);
			$conferences = $season->conferences;
			$conferenceCounter = 0;
			foreach ($conferences as $conference){
				
				$divisions =  $conference->divisions;
				$divisionCounter = 0;
				foreach($divisions as $division)
				{		
					$teams = $division->teams;
					foreach($teams as $team)
					{
						$teamJson = array();
						$teamJson["teamId"] 		= $team->teamId;
						$teamJson["teamLocation"] 	= $team->location;
						$teamJson["teamNickname"] 	= $team->nickname;
						$teamJson["logo"]			= "http://tsnimages.tsn.ca/ImageProvider/TeamLogo?seoId=". 
														preg_replace("/ /", "-", strtolower($team->location)). "-" .
														preg_replace("/ /", "-", strtolower($team->nickname)) ."&width=%s&height=%s";
						$teamsJson[$teamCounter]  	= $teamJson;
						$teamCounter++;
					}
					$divisionCounter++;
				}
				$conferenceCounter++;
			}

		
		}

	
}
print_r(json_encode($teamsJson));


?>

