//This javascript code removes all 3 types of line breaks
//someText = someText.replace(/(\r\n|\n|\r)/gm,"");

//compressed.replace(\/\*[\w\'\s\r\n\*]*\*\/)|(\/\/[\w\s\']*)|(\<![\-\-\s\w\>\/]*\>);  //Removes comment lines

/*********************************************
	* PR MODAL
	* Developed by: Learnitude Technologies
	* Author: Priyabrata Senapati
	* Version: 0.1
***********************************************/

	var defaultModalOptions = {
								bgOpacity	: 0.5,
								width		: '100%',
								maxWidth	: '1000px',
								height		: '500px',
								bg			: '#fff',
								padding		: '50px',
								color		: '#777',
								fontSize	: '14px'
							};
	
$(document).ready(function(){
	
	// Inline Styles
	//============================================================
		
	//================================================================
	// end - Inline Styles
	
	var prModalStyle = '<style>';
		prModalStyle += '.pr-modal{';
		prModalStyle += '	position:fixed; ';
		prModalStyle += '	top: 0; right: 0; bottom: 0; left: 0;';
		prModalStyle += '	z-index: 1000; ';
		prModalStyle += '	background: rgba(0,0,0,'+defaultModalOptions.bgOpacity+');';
		prModalStyle += '	display: none;';
		prModalStyle += '}';
		prModalStyle += '.pr-modal .modal-content{';
		prModalStyle += '	width: '+defaultModalOptions.width+';';
		prModalStyle += '	max-width: '+defaultModalOptions.maxWidth+';';
		prModalStyle += '	margin: 2% auto;';
		prModalStyle += '	height:'+defaultModalOptions.height+';';
		prModalStyle += '	background: '+defaultModalOptions.bg+'; ';
		prModalStyle += '	padding: '+defaultModalOptions.padding+';';
		prModalStyle += '	color: '+defaultModalOptions.color+';';
		prModalStyle += '	font-size: '+defaultModalOptions.fontSize+';';
		prModalStyle += '	position: relative;';
		prModalStyle += '	top: -550px;';
		prModalStyle += '	overflow: auto;';
		prModalStyle += '}';
		prModalStyle += '.pr-modal .modal-content .close{';
		prModalStyle += '	position: absolute;';
		prModalStyle += '	display: block;';
		prModalStyle += '	top: 0;';
		prModalStyle += '	right: 0;';
		prModalStyle += '	width: 40px;';
		prModalStyle += '	height:40px;';
		prModalStyle += '	line-height:40px;';
		prModalStyle += '	text-align: center;';
		prModalStyle += '	font-size: 14px;';
		prModalStyle += '	font-weight: 700;';
		prModalStyle += '	color: #000;';
		prModalStyle += '	cursor: pointer;';
		prModalStyle += '}';
		prModalStyle += '.pr-modal .modal-content .close:hover{';
		prModalStyle += '	color: #f00;';
		prModalStyle += '}';
		prModalStyle += '	</style>';
		
	$('head').append(prModalStyle);
	
	////////////////
	$('[data-prModal]').each(function(){
		var dataPrModal = $(this).attr('data-prModal') || '';
		//alert(dataPrModal);
		var prModalButton = $('[data-prModal='+dataPrModal+']').data('pr-modal-button');
		var prModalContent = $('[data-prModal='+dataPrModal+']').html();
		$('[data-prModal='+dataPrModal+']').addClass('pr-modal').html('<div class="modal-content"> <span class="close">X</span>'+ prModalContent +' </div>');
	
	////////////
	
		// Open Modal
		$(prModalButton).click(function(){
			$('[data-prModal='+dataPrModal+']').fadeIn(300, function(){
				$('[data-prModal='+dataPrModal+'] .modal-content').animate({top:0}, 300);
				$('[data-prModal='+dataPrModal+'] .close').click(function(){
					$(this).parent().animate({top: '-550px'}, 500, function(){
						$(this).parent().fadeOut(300);
					});
				});
			});
		});
	});	
});

