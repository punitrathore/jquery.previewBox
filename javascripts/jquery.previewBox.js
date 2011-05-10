(function($){
     $.fn.previewBox = function(user_options){
        var options = {
            debounceSpeed : 400,
            htmlElementSelector : ".html_element",
            cssElementSelector : ".css_element",
            previewBoxElementSelector :  ".preview_box_element"
        };

         if(user_options){
             $.extend(options, user_options);
         }           
        return this.each(function(){
            $this = $(this);
            var preview_box_element = $this.find(options.previewBoxElementSelector);
            var html_element = $this.find(options.htmlElementSelector);
            var css_element = $this.find(options.cssElementSelector);
            update_preview = function(){
                var html = html_element.val();
                var css = css_element.val();
                preview_box_element.html("<style>" + css + "</style>" + html);
            };

            attach_preview_keyup = function(element){                
                element.live("keyup", $.debounce(update_preview, options.debounceSpeed));
            };

            attach_preview_keyup(html_element);
            attach_preview_keyup(css_element);

            update_preview();
        });
    };
})(jQuery);
