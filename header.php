<?php 
	session_start();
	if(file_exists('../../config.php')){
		include_once('../../config.php');
	}else if(file_exists('../includes/config.php')) {
		include_once('../includes/config.php');
	}
	if(isset($_REQUEST['logout'])){
		session_destroy();
		header('location: '.$siteurl);
	}
	if(!isset($_SESSION['user'])){
		header('location: '.$siteurl);
	}
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="<?php echo $siteurl; ?>/style.css" type="text/css" />
	
	<script src="<?php echo $siteurl; ?>/jquery.min.js"></script>
	<script src="<?php echo $siteurl; ?>/jquery-ltpl-ui.js"></script>
	<script>
		prProgress({
			el:'.pbar',
			progress:40,
			progressColor: '#955'
		});
		prProgress({
			el:'.pbar1',
			progress:60,
			progressColor: '#300',
			border: '1px dotted #a99',
			text: true
		});
		
		// Slider
		$(document).ready(function(){
			animSlider({
				selector: '.anim-slider', 
				duration: 3000
			});
		});
		
		//Tabs
		prTabs({
			inactive: '#f5f5f5',
			active: '#925'
		});
		
	</script>
</head>
<body>
	<header>
		<a class="download-button" href="?logout=true"><i class="power"></i></a>
		<a class="download-button" id="a">Download</a>
		<h2>Learnitude Technologies (P) Ltd.</h2>
	</header>
	<script>getMyFile('<?php echo $siteurl; ?>/jquery-ltpl-ui.js');</script>
	<aside>
		<ul>
			<li><a href="<?php echo $siteurl; ?>/pop-box">Pop Box</a></li>
			<li><a href="<?php echo $siteurl; ?>/prModal">Modal</a></li>
			<li><a href="<?php echo $siteurl; ?>/progressbar/">Progress Bar</a></li>
			<li><a href="<?php echo $siteurl; ?>/prTabs/">Tabs</a></li>
			<li><a href="<?php echo $siteurl; ?>/ajaxForm/">Ajax Form</a></li>
		</ul>
	</aside>
	<article>