function prModal(obj){
	defaultModalOptions = merge_options(defaultModalOptions,obj);
}

/*******
	* PR POP
	* Learnitude Technologies (P) Ltd.
	* Author: Priyabrata Senapati
	* Version: 1.0.0
*******/

$(document).ready(function(){
	var prPopStyle = '<style>';
		prPopStyle += '.pr-pop{z-index:10000; position: fixed; top: 0; right: 0; bottom: 0; left: 0;	background: rgba(0,0,0,0.7); font-family:arial; font-size:12px}';
		prPopStyle += '.pr-pop .pr-x{display: table; min-height: 200px; max-width: 90%; background: #fff; border: 2px solid #555; margin: 10% auto; position: relative;}';
		prPopStyle += '.pr-pop .pr-x .head{padding: 10px 20px; background:#ddd; border-bottom:2px solid #555; font-size:14px}';
		prPopStyle += '			.pr-pop .pr-x .bdy{padding:30px}';
		prPopStyle += '			.pr-pop .pr-x .close{position:absolute; right:0; top:0; width: 30px; height:30px; line-height:30px; text-align:center; color:#555; font-size:12px; cursor:pointer; font-weight: bold; font-family: verdana; text-shadow: 1px 1px #fff}';
		prPopStyle += '			.pr-pop .pr-x .trangle{position: absolute; top: -15px; display: block; width: 1px; height: 1px; border: 14px solid transparent; border-top-width: 0; border-bottom: 14px solid #444; }';

		prPopStyle += '				.pr-pop.tooltip .pr-x{';
		prPopStyle += '				border-radius: 10px;';
		prPopStyle += '				-moz-border-radius: 10px;';
		prPopStyle += '				-webkit-border-radius: 10px;';
		prPopStyle += '			}';
		prPopStyle += '			.pr-pop.tooltip .pr-x .head{';
		prPopStyle += '				border-radius: 10px 10px 0 0;';
		prPopStyle += '				-moz-border-radius: 10px 10px 0 0;';
		prPopStyle += '				-webkit-border-radius: 10px 10px 0 0;';
		prPopStyle += '			}';
		prPopStyle += '</style>';
		
		$('head').append(prPopStyle);
});
function prAlert(data, author, options, element){
	author	= author || 'PR-POP Says';
	data	= data || '';
	element	= element || '';
	var defaultOptions = {type:''};
	options = options || {};
	//alert(options);
	
	var opt = merge_options(defaultOptions, options);
	//alert(JSON.stringify(opt));
	
	
	if( author == 'no head' ){
		$('body').prepend('<div class="pr-pop '+opt.type+'"> <div class="pr-x"><div class="close">X</div> <div class="bdy">' + data + '</div></div> </div>');
	}else{
		$('body').prepend('<div class="pr-pop '+opt.type+'"> <div class="pr-x"><div class="close">X</div><div class="head">'+ author +'</div> <div class="bdy">' + data + '</div></div> </div>');
	}
	
	
	//===============
	if( data.indexOf('=>') == 0 ){
		var content = data.split('=>')[1];
		var cData = $(content).html();
		$(".bdy").html(cData);
	}//else if( data.indexOf('=>>') == 0 ){ // For including a page inside prAlert box
		
	//}
	
	
	//OPTIONS
	//==================
	// -width-
	if( opt.width !== null && opt.width !== 'undefined' && opt.width !== undefined ){
		$('.pr-pop .pr-x').width(opt.width);
	}
	// -css-
	if( opt.css !== null && opt.css !== 'undefined' && opt.css !== undefined ){
		$('.pr-pop .pr-x').css(opt.css);
	}
	// -tooltip-
	if( opt.type == 'tooltip' ){
		
		var boxHeight;
		var boxWidth;
		var boxX;
		var boxY, elHeight;
		var element = opt.el;
		var xPosition = 0;
		var yPosition = 0;
		var tLeft = '20px';
		var pageWidth = $(document).width();
	  
		while(element) {
			xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
			yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
			element = element.offsetParent;
		}
		
		boxHeight = $('.pr-pop .pr-x').height();
		boxWidth = $('.pr-pop .pr-x').width();
		boxX = xPosition;
		
		$('.pr-pop').css({background:'none'});
		$('.pr-pop .pr-x').append('<div class="trangle"></div>');
		
		if(yPosition-boxHeight < 1 ){
			boxY = yPosition + 28 ;
			$('.pr-pop .pr-x .trangle').css({left:boxX});
		}else{
			boxY = yPosition- (boxHeight + 28);
			$('.pr-pop .pr-x .trangle').css({top: 'auto', bottom: '-15px', 'border-bottom':0, 'border-top-width':'14px', 'border-top-color':'#444', left:tLeft});
		}
		
		$('.pr-pop .pr-x').css({position:'absolute', margin:0, top:boxY, left:boxX});
	}
	
	
	
	$('.pr-pop .pr-x .close').hover(function(){
		$(this).css('color','#900');
	},function(){
		$(this).css('color','#555');
	});
	
	$('body .pr-pop').fadeIn(100);
	
	$('.pr-pop .close, .pr-pop .exit').click(function(){
		$('.pr-pop').fadeOut(100, function(){
			$('.pr-pop').remove();
		});
	});

	
}
/*********************************************
	* PR PROGRESS BAR
	* Developed by: Learnitude Technologies
	* Author: Priyabrata Senapati
	* Version: 0.1
***********************************************/

