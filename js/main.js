(function(win, undefined) {
 $(function() {
    var rules = {
      email: function(node) {
        var inputText = node.value,
				    inputRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        
			  return inputRegex.test(inputText);
      },
      name: function(node) {
        var inputText = node.value,
				    inputRegex = /^\s*[a-zA-Z0-9,\s]+\s*$/;
				
			 return inputRegex.test(inputText);
      }
    };
    
    function onFocusOut() {
      validate(this);
    }
    
    function validate(node) { 
     var valid = isValid(node),
         $error = $(node).next('.error'); 
      
      if (valid) {
        $(node).attr('aria-invalid', false);
        $error
          .attr('aria-hidden', true)
          .hide();
        $(node).attr('aria-describedby', '');
      } else {
        $(node).attr('aria-invalid', true);
        $error
          .attr('aria-hidden', false)
          .show();
        $(node).attr('aria-describedby', $error.attr('id'));
      }
    }
    
    function isValid(node) {
      return rules[node.dataset.rule](node);
    }
    
    $('[aria-invalid]').on('focusout', onFocusOut);
  });
}(window));


function clearText()  
{
    document.getElementById('inputName').value = "";
    document.getElementById('date-picker').value = "";
    document.getElementById('email').value = "";
    document.getElementById('mobile').value = "";
    document.getElementById('cudId').value = "";
}

$('.avatar__content--button').click(function() {
$(this).toggleClass('rightarrow');
$(this).toggleClass('leftarrow');
$('.user__content--right').toggleClass('showform');
$('.user__content--right').toggleClass('showbio');
});

$('.form-group input').focus(function(){
   $(this).closest('.form-group').addClass("active");
  }).blur(function(){
       $(this).closest('.form-group').removeClass("active");
});

$("#email").blur(function() 
{
 var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;  
 var emailaddress = $("#email").val();
 if(!emailReg.test(emailaddress)) 
    $("#email").closest('.form-group').addClass("emailerror");
 else
    $("#email").closest('.form-group').removeClass("emailerror");
});




