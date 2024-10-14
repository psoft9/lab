<?php include_once('../header.php'); ?>
<h2 class="site-title">Submit a form using ajax</h2>

<div class="item-title">Required Files</div>
<div>
	For this progress bar you only need is <a download="jquery-ltpl-ui.js" href="<?php echo $siteurl; ?>/jquery-ltpl-ui.js">jquery-ltpl-ui.js</a>. No need of any css. The <a href="<?php echo $siteurl; ?>/jquery.min.js" download="jquery.min.js">jQuery library</a> is mandatory.
</div>
<p>
	<form action="test.php" class="ajaxForm" method="post" data-alert="data" data-callback="test()">
		<input type="text" placeholder="Data 1" >
		<input type="text" placeholder="Data 2" >
		<input type="submit" value="Submit" />
	</form>
	<code>&lt;form action="test.php" class="ajaxForm" method="post" data-alert="data" data-callback="test()"&gt;&lt;/form&gt;</code>
</p>

	
<?php include_once('../footer.php'); ?>