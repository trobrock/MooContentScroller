window.addEvent('domready', function(){
	var scrollerOne = new MooContentScroller(document.id('container-1'));
	var scrollerTwo = new MooContentScroller($$('.containers'));
	var myAccordion = new Fx.Accordion($('accordion'), 'h2.toggler', 'div.content');
});