var defaultOptions = {
						text  : false,
						height:30, 
						border: '1px solid #ccc',
						rounded:'5px', 
						progress:0,
						progressColor: '#bbb',
						barBg	: '#f5f5f5',
						color: '#fff',
						fontSize: '18px'
					 };
var options;
var opt;
var el;
var result;

$(document).ready(function(){
	el = $('[data-prProgress]');
	el.each(function(){
		result = $('<div data-progress></div>');
		var d = $(this);
		d.append(result);
		options1 = d.attr('data-prProgress');
		options = eval("("+ options1 +")");
		opt = merge_options(defaultOptions, options);
		if(opt.text){
			result.text(opt.progress+'%');
		}
		
		d.css({
			height:opt.height, 
			border:opt.border,
			overflow: 'hidden',
			'-webkit-border-radius':opt.rounded,
			'-moz-border-radius':opt.rounded,
			'border-radius':opt.rounded,
			'background-color': opt.barBg
		});
		result.css({
			height	: opt.height + 'px',
			'line-height'	: opt.height + 'px',
			width	: opt.progress + '%',
			'text-align': 'center',
			'font-size' : opt.fontSize,
			'background-color': opt.progressColor,
			color: opt.color,
			'-webkit-transition': 'all 0.5s ease',
			'-moz-transition': 'all 0.5s ease',
			transition: 'all 0.5s ease'
		});
	});
});



function prProgress(obj){
	$(document).ready(function(){
		el = $(obj.el);
		el.append('<div data-progress></div>');
		result = el.children('[data-progress]');
		opt = merge_options(defaultOptions, obj);
		
		if(opt.text){
			result.text(opt.progress+'%');
		}
		
		el.css({
			height:opt.height, 
			border:opt.border,
			overflow: 'hidden',
			'-webkit-border-radius':opt.rounded,
			'-moz-border-radius':opt.rounded,
			'border-radius':opt.rounded,
			'background-color': opt.barBg
		});
		result.css({
			height	: opt.height + 'px',
			'line-height'	: opt.height + 'px',
			width	: opt.progress + '%',
			'text-align': 'center',
			'font-size' : opt.fontSize,
			'background-color': opt.progressColor,
			color: opt.color,
			'-webkit-transition': 'all 0.5s ease',
			'-moz-transition': 'all 0.5s ease',
			transition: 'all 0.5s ease'
		});
	});
}

