<?php include_once('../header.php'); ?>
	<h2 class="site-title">Simple Tabs</h2>
	
	<div class="item-title">Required Files</div>
	<div>
		For this TAB you only need is <a download="pr-tabs.js" href="<?php echo $siteurl; ?>/prTabs/pr-tabs.js">pr-tabs.js</a>. No need of any css. The <a href="<?php echo $siteurl; ?>/jquery.min.js" download="jquery.min.js">jQuery library</a> is mandatory.
	</div>
	<p class="item-title">How to Use</p>
	Just put an attribute <i>data-prTabs</i> on the parent div and in tab element add attribute <i>data-tab</i>
	<code>
	<pre>
	&lt;div data-prTabs&gt;
		&lt;div data-tab="Customer SignUp"&gt;
			Your First Tab
		&lt;/div&gt;
		&lt;div data-tab="Agent SignUp"&gt;
			&lt;h2&gt;Lorem lipsum 2&lt;/h2&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	</pre></code>
	<p class="item-title">Adding custom style</p>
	Add this function for initialization of custom attributes
	<code>
		
		<pre>
	prTabs({
		underline: '1px solid #ddd',
		tabsBottomMargin: '20px',
		inactive: '#ddd',
		active: '#6DB000',
		inActColor: '#333',
		actColor: '#fff'
	});
		</pre>
	</code>
	<p class="item-title">Inline custom styles</p>
	You can also add inline styles for a single use or overriding on custom styles
	<code>
	<pre>
	Just add your attribute and it's value.
	Ex: For adding custom <u>active</u> background color just add <u>data-active="#d00"</u> 
	&lt;div data-prTabs data-active="red"&gt;
		&lt;div data-tab="Customer SignUp"&gt;
			Your First Tab
		&lt;/div&gt;
		&lt;div data-tab="Agent SignUp"&gt;
			&lt;h2&gt;Lorem lipsum 2&lt;/h2&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	</pre>
	</code>
<br /><br /><br />

	<div data-prTabs data-active="" data-inact-color="#33f" data-tab-click="yes">
		<div data-tab="Customer SignUp">
			<h2>Lorem lipsum</h2>
		</div>
		<div data-tab="Agent SignUp">
			<h2>Doler Siet</h2>
		</div>
		<button class="prev">Prev</button>
		<button class="next">Next</button>
	</div>
	<hr />
	<div data-prTabs data-active="#d00" data-inact-color="#33f" data-tab-click="no">
		<div data-tab="The First">
			<h2>Ameit Colazo</h2>
		</div>
		<div data-tab="The Second">
			<h2>Sonial balsome kureti</h2>
		</div>
		<button class="prev">Prev</button>
		<button class="next">Next</button>
	</div>
	<hr />
	
	<p class="item-title">Disabling tab change on tab click. (Navigate to new tab by button click)</p>
	Add this function for initialization of custom attributes
	<code>
		
		<pre>
	prTabs({
		tabClick: false,
		next	: '.next',
		prev	: '.prev'
	});
		</pre>
	</code>
	
<?php include_once('../footer.php'); ?>