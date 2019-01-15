<?php 
include ('config.php');
// Create Your App Tables
$users = "CREATE TABLE users(
	userID INT(11) AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(100),
	password VARCHAR(100),
	date_created TIMESTAMP,
	UNIQUE(template_name)
	)";

if(mysqli_query($conn, $users)){
	echo "Users table created.";
}
else{
	echo "Error creating Users table: " . mysqli_error($conn);
}

mysqli_close($conn);

?>