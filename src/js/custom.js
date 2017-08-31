$(document).ready(function(){

	var cont = 0;

	$('#nav-icon1').click(function(){
		$(".menu-line-1").animate({marginLeft: "-2000px"});
		$(".menu-line-2").animate({marginLeft: "-2000px"});
		$(".menu-line-3").animate({marginLeft: "-2000px"});
		$(".menu-line-4").animate({marginLeft: "-2000px"});
		$(".menu-line-5").animate({marginLeft: "-2000px"});
		$(".menu-line-6").animate({marginLeft: "-2000px"});
		$(this).toggleClass('open');
		$('nav').toggleClass('transparent');
		if(cont == 0){
			$('.menu').fadeIn('slow',function(){

				$(".menu-line-1").animate({marginLeft: "0"},800);
				$(".menu-line-2").animate({marginLeft: "0"},900);
				$(".menu-line-3").animate({marginLeft: "0"},1000);
				$(".menu-line-4").animate({marginLeft: "0"},1100);
				$(".menu-line-5").animate({marginLeft: "0"},1200);
				$(".menu-line-6").animate({marginLeft: "0"},1300);


			});
			$('body').css('overflow-y','hidden');
			cont = 1;
		}
		else{
			$('.menu').fadeOut('slow');
			$('body').css('overflow-y','auto');
			cont = 0;
		}
		
	});

	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 100
		}, 900, 'swing', function () {
			$('#nav-icon1').removeClass('open');
			$('nav').removeClass('transparent');
			$('.menu').fadeOut('slow');
			$('body').css('overflow-y','auto');
			cont = 0;
			window.location.hash = target;
		});
	});

});