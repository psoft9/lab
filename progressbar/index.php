<?php include_once('../header.php'); ?>
<h2 class="site-title">Creating progress-bar is so simple now</h2>

<div class="item-title">Required Files</div>
<div>
	For this progress bar you only need is <a download="pr-progressBar.js" href="<?php echo $siteurl; ?>/progressbar/pr-progressBar.js">pr-progressBar.js</a>. No need of any css. The <a href="<?php echo $siteurl; ?>/jquery.min.js" download="jquery.min.js">jQuery library</a> is mandatory.
</div>
<p>
	<div data-prProgress="{progress:30}"></div>
	<code>&lt;div data-prProgress="{progress:30}"&gt;&lt;/div&gt;</code>
</p>
You can add optional values like - 
	<code>
		<br />Default Values
<pre>
	text  		: false,
	height		: 30, 
	border		: '1px solid #ccc',
	rounded		: '5px', 
	progress	: 0,
	progressColor	: '#bbb',
	barBg		: '#f5f5f5',
	color		: '#fff',
	fontSize	: '18px'
</pre>
	</code>

<h3>Examples:</h3>
	<p>
		<div data-prProgress="{progress:30, progressColor: '#030'}"></div>
		<code>
			&lt;div data-prProgress="{progress:30, progressColor: '#030'}"&gt;&lt;/div&gt;
		</code>
	</p>
	<p>
		<div data-prProgress="{progress:20, text: true}"></div>
		<code>
			&lt;div data-prProgress="{progress:20, text: true}"&gt;&lt;/div&gt;
		</code>
	</p>
	<p>
		<div class="pbar"></div>
		<code>
			&lt;div class="pbar" &gt;&lt;/div&gt;
			<br />
			<br />&lt;script&gt;
			<br />	&nbsp;prProgress({
			<br />	&nbsp;&nbsp;&nbsp;	el:'.pbar',
			<br />	&nbsp;&nbsp;&nbsp;	progress:40,
			<br />	&nbsp;&nbsp;&nbsp;	progressColor: '#955'
			<br />	&nbsp;});
			<br />&lt;/script&gt;
		</code>
	</p>
	<p>
		<div class="pbar1"></div>
		<code>
			&lt;div class="pbar1" &gt;&lt;/div&gt;
			<br />
			<br />&lt;script&gt;
			<br />	&nbsp;prProgress({
			<br />	&nbsp;&nbsp;&nbsp;el:'.pbar1',
			<br />	&nbsp;&nbsp;&nbsp;progress:60,
			<br />	&nbsp;&nbsp;&nbsp;progressColor: '#300',
			<br />	&nbsp;&nbsp;&nbsp;border: '1px dotted #a99',
			<br />	&nbsp;&nbsp;&nbsp;text: true
			<br />	&nbsp;});
			<br />&lt;/script&gt;
		</code>
	</p>
	
<?php include_once('../footer.php'); ?>