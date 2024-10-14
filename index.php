<?php
	session_start();
	include_once('../config.php');
	if(isset($_REQUEST['submit'])){
		if($_REQUEST['username'] == 'ltpllabuser' && $_REQUEST['password'] == 'ltpl@labuser'){
			$_SESSION['user'] = 'ltpllabuser';
			header('location: '.$siteurl.'/pop-box/');
		}
	}
	if(isset($_SESSION['user']) && $_SESSION['user'] == 'ltpllabuser'){
		header('location: '.$siteurl.'/pop-box/');
	}
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="../admin/admin-style.css" type="text/css" />
	<script src="jquery.min.js"></script>
	<script src="jquery-ltpl-ui.js"></script>
</head>
<body>
	<div class="login-box">
		<h1>LTPL Code Lab</h1>
		<form action="" method="post">
			<div class="form-field">
				<label>Username</label>
				<input type="text" class="text" name="username" />
			</div>
			<div class="form-field">
				<label>Password</label>
				<input type="password" class="text" name="password" />
			</div>
			<div class="form-field">
				<label>&nbsp;</label>
				<input type="submit" class="btn" name="submit" value="Login" />
			</div>
		</form>
	</div>
</body>
</html>