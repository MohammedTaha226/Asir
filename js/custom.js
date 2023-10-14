$(function(){


	$(".openMenu").click(function () {
		
		$("body").addClass("overflowH");
		$(".menuMobile").fadeIn();
		$(".transformPage,.menuMobile .menuContent").addClass("active");
		
	});
	

	$(".closeX,.BgClose").click(function () {
		
		$("body").removeClass("overflowH");
		$(".menuMobile").fadeOut();
		$(".transformPage,.menuMobile .menuContent").removeClass("active");
		
	});
	
	$(".menuMobile .menuContent .menuRes li a").click(function (){
		
		$(".menuMobile .menuContent .menuRes li .subMenu").not($(this).next()).slideUp();
		
		$(this).siblings().slideToggle();
		
	});


	$(".header .menuPC .search .openSearch").click(function () {
		
		$(this).siblings().slideToggle();
		
		
	});


	$('.the-slider-inner').bxSlider({
		useCSS: false,
		auto: true,
		controls: true,
		pager: true,
		autoHover: true,
		responsive: true,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '<i class="fa fa-angle-right"></i>',
		prevText: '<i class="fa fa-angle-left"></i>'
	});
	

	  var Owlnews = $('#Owlnews');
	 
	  Owlnews.owlCarousel({
	      
	      items : 3, //10 items above 1000px browser width
	      itemsDesktop : [1200,3], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,3], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:true,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });

	  var itemsHome = $('#itemsHome');
	 
	  itemsHome.owlCarousel({
	      
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1200,3], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,3], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:true,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });

	if ($(".selectmenu")[0]) {
		$( ".selectmenu" ).selectmenu();
		
		}
		/****** Start scroll Top ******/
	
		var scrollButton = $(".goTop");
		
	    scrollButton.click(function () {
			$("html,body").animate({scrollTop : 0}, 800);
		});
	
	/****** End scroll Top ******/
	
	
	$(".login .selectStyle").click(function () {
		
		var id = $(this).attr("id");
		
		$("#"+id+" .list").slideToggle();
		
	});
	
	
	$(".login .selectStyle .list li").click(function () {
		
		var id = $(this).parent().parent().attr("id");
		
		$(this).addClass("active").siblings().removeClass("active");
		
		var text = $(this).text();
		
		$("#"+id +" span").text(text);
		
		
	});
	
	/****** Start Tabs ******/
	
	$(".report .reportForm .tabsBtns li").click(function () {
		
		var myButton = $(this).attr("id"),
			parent = $(this).parent().attr("id");
		
		$(this).addClass("active").siblings().removeClass("active");
		
		$("."+parent+" .tab").hide();
		
		$("."+parent+" ." + myButton).fadeIn();
		
	});
	
	/****** End Tabs ******/
	
	$(".openShare").click(function () {
		$(this).siblings().slideToggle()
	})
	  
	$('body,html').on('click', function(e) {
		var container = $(".openShare,.listSocial"),
		Sub = $(".listSocial");
		

	    if( !$(e.target).is(container)  ){
	        Sub.slideUp();
	    }
	

	});
	
	
	
	
	
		/* WOW Js */
    new WOW().init();
	
	$('.rateStars').raty({
		score:2,
		starOff: 'images/star-off.png',
		starOn: 'images/star-on.png'	
	});
	
	
	
		
	
});
