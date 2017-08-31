$(document).ready(function(){



	var dataAtual = new Date($.now());

	var dataEvento = new Date('2017-10-21 08:30:01');

	var data = dataEvento - dataAtual;

	var seconds = parseInt((data/1000)%60);
	var minute = parseInt((data/(1000*60))%60);
	var hour = parseInt((data/(1000*60*60))%24);
	var days = parseInt(data/(1000*60*60*24));

	var porcentMaxSeconds = (seconds*100)/60;
	var porcentMaxMinutes = (minute*100)/60;
	var porcentMaxHours = (hour*100)/60;
	var porcentMaxDays = days;

	var progressBarDay = $('#progress_bar_day');
	var maxDay = days;
	var timeDay = (1000 / maxDay) * 5;
	var valueDay = progressBarDay.val();

	var progressBarHour = $('#progress_bar_hour');
	var maxHour = hour;
	var timeHour = (1000 / maxHour) * 5;
	var valueHour = progressBarHour.val();

	var progressBarMinute = $('#progress_bar_minute');
	var maxMinute = minute;
	var timeMinute = (1000 / maxHour) * 5;
	var valueMinute = progressBarMinute.val();

	var progressBarSecond = $('#progress_bar_second');
	var maxSecond = seconds;
	var timeSecond = (1000 / maxSecond) * 5;
	var valueSecond = progressBarSecond.val();
	

	var animateTime = setInterval(function() {

		dataAtual.setSeconds(dataAtual.getSeconds() + 1);
		data = dataEvento - dataAtual;

		seconds = parseInt((data/1000)%60);
		minute = parseInt((data/(1000*60))%60);
		hour = parseInt((data/(1000*60*60))%24);
		days = parseInt(data/(1000*60*60*24));

		porcentMaxSeconds = (seconds*100)/60;
		porcentMaxMinutes = (minute*100)/60;
		porcentMaxHours = (hour*100)/60;
		porcentMaxDays = days;

		$degSecond = (360*seconds)/60;
		$degMinute = (360*minute)/60;
		$degHour = (360*hour)/60;
		$degDay = (360*days)/60;

		if (porcentMaxSeconds > 50) {
			$('#progress-second').addClass('gt-50');
		}
		else{
			$('#progress-second').removeClass('gt-50');
		}
		if (porcentMaxMinutes > 50) {
			$('#progress-minute').addClass('gt-50');
		}
		else{
			$('#progress-minute').removeClass('gt-50');
		}
		if (porcentMaxHours > 50) {
			$('#progress-hour').addClass('gt-50');
		}
		else{
			$('#progress-hour').removeClass('gt-50');
		}
		if (porcentMaxDays > 50) {
			$('#progress-day').addClass('gt-50');
		}
		else{
			$('#progress-day').removeClass('gt-50');
		}


		$('#progress-day .ppc-progress-fill').css('transform', 'rotate(' + degDay + 'deg)');
		$('#progress-day>.ppc-percents span').html(days);
		$('#progress-hour .ppc-progress-fill').css('transform', 'rotate(' + degHour + 'deg)');
		$('#progress-hour>.ppc-percents span').html(hour);
		$('#progress-minute .ppc-progress-fill').css('transform', 'rotate(' + degMinute + 'deg)');
		$('#progress-minute>.ppc-percents span').html(minute);
		$('#progress-second>.ppc-percents span').html(seconds);
		$('#progress-second .ppc-progress-fill').css('transform', 'rotate(' + $degSecond + 'deg)');

	}, 1000);


	var loadingDay = function() {
		valueDay += 1;
		progressBarDay.val(valueDay);

		var $pd = $('#progress-day');
		degDay = 360 * porcentMaxDays / 100;

		if (valueDay > 50) {
			$pd.addClass('gt-50');
		}

		$('#progress-day .ppc-progress-fill').css('transform', 'rotate(' + degDay + 'deg)');
		$('#progress-day>.ppc-percents span').html(valueDay);

		if (valueDay >= maxDay) {
			clearInterval(animateDay);
		}
	};

	var loadingHour = function() {
		valueHour += 1;
		progressBarHour.val(valueHour);

		var $ph = $('#progress-hour');

		degHour = 360 * porcentMaxHours / 100;

		if (valueHour > 50) {
			$ph.addClass('gt-50');
		}

		$('#progress-hour .ppc-progress-fill').css('transform', 'rotate(' + degHour + 'deg)');
		$('#progress-hour>.ppc-percents span').html(valueHour);

		if (valueHour >= maxHour) {
			clearInterval(animateHour);
		}
	};

	var loadingMinute = function() {
		valueMinute += 1;
		progressBarMinute.val(valueMinute);

		var $pm = $('#progress-minute');

		degMinute = 360 * porcentMaxMinutes / 100;

		if (valueMinute > 50) {
			$pm.addClass('gt-50');
		}

		$('#progress-minute .ppc-progress-fill').css('transform', 'rotate(' + degMinute + 'deg)');
		$('#progress-minute>.ppc-percents span').html(valueMinute);

		if (valueMinute >= maxMinute) {
			clearInterval(animateMinute);
		}
	};

	var loadingSecond = function() {
		valueSecond += 1;
		progressBarSecond.val(valueSecond);

		var $ps = $('#progress-second');

		degSecond = 360 * porcentMaxSeconds / 100;

		if (valueSecond > 50) {
			$ps.addClass('gt-50');
		}

		$('#progress-second .ppc-progress-fill').css('transform', 'rotate(' + degSecond + 'deg)');
		$('#progress-second>.ppc-percents span').html(valueSecond);

		if (valueSecond >= maxSecond) {
			clearInterval(animateSecond);
		}
	};

	var animateDay = setInterval(function() {
		loadingDay();
	}, 50);

	var animateHour = setInterval(function() {
		loadingHour();
	}, 50);

	var animateMinute = setInterval(function() {
		loadingMinute();
	}, 50);

	var animateSecond = setInterval(function() {
		loadingSecond();
	}, 50);


	if($(window).width() < 769){
		$('.countdown').hide();
		clearInterval(animateTime);
	}


});