/*********************************************
	* PR TABS
	* Developed by: Learnitude Technologies
	* Author: Priyabrata Senapati
	* Version: 0.1
***********************************************/

	var defaultTabOptions = {
								underline: '1px solid #ddd',
								tabsBottomMargin: '20px',
								inactive: '#ddd',
								active: '#6DB000',
								inActColor: '#333',
								actColor: '#fff',
								tabClick: true,
								next	: '.next',
								prev	: '.prev'
							};
	
$(document).ready(function(){
	
	// Inline Styles
	//============================================================
		var prTaBactiveColor = $('[data-prTabs]').data('active') || '';
		var prTaBinactiveColor = $('[data-prTabs]').data('inactive') || '';
		var prTaBactColor = $('[data-prTabs]').data('act-color') || '';
		var prTaBinActColor = $('[data-prTabs]').data('inact-color') || '';
		var prTaBtabsBottomMargin = $('[data-prTabs]').data('tabs-bottom-margin') || '';
		var prTaBunderline = $('[data-prTabs]').data('underline') || '';
		
		var prTaBtabClick = $('[data-prTabs]').data('tab-click') || '';
		//var prTaBnext = $('[data-prTabs]').data('next') || '';
		//var prTaBprev = $('[data-prTabs]').data('prev') || '';
		//alert(prTaBtabClick);
		
		defaultTabOptions.active = (prTaBactiveColor != '')? prTaBactiveColor : defaultTabOptions.active;
		defaultTabOptions.inactive = (prTaBinactiveColor != '')? prTaBinactiveColor : defaultTabOptions.inactive;
		defaultTabOptions.actColor = (prTaBactColor != '')? prTaBactColor : defaultTabOptions.actColor;
		defaultTabOptions.inActColor = (prTaBinActColor != '')? prTaBinActColor : defaultTabOptions.inActColor;
		defaultTabOptions.tabsBottomMargin = (prTaBtabsBottomMargin != '')? prTaBtabsBottomMargin : defaultTabOptions.tabsBottomMargin;
		defaultTabOptions.underline = (prTaBunderline != '')? prTaBunderline : defaultTabOptions.underline;
		
		defaultTabOptions.tabClick = (prTaBtabClick == 'no')? false : true;
		//defaultTabOptions.next = (prTaBnext != '')? prTaBnext : defaultTabOptions.next;
		//defaultTabOptions.prev = (prTaBprev != '')? prTaBprev : defaultTabOptions.prev;
		//alert(activeColor);
	//================================================================
	// end - Inline Styles
	
	var prTabStyle = '<style>';
		prTabStyle += '	ul.pr-tab{';
		prTabStyle += '		margin: 0;';
		prTabStyle += '		padding: 0;';
		prTabStyle += '		border-bottom: '+defaultTabOptions.underline+';';
		prTabStyle += '		margin-bottom: '+defaultTabOptions.tabsBottomMargin+';';
		prTabStyle += '		list-style: none;';
		prTabStyle += '	}';
		prTabStyle += '	ul.pr-tab:after{';
		prTabStyle += '		content: "";';
		prTabStyle += '		display: block;';
		prTabStyle += '		clear: both;';
		prTabStyle += '	}';
		prTabStyle += '	ul.pr-tab li{';
		prTabStyle += '		float: left;';
		prTabStyle += '		padding: 5px 15px;';
		prTabStyle += '		font-size: 16px;';
		prTabStyle += '		cursor: pointer;';
		prTabStyle += '		background: '+defaultTabOptions.inactive+';';
		prTabStyle += '		color: '+defaultTabOptions.inActColor+';';
		prTabStyle += '		border-right: 1px solid rgba(0,0,0,0.2);';
		prTabStyle += '		border-left: 1px solid rgba(255,255,255,0.2)';
		prTabStyle += '	}';
		prTabStyle += '	ul.pr-tab li.active{';
		prTabStyle += '		background: '+defaultTabOptions.active+';';
		prTabStyle += '		color: '+defaultTabOptions.actColor+';';
		prTabStyle += '	}';
		prTabStyle += '	[data-tab]:nth-child(n+2){ display: none; }';
		prTabStyle += '	</style>';
		
	$('head').append(prTabStyle);
	var li = "";
	var dataTab = "";
	var counter = 0;
	var liActive = "";
	
	$('[data-prTabs]').prepend('<div data-tabContainer></div>');
	
	$('[data-prTabs] [data-tab]').each(function(){
		counter++ ;
		liActive = ( counter == 1 )? "active" : "" ;
		dataTab = $(this).attr('data-tab');
		li += '<li class="'+liActive+'" data-taber="'+dataTab+'">'+dataTab+'</li>';
		
		$(this).appendTo('[data-prTabs] [data-tabContainer]');
	});
	
	
	$('[data-prTabs]').prepend('<ul class="pr-tab">'+li+'</ul>');

	if(defaultTabOptions.tabClick){
		$('[data-taber]').click(function(){
			var tab = $(this).attr('data-taber');
			$('ul.pr-tab li').removeClass('active');
			$('ul.pr-tab li[data-taber="'+tab+'"]').addClass('active');
			$('[data-tab]').hide();
			$('[data-tab="'+tab+'"]').show();
			//alert(tab);
		});
	}
	$(defaultTabOptions.next).click(function(){
		var tab = $('[data-taber].active').next().attr('data-taber');
		$('ul.pr-tab li').removeClass('active');
		$('ul.pr-tab li[data-taber="'+tab+'"]').addClass('active');
		$('[data-tab]').hide();
		$('[data-tab="'+tab+'"]').show();
	});
	$(defaultTabOptions.prev).click(function(){
		var tab = $('[data-taber].active').prev().attr('data-taber');
		$('ul.pr-tab li').removeClass('active');
		$('ul.pr-tab li[data-taber="'+tab+'"]').addClass('active');
		$('[data-tab]').hide();
		$('[data-tab="'+tab+'"]').show();
	});
		
});

