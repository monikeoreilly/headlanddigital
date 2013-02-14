
$(document).ready(function() {


	$('#videohome1').videoBG({
		mp4:'assets/about1.mp4',
		ogv:'assets/about1.ogv',
		webm:'assets/about1.webm',
		poster:'assets/about1.jpg',
		scale:true,
		zIndex:0
	});
	$('#videohome2').videoBG({
		mp4:'assets/about2.mp4',
		ogv:'assets/about2.ogv',
		webm:'assets/about2.webm',
		poster:'assets/about2.jpg',
		scale:true,
		zIndex:0
	});
	$('#videohome3').videoBG({
		mp4:'assets/about3.mp4',
		ogv:'assets/about3.ogv',
		webm:'assets/about3.webm',
		poster:'assets/about3.jpg',
		scale:true,
		zIndex:0
	});
	$('#videowork1').videoBG({
		mp4:'assets/about3.mp4',
		ogv:'assets/about3.ogv',
		webm:'assets/about3.webm',
		poster:'assets/about3.jpg',
		scale:true,
		zIndex:0
	});
	$('#videowork2').videoBG({
		mp4:'assets/kilmacthomas.mp4',
		ogv:'assets/kilmacthomas.ogv',
		webm:'assets/kilmacthomas.webm',
		poster:'assets/kilmacthomas.jpg',
		scale:true,
		zIndex:0
	});
	$('#videocontact').videoBG({
		mp4:'assets/contact.mp4',
		ogv:'assets/contact.ogv',
		webm:'assets/contact.webm',
		poster:'assets/contact.jpg',
		scale:true,
		zIndex:0
	});

	// udpate left and right on nav clicks

	$('#main').click(function (e) {
		var clicked = e.target,
			target, name;

		if ( clicked.tagName === "A") {
			clicked = $(clicked);

			target = clicked.attr('href');

			console.log('go to ' + target);

			name = target.slice(1);

			console.log(name);

			var x = 0,
				count = $('.page').length;

			$('.page').each(function (item) {
				console.log(item);
			});

		}
	})
		
})