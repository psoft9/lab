<?php include_once('../header.php'); ?>
<style>
	.imPreview .img{width: 120px; float: left;}
</style>
<form action="recieve.php" method="post" enctype="multipart/form-data">
	<input type="file" name="img[]" multiple onchange="imPreview(this)" />
	<input type="submit" value="submit" />
</form>
<div class="imPreview"></div>
<?php include_once('../footer.php'); ?>