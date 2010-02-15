var MooContentScroller = new Class({
	Implements : [Options], 
	options : {
		path : '', 
		up_img : 'img/scroller_up.png', 
		down_img : 'img/scroller_down.png', 
		background : '#000', 
	}, 
	
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
				'class' : 'cs-controls', 
				'styles' : { 
					'padding' : 3, 
					'text-align' : 'center', 
				}, 
			});
			var controlBg = new Element('div', {
				'styles' : { 
					'background-color' : this.options.background, 
					'opacity' : 0.6, 
				}, 
			});
			var controlUpButton = new Element('img', {
				'src' : this.options.path + this.options.up_img, 
				'events' : {
					'click' : this.scrollUp.bind(this),
				}, 
				'styles' : {
					'cursor' : 'pointer', 
					'position' : 'relative', 
				}, 
			});
			var controlDownButton = new Element('img', {
				'src' : this.options.path + this.options.down_img, 
				'events' : {
					'click' : this.scrollDown.bind(this), 
				}, 
				'styles' : {
					'cursor' : 'pointer', 
					'position' : 'relative', 
				},
			});

			controlUpButton.inject(controlDiv);
			controlDownButton.inject(controlDiv);
			
			controlDiv.inject(ele);
			controlDiv.position({
				relativeTo: ele, 
				position: 'centerBottom', 
				edge: 'centerBottom'
			});
			
			controlBg.inject(controlDiv, 'before');
			controlBg.setStyles({width : controlDiv.getSize().x, height : controlDiv.getSize().y});
			controlBg.position({
				relativeTo : ele, 
				position : 'centerBottom', 
				edge : 'centerBottom', 
			});
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
		var controlBg = controlDiv.getPrevious();
		var ele = controlDiv.getParent();
		
		var newControlDivPos = controlDiv.position({
			relativeTo: ele, 
			position: 'centerBottom', 
			edge: 'centerBottom',
			returnPos : true, 
		});
		controlDiv.morph(newControlDivPos);
		
		var newControlBgPos = controlBg.position({
			relativeTo : ele, 
			position : 'centerBottom', 
			edge : 'centerBottom', 
			returnPos : true, 
		});
		controlBg.morph(newControlBgPos);
	},
});