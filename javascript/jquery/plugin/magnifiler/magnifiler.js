// JavaScript Document
(function($){
            $.fn.extend({
                magnifier:function(){
                    this.each(function(){
                        var that = this;
                        $('.left',this).mousemove(function(evt){
                            var x = evt.offsetX;
                            var y = evt.offsetY;
                            
                            var float = $('.float', this);
                            x = x - float.width() / 2; 
                            y = y - float.height() / 2;
                            
                            if(x < 0){
                                x = 0;
                            }
                            if(y < 0){
                                y = 0;
                            }
                            
                            
                            if(x > $(this).width() - float.width()){
                                x = $(this).width() - float.width();
                            }
                            
                            if(y > $(this).height() - float.height()){
                                y = $(this).height() - float.height();
                            }
                            
                            
                            float.css({
                                left:x,
                                top:y
                            });
                            
                            
                            $('.right',that).css({
                                
                                backgroundPositionX:x * -2 + 'px',
                                backgroundPositionY: y * -2 + 'px'
                            })
                        }).mouseover(function(){
                            $('.left .float, .right', that).show();
                        }).mouseout(function(){
                            $('.left .float, .right', that).hide();
                        });
                    })
                }
            })
        })(jQuery)