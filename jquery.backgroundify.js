/*! jQuery.backgroundify.js
 * https://github.com/EmileDu/backgroundify.js
 *
 * Copyright 2014 Emile Duval
 * www.emileduval.be */

(function($){
  $.fn.backgroundify = function(options){
		
    // Default options
    var settings = $.extend({
			container: '',
			position: 'center',
			size: 'cover',
			repeat: 'no-repeat',
			attachment: 'fixed',
			origin: 'padding-box',
			clip: 'padding-box'
    }, options);
		
    return this.each(function(){

      var $this = $(this);
			var allAttr = [];
			
			$.each(this.attributes, function(){
				if(this.specified){
					switch(this.name){
						case 'data-position':
							allAttr.push(this.name);
							settings.position = this.value;
							break;
						case 'data-size':
							allAttr.push(this.name);
							settings.size = this.value;
							break;
						case 'data-repeat':
							allAttr.push(this.name);
							settings.repeat = this.value;
							break;
						case 'data-attachment':
							allAttr.push(this.name);
							settings.attachment = this.value;
							break;
						case 'data-origin':
							allAttr.push(this.name);
							settings.origin = this.value;
							break;
						case 'data-clip':
							allAttr.push(this.name);
							settings.clip = this.value;
							break;
					}
				}
			});
													 
			$this.parent(settings.container).css({
				background: 'url('+ $(this).attr('src') +') '+ settings.position +' / '+ settings.size +' '+ settings.repeat +' '+ settings.attachment +' '+ settings.origin +' '+ settings.clip
			});
			
			$this.hide();
			for(i = 0; i < allAttr.length; i++){
				$this.removeAttr(allAttr[i]);	
			}
      
    });
  }										 
})(jQuery);
