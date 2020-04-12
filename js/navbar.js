
   window.onscroll = () => {
  const nav = document.querySelector('#nav__bar');
  if(this.scrollY <660) nav.className = 'top_nav'; else nav.className = 'scroll';
};

 $(".close-it").click(function(e) {
  
  $("#responsive-menu").prop("checked", !$("#responsive-menu").prop("checked"));
})

