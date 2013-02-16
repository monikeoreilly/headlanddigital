
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
		mp4:'assets/youtube.mp4',
		ogv:'assets/youtube.ogv',
		webm:'assets/youtube.webm',
		poster:'assets/youtube.jpg',
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

	/***********************************************
	  udpate previous and next hrefs on nav clicks
	***********************************************/
	
	// Step1, get a list of possible pages
	var pageList = []; //create an empty array to fill with page names

	$('.page').each(function () { // look at each .page
		var pageName = $(this).attr('id'); // grab its id
		pageList.push('#' + pageName); // pop that into our array, add a '#' for the href later
	});

	// Step2, make our buttons nice and easy to access
	// wrap them with the jQuery object and save to a variable.
	// Now we can access them anywhere
	var previous = $('.previous a'),
		next = $('.next a');

	// Step3, when a link in the #main is clicked
	// grab its id and update the hrefs of the previous and next buttons.
	$('#main a').click(function () {

		// wrap the link in the jQuery object and save it in a valiable.
		// grab its id
		var clicked = $(this), // we use commas here, rather than a colon, because we're setting many vars at once. It's faster than many var statements.
			target = clicked.attr('href'),

		// so, now we know where we want to go.
		// The previous and next buttons need to be given a href
		// the hrefs will be it items before and after "target" in the pageList array

		// lets find out where in the array target is.
			positionOfTarget = pageList.indexOf(target),
		// now just grab the items before and after and save them
			previousHref = pageList[positionOfTarget - 1],
			nextHref = pageList[positionOfTarget + 1];

		// and finally, update the hrefs of the links
		previous.attr('href', previousHref);
		next.attr('href', nextHref);
	});
		
})