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

Currently there is no support for the changing of background colors, but you can change the background png of the mcs-controls class to any 1x1 semi-transparent png that you would like.  This goes the same for the button images.

If you are using something like the Fx.Accordion class in your scrollable container, be sure to include the element_spy.js file.  This class was written by David Walsh (http://davidwalsh.name).  It is used to detect a change in the scroll size of the container and move the control buttons to the proper location.

Notes
-----------------

The ElementSpy class watching the scroll size is still a little buggy, and the transition ends up a little jittery, I will be fixing this issue as soon as I can.