/*
---
description: Content scroller for overflowed and hidden content

license: MIT-style

authors:
- Trae Robrock

requires:
- ElementSpy
- core:1.2.4:*
- more:1.2.4.4:Fx.Scroll

provides: [MooContentScroller]

...
*/

var MooContentScroller = new Class({
	Implements : [Options], 
	options : {}, 
	
	initialize : function(element, options){
		this.setOptions(options);
		
		if ($type(element) !== 'array') {
			element = [element];
		}
		element = element.filter(function(item){
			if (item.getStyle('overflow').toLowerCase() === 'hidden') {
				return true;
			}
		});
		this.injectControls(element);
	},
	
	injectControls : function(elements){		
		elements.each(function(ele){
			var controlDiv = new Element('div', {
				'class' : 'mcs-controls'
			});
			var controlUpButton = new Element('div', {
				'class' : 'mcs-button-up', 
				'events' : {
					'click' : this.scrollUp.bind(this)
				}
			});
			var controlDownButton = new Element('div', {
				'class' : 'mcs-button-down', 
				'events' : {
					'click' : this.scrollDown.bind(this)
				}
			});

			controlUpButton.inject(controlDiv);
			controlDownButton.inject(controlDiv);
			
			controlDiv.inject(ele);
			controlDiv.position({
				relativeTo: ele, 
				position: 'centerBottom', 
				edge: 'centerBottom'
			});
			
			if ($defined(ElementSpy)) {
				var myElementSpy = new ElementSpy(ele, function(){
					return this.getScrollSize().y;
				}, {
					duration : 1500, 
					onChange : function(old, nu){
						if ((ele.getScrollSize().y + ele.getSize().y) > ele.getScroll().y) {
							var yOff = (ele.getScrollSize().y + ele.getSize().y) - ele.getScroll().y;
							var divScroll = new Fx.Scroll(ele);
							divScroll.start(0, yOff).chain(
								function(){
									this.resetControls(controlDiv);
								}.bind(this)
							);
						}
					}.bind(this),
				});
				myElementSpy.start();
			}
		}.bind(this));
	},
	
	scrollUp : function(e){
		var contentDiv = e.target.getParent().getParent();
		var divHeight = contentDiv.getSize().y;
		var divScrollable = contentDiv.getScrollSize().y;
		var divScrolled = contentDiv.getScroll().y;
		if (divScrolled < divScrollable) {
			var yOff = ((divScrolled - divHeight - e.target.getParent().getSize().y) < 0) ? 0 : (divScrolled - divHeight - e.target.getParent().getSize().y);
			var divScroll = new Fx.Scroll(contentDiv);
			divScroll.start(0, yOff).chain(
				function(){
					this.resetControls(e.target.getParent());
				}.bind(this)
			);
		}
	},
	
	scrollDown : function(e){
		var contentDiv = e.target.getParent().getParent();
		var divHeight = contentDiv.getSize().y;
		var divScrollable = contentDiv.getScrollSize().y;
		var divScrolled = contentDiv.getScroll().y;
		if (divScrolled < divScrollable) {
			var yOff = ((divScrolled + divHeight) > divScrollable) ? divScrollable : (divScrolled + divHeight);
			yOff = yOff - e.target.getParent().getSize().y;
			var divScroll = new Fx.Scroll(contentDiv);
			divScroll.start(0, yOff).chain(
				function(){
					this.resetControls(e.target.getParent());
				}.bind(this)
			);
		}
	},
	
	resetControls : function(controlDiv){
		var ele = controlDiv.getParent();
		
		var newControlDivPos = controlDiv.position({
			relativeTo: ele, 
			position: 'centerBottom', 
			edge: 'centerBottom',
			returnPos : true
		});
		controlDiv.morph(newControlDivPos);
	}
});