window.addEvent('domready', function(){
	var scrollerOne = new MooContentScroller(document.id('container-1'), {
		background : '#700', 
		path : 'js/MooContentScroller/', 
	});
	
	var scrollerTwo = new MooContentScroller($$('.containers'), {
		path : 'js/MooContentScroller/', 
	});
});