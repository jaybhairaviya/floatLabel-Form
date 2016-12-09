$(document).ready(function(){
  // check whether the browser supports placeholder
  $.support.placeholder = function(){
    var element = document.createElement('input');
    return 'placeholder' in element;
  }
  if($.support.placeholder()){

    $('.form-group').addClass('hideLabel');

    $('input').on('keyup focus blur',function(e){

    //  caching the inputs and parent
    $this = $(this);

    $parent = $this.parent();
    //Carrying out functions
    if(e.type == 'keyup'){
      if($this.val() != ''){
        $parent.removeClass('hideLabel');
      }
      else {
        $parent.addClass('hideLabel');
      }
    }

   if(e.type == 'blur'){
     $parent.removeClass('highlightBorder');
     if($this.val() == ''){
       $parent.addClass('hideLabel');
     }
     else {
       $parent.addClass('highlightLabel');
     }
   }

   if(e.type == 'focus'){
     $parent.addClass('highlightBorder');
     if($this.val() != ''){
       $parent.removeClass('highlightLabel');
     }
   }

    });
  }
});
