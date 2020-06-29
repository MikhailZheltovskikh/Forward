// открыть по кнопке
$('.header__top-btn').click(function() {
	$('#form-present').fadeIn();
	$('.overlay').addClass('disabled');
});

$('.bike__description-bottom').click(function() {
	$('#thankyou').fadeIn();
	$('.overlay').addClass('disabled');
});

$('.from-link-2').click(function() {
	$('#city').fadeIn();
	$('.overlay').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.overlay').fadeOut();
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.overlay-inner');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.overlay').fadeOut();
	}
});

// открыть по таймеру 
$(window).on('load', function () { 
	setTimeout(function(){
		if($('#from').hasClass('disabled')) {
			return false;
		} else {
			
			$("#from").fadeIn();
		}
	}, 5000);
});



$('.slider').slick({
  arrows: false,
  asNavFor: '.thumbs',
  arrows: false
});
$('.thumbs').slick({
  slidesToShow: 4,
  arrows: false,  
  focusOnSelect: true,
  asNavFor: '.slider',
});





