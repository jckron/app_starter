<?php
// Fetch cards by category
function functionName($parameter){
	global $conn; // global connection defined in config
	// sample conditional
	if ($parameter == "null"){
		$sql = "SELECT * FROM Table;";
	}
	else{
		$sql = "SELECT * FROM Table WHERE table_parameter = '$parameter';";		
	}
	$result = $conn->query($sql);
	if($result->num_rows == 0){
		echo 'No records message.';
	}
	else{
		while($row = $result->fetch_assoc()){
			$id = $row['id'];
			$title = $row['title'];
			$description = $row['description'];
			echo 'Result = '.$id.'<br/>'.$title.'<br/><br/>'.$description.'<br/><br/><hr/>';
		}		
	}
}
?>