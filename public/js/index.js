
var $flow = $('<object></object>').attr({'data': 'flow.svg', 'type': 'image/svg+xml'}).css({'position': 'fixed'});

function main() {
	$('.sidemenu').hide();
	$('#down').on('mouseenter', function() {
		$(this).css('bottom', '8px');
	});
	$('#down').on('mouseleave', function() {
		$(this).css('bottom', '5px');
	});

	$(document).on('scroll', function(){
		console.log($(document).scrollTop());

		$('#down').click(function() {
			downClick();

		});

		if($(document).scrollTop() > 250) {
			downScroll();
			$('.sinner p').text('In view');
			//move text from bottom to top with fraction of scroll
			$('.sinner p').css({'top': '100px'});


		} else if ($(document).scrollTop() < 0){ // EFFECTIVELY DISABLED BECAUSE IT WAS ANNOYING -> click home to slide up
			upScroll();

		}
		$('#Home').click(function() {
			console.log('clicked')
			upScroll()
			$(document).scrollTop(0)
		})

	});
}

function downScroll() {
	$('.ico').fadeOut();
			$('.name').fadeOut();
			$('.menu').fadeOut();
			$('.sidemenu').fadeIn();
			$('.home').slideUp(2000)

}

function downClick() {
	$('.ico').fadeOut();
			$('.name').fadeOut();
			$('.menu').fadeOut();
			$('.sidemenu').fadeIn();
			$('.home').slideUp(1000);
			$(document).scrollTop(100);

}

function upScroll() {
	$('.ico').fadeIn();
			$('.name').fadeIn();
			$('.menu').fadeIn();
			$('.sidemenu').hide();
			$('.home').slideDown(2000);
}

function menuItemHover() {
	//change color

}

$(document).on('ready', main);
