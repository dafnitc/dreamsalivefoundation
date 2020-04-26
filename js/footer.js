// this is for red heart
$('.js-save').on('click',function(){  
  $(this).addClass('red-heart');
})
$('.js-save').on('double-click',function(){  
  $(this).removeClass('red-heart');
})
// this is for form validations
function validate(){
	var x = document.getElementById("myEmail").pattern;
  document.getElementById("demo").innerHTML = x;


}
