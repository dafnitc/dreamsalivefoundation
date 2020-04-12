

// var slideIndex = 0;

// carousel();

// function carousel() {
 
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none"; 
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1} 
//   x[slideIndex-1].style.display = "block"; 
//   setTimeout(carousel, 2000); 
// }
// for mouse over
if (document.getElementsByClassName("auto")) {
  var autos = document.getElementsByClassName("auto");
  for (var i=0; i<autos.length; i++) {
    autos[i].addEventListener("mouseover", autoOver);
    autos[i].addEventListener("mouseout", autoOut);
  }
}

function autoOver() {
  this.style.width = (this.scrollWidth)*2 + "px";
}

function autoOut() {
  this.style.width = "40px";
}
// for share button
$('.share-button').on('click',function(){  
  $(this).addClass('open');
})
$( ".share-items" ).draggable({ 
  axis: "x",
  containment : ".share-items-wrapper"
});
$( ".share-item" ).on('click',function(){
   $('.share-button').addClass('shared');
   setTimeout(function(){
    $('.share-button').addClass('thankyou');
  }, 800);
  setTimeout(function(){
    $('.share-button').removeClass('open');
    $('.share-button').removeClass('shared');
    $('.share-button').removeClass('thankyou');
  }, 2500);
});
 var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });


 // Created for an Articles on:
// https://www.html5andbeyond.com/bubbling-text-effect-no-canvas-required/

jQuery(document).ready(function($){
 
    // Define a blank array for the effect positions. This will be populated based on width of the title.
    var bArray = [];
    // Define a size array, this will be used to vary bubble sizes
    var sArray = [4,6,8,10];
 
    // Push the header width values to bArray
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }
     
    // Function to select random array element
    // Used within the setInterval a few times
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
 
    // setInterval function used to create new bubble every 350 milliseconds
    setInterval(function(){
         
        // Get a random size, defined as variable so it can be used for both width and height
        var size = randomValue(sArray);
        // New bubble appeneded to div with it's size and left position being set inline
        // Left value is set through getting a random value from bArray
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
         
        // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
        // Callback function used to remove finsihed animations from the page
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity' : '-=0.7'
        }, 3000, function(){
            $(this).remove()
        }
        );
 
 
    }, 350);
 
});