function prTabs(obj){
	defaultTabOptions = merge_options(defaultTabOptions,obj);
}


/*****************************
	* AJAX FORM
*****************************/
$(document).ready(function(){
	$(".ajaxForm").submit(function(e){
		var fdata = new FormData(this);
		var act = $(this).attr("action");
		var disForm = $(this);
		var ajaxFormAlert = disForm.data('alert') || '';
		var ajaxFormCallback = disForm.data('callback') || '';
		$.ajax({
			url : act,
			type: "POST",
			data : fdata,
			contentType: false,       // The content type used when sending data to the server.
			cache: false,             // To unable request pages to be cached
			processData:false, 
			beforeSend: function() {
				
			},
			success:function(data, textStatus, jqXHR){
				if(ajaxFormAlert == 'data'){
					alert(data);
				}else if(ajaxFormAlert != ''){
					alert(ajaxFormAlert);
				}
				
				eval(ajaxFormCallback);
			},
			error: function(jqXHR, textStatus, errorThrown) 
			{
				//if fails
				alert(errorThrown);
			}
		});
		e.preventDefault(); //STOP default action
		e.unbind(); //unbind. to stop multiple form submit.
	});
});



//Depended Functions
function merge_options(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}
//Depended Functions




//Read File [[[ These functions will not be exist in minify version
//====================================================================
function getMyFile(url){
	$.get(url, function(data) {
		var text = data.split('[[[')[0];
		text = text.replace(/\/\*.+?\*\/|\/\/.*(?=[\n\r])/g, '');
		text = text.replace(/(\r\n|\n|\r)/gm,"");
		text = text.replace(/\/\*([\s\S]*?)\*\//g,'');
		text = text.replace(/\s\s+/g, ' ');
		download(text.trim(), 'jquery-ltpl-ui.min.js', 'text/javascript');
		//alert(data);
	});
}
//Create File
function download(text, name, type) {
  var a = document.getElementById("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
}

//PLEASE DON'T WRITE ANY FUNCTION BELOW THIS