<?php
// This is where the app begins.
include('config.php');
?>

<html>
<head>
<meta charset="UTF-8">
<title><? echo APP_TITLE; ?></title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link href="assets/scss/style.css" rel="stylesheet" type="text/css" />
	<script src="assets/js/jquery_1.12.3.js"></script>
	<script src="assets/js/jquery-ui.min.js"></script>
	<script src="assets/js/angular.min.js"></script>
</head>
<header>
</header>
<body>
	<? echo functionName('parameter'); ?>
</body>
<footer>
	<p class="copyright">&copy; <?php echo date("Y"); ?>. <em>All Rights Reserved.</em> &nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp; <a href="javascript:alert('Need Link');">Privacy Policy</a></p>
</footer>
</html>