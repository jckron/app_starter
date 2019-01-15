<?php
// ***** Database Connection ***** //

// LOCAL DATABASE
define ("DB_NAME", "Put database name here");
define ("DB_HOST", "localhost");
define ("DB_USER", "root");
define ("DB_PASSWD", "root");
// LIVE DATABASE
#define ("DB_NAME", "TBD");
#define ("DB_HOST", "TBD");
#define ("DB_USER", "TBD");
#define ("DB_PASSWD", "TBD");

//Establish a database connection 
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWD, DB_NAME);
if (!$conn){
	die('Could not Connect: ' . mysqli_connect_error());
}

// ***** Global Vars ***** //
define ("SITEROOT","http://localhost:8888/SUBFOLDER"); // local dev
define ("APP_TITLE","Application Title"); // title of the app

?>