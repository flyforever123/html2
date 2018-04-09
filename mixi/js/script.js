$(document).ready(function(){

	$(".main-menu").mmenu({},{clone: true});

	$('.list-prod-menu').click(function(e) {
		$('.list-prod-left').toggleClass('active');
		e.preventDefault();
	});
	
	$('.col-tab-links li a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.col-tab-links li a').removeClass('current');
		$('.col-tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	$('.tab-links li a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tab-links li a').removeClass('current');
		$('.prod-tab-content').removeClass('current');
		$('.intro-new-tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	$('.slider').slick();

	$('.slide-tc').slick({
		arrows: false,
		dots: true,
	});

	$('.carousel-indicators.second').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: '<i class="fas fa-chevron-right next"></i>',
    	prevArrow: '<i class="fas fa-chevron-left prev"></i>',
	});

	$('.prod-related').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		nextArrow: '<i class="fas fa-chevron-right next"></i>',
    	prevArrow: '<i class="fas fa-chevron-left prev"></i>',
	});

	
	$('.add').click(function () {
		if ($(this).prev().val() < 3) {
    	$(this).prev().val(+$(this).prev().val() + 1);
		}
	});

	$('.sub').click(function () {
		if ($(this).next().val() > 1) {
    	if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
		}
	});

	var html = [];

	for (i=0; i < 3; i++) {
		html.push(`<div class="col-xs-6 col-sm-6 col-md-6 col-lg-4 block">
									<div class="img-box">
										<img src="http://mixi.lazisite.com/admin/resource/mixi/images/1509072642285_vong-tay-da-Aquamarine-10-ly-890K.jpg" alt="">
									</div>
									<div class="info">
										<div class="prod-left pull-left">
											<h4 class="prod-name"><a href="">Lorem Ipsum Lorem Ipsum Lorem Lorem</a></h4>
											<div class="price-box">
												<del class="old-price">4.000.000</del>
												<span class="price">3.000.000</span>
											</div>
										</div>
										<div class="buy-button pull-right"><a href="">Mua Ngay</a></div>
									</div>
			                	</div>`);
	}

	$('.xemthem a').click(function(e) {
		$('.list-prod-items .append').append(html.join(''));
	});

	$('.pull-right .searh-wrapper').click(function(e) {
		e.stopPropagation();
        e.preventDefault();
		$(this).toggleClass('clicked');
	});

	$(document).click(function(e) {
		$('.pull-right .searh-wrapper').removeClass('clicked');
	});

	var prods = ['Vòng tay', 'Vòng tay Aquamarine', 'Vòng tay Aquamarine 10l'];
    
    // Constructing the suggestion engine
    var prods = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: prods
    });
    
    // Initializing the typeahead
    $('#prod_search').typeahead({
        hint: true,
        highlight: true, /* Enable substring highlighting */
        minLength: 1 /* Specify minimum characters required for showing suggestions */
    },
    {
        name: 'prods',
        source: prods
    });

	// $('#prod_search').autocomplete({
	//     lookup: countries,
	//     onSelect: function (suggestion) {
	//         alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
	//     }
	// });

	// $('.searh-wrapper input').focus(function() {
	// 	var width = $('.main-menu-tc ul').width();
	// 	var s = width - 150;
	// 	$('.main-menu-tc ul li').css('width', '0');
	// 	$('.main-menu-tc ul li:first-child').css('width', 'auto');
	// 	$('.main-menu-tc ul li.searh-wrapper').css('width', s);
	// });

});