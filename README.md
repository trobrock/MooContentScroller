MooContentScroller
===========

MooContentScroller is a simple plugin that allows the user to scroll through information that is contained in some container that has it's overflow hidden. This can be especially useful in situations when you are given a page design that cannot stretch, this will allow the content to still be easily viewed

![Screenshot](http://trobrock.github.com/MooContentScroller/screenshot.png)

How to use
----------

This plugin is intended to be very simple to use. There is only one requirement for an element for this to be used on, the element must have an overflow of hidden set. Other than that it doesn't take much to setup.

	var myScrollerOne = new MooContentScoller(element);

*element* can either be a single element retrieved with document.id or $(), or it can be an array of elements retrieved with $$().

And that's it something like this would add the scroller to any div's with the class of *scrollable*.

	var elements = $$('div.scrollable');
	var myDivScroller = new MooContentScroller(elements);

Currently there is no support for the changing of background colors, but you can change the background png of the mcs-controls class to any 1x1 semi-transparent png that you would like.  This goes the same for the button images, I will be adding this functionality soon.

Notes
-----------------

This plugin is still in very early development and is one of my first attempts at building a MooTools plugin, help is always welcome. Feel free to fork the repo.