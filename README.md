MooContentScroller
===========

MooContentScroller is a simple plugin that allows the user to scroll through information that is contained in some container that has it's overflow hidden. This can be especially useful in situations when you are given a page design that cannot stretch, this will allow the content to still be easily viewed

![Screenshot](http://trobrock.github.com/MooContentScroller/screenshot.png)

How to use
----------

This plugin is intended to be very simple to use. There is only one requirement for an element for this to be used on, the element must have an overflow of hidden set. Other than that it doesn't take much to setup.

	var myScrollerOne = new MooContentScoller(element, options);

*element* can either be a single element retrieved with document.id or $(), or it can be an array of elements retrieved with $$().
*options* has a few options that you can set:
	options = {
		path : '', // This is the path to the img dir that contains the up and down arrows
		up_img : 'img/scroller_up.png', // This is the default image for the up arrow
		down_img : 'img/scroller_down.png', // This is the default image for the down arrow
		background : '#000', // This is how you would change the background color of the controls
	}

And that's it something like this would add the scroller to any div's with the class of 'scrollable' and assumes the img folder is stored in the js/MooContentScroller relative to the page being viewed

	var elements = $$('div.scrollable');
	var myDivScroller = new MooContentScroller(elements, {
		path : 'js/MooContentScroller/',
	});

Notes
-----------------

This plugin is still in very early development and is one of my first attempts at building a MooTools plugin, help is always welcome. Feel free to fork the repo.