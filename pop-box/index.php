<?php include_once('../header.php'); ?>
		<h2 class="site-title">Simple POP BOX</h2>
		<div class="my-div" hidden>
			<strong>Lorem Ipsum is simply</strong> dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into <span>electronic</span> typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		</div>


		<p>
			<a onclick="prAlert('Some content. Default Author')">Here</a> is a pop-box with default author(Header). 
			<code>prAlert('Some content. Default Author')</code>
		</p>
		<p>
			<a onclick="prAlert('Some content. Defined Author','Any defined text')">Here</a> is a pop-box with user defined author(Header).
			<code>prAlert('Some content. Defined Author','Any defined text')</code>
		</p>
		<p>
			<a onclick="prAlert('Some content. Defined Author','no head')">Here</a> is a pop-box without Header.
			<code>prAlert('Some content. Defined Author','no head')</code>
		</p>
		<p>
			<a onclick="prAlert('=>.my-div','no head')">This</a> pop box reflects data from a $lt;div&gt; content. Just put the class name followed by "." or if it is id then followed by "#" as shown in below example.
			<code>
				prAlert('=>.my-div','no head')
				<div>
					&lt;div class="my-div" hidden&gt;<br /> 
					&nbsp;&nbsp;&nbsp;	&lt;strong&gt;Lorem Ipsum is simply&lt;/strong&gt; dummy text of the printing and typesetting<br /> &nbsp;&nbsp;&nbsp;	industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an <br />&nbsp;&nbsp;&nbsp;	unknown printer took a galley of type and scrambled it to make a type specimen book. <br />&nbsp;&nbsp;&nbsp;	It has survived not only five centuries, but also the leap into &lt;span>electronic&lt;/span&gt; <br />&nbsp;&nbsp;&nbsp;	typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of <br />&nbsp;&nbsp;&nbsp;	Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing <br />&nbsp;&nbsp;&nbsp;	software like Aldus PageMaker including versions of Lorem Ipsum.<br /> 
					&lt;/div&gt;
				</div>
			</code>
		</p>
		<p>
			You can also add options here inside brasses like 
		</p>
		<p>
			<a onclick="prAlert('=>.my-div','Some Heading',{type:'tooltip', width:300, el:this})">TEST Tooltip</a> .
			<code>prAlert('=>.my-div','Some Heading',{type:'tooltip', width:300, el:this})</code>
		</p>
<?php include_once('../footer.php'); ?>