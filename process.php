<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	//to, subject, message, headers
	mail("isaacaddis21@gmail.com",$name,$message,"Yama Web Design Email");
?>