 // code for vibating copy link butttom
 $( document ).ready(function() {
// Bounce button
$("#animatebutton").click(function(){
const element = document.querySelector('.animatebutton');

element.classList.add('animated', 'shake',);
document.getElementById('animatebutton').innerHTML="Copied to clipboard";
setTimeout(function() {
element.classList.remove('shake',);
// alert('Copied to clipboard');
}, 1000);
});


});

// code for closing and share button
const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');

shareButton.addEventListener('click', event => {
  if (navigator.share) { 

   navigator.share({
      title: 'WebShare API Demo',
      url: location.href
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    } else {
        shareDialog.classList.add('is-open');
    }
});

 closeButton.addEventListener('click', event => {
  shareDialog.classList.remove('is-open');
});

// this is to copy browsers address 

function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  //
  // *** This styling is an extra step which is likely not required. ***
  //
  // Why is it here? To ensure:
  // 1. the element is able to have focus and selection.
  // 2. if element was to flash render it has minimal visual impact.
  // 3. less flakyness with selection and copying which **might** occur if
  //    the textarea element is not visible.
  //
  // The likelihood is the element won't even render, not even a flash,
  // so some of these are just precautions. However in IE the element
  // is visible whilst the popup box asking the user for permission for
  // the web page to copy to the clipboard.
  //

  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';


  textArea.value = text;

  document.body.appendChild(textArea);

  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}

function CopyLink() {
  copyTextToClipboard("http://dreamsalivefoundation.co.in/");

}



function whatsappShare(){
document.getElementById("whatsapplink").href = "whatsapp://send?text=Hi there! Click on http://dreamsalivefoundation.co.in/ to donate for a genuine cause that Dreams Alive Foundation is Funding for.I have done my bit in helping Dreams Alive Foundation by sharing their 'Current Project' .You can help them by giving a donation or Sharing the same.Check their website for more details .To get instant updates on future Projects join 'DAF Volunteer's' WhatsApp group from 'How Could You Help Us' in the website";
}
function facebookShare(){
    document.getElementById('facebooklink').href="https://www.facebook.com/sharer/sharer.php?u=http://dreamsalivefoundation.co.in/";
}
function emailShare(){
    document.getElementById('emaillink').href="https://mail.google.com/a/domain.com/u/0/?view=cm&fs=1&tf=1&source=mailto&to=&su=Add_Your_Helping_Hand&body=Hi there! I have done my bit in helping Dreams Alive Foundation by sharing their 'Current Project' .You can help them by giving a donation or Sharing the same.Check their Website for more details. http://dreamsalivefoundation.co.in/";
}


// for day,month , year
var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("current_day").innerHTML = d.getDate();
document.getElementById("current_month").innerHTML =months[d.getMonth()];
document.getElementById("current_year").innerHTML = (d.getFullYear());