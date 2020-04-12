 // code for vibating copy link butttom
 $( document ).ready(function() {
// Bounce button
$("#animatebutton").click(function(){
const element = document.querySelector('.animatebutton');

element.classList.add('animated', 'shake',);

setTimeout(function() {
element.classList.remove('shake',);
alert('Copied to clipboard');
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
      url: 'file:///C:/Users/ANJAN%20GANA/Desktop/DAF/home.html#current__project'
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
  copyTextToClipboard(location.href);
}












// var title = document.getElementById('main-title').cloneNode(true);
// document.querySelector('.titleCont').appendChild(title);
// title.classList.add("overTitle")
// var line = document.createElement('div');
// line.className = 'line';
// document.getElementById('main-content').appendChild(line); 

// var tl = new TimelineMax({repeat:-1});

// for(var i=50; i--;){
//   tl.to(title,R(0.03,0.17),{opacity:R(0,1),y:R(-1.5,1.5), x:R(-1.5,1.5)})
// };

// tl.to(line,tl.duration()/2,{opacity:R(0.1,1),x:R(-window.innerWidth/2,window.innerWidth/2),ease:RoughEase.ease.config({strength:0.5,points:10,randomize:true,taper: "none"}),repeat:1},0);


//   var dot;
//   for (var i=0; i < 10; i++){
//     dot = document.createElement('div');
//     dot.className = 'dot';
//     document.getElementById('main-content').prepend(dot); 
//    setDotPosition(dot);
//     tl.to(dot,0.1,{opacity:0,repeat:1, yoyo:true, onComplete:setDotPosition, onCompleteParams:[dot], ease:RoughEase.ease.config({strength:0.5,points:10,randomize:true,taper: "none"})},0);
//   }

// function setDotPosition(dot)
// {
//   TweenMax.set(dot, {x:R(-window.innerWidth/2,window.innerWidth/2),y:R(-window.innerHeight,window.innerHeight), delay:R(0, 1)});
// }


// function R(max,min){return Math.random()*(max-min)+min};



// ////////////////////////
     
//      const noise = () => {
//     let canvas, ctx;

//     let wWidth, wHeight;

//     let noiseData = [];
//     let frame = 0;

//     let loopTimeout;


//     // Create Noise
//     const createNoise = () => {
//         const idata = ctx.createImageData(wWidth, wHeight);
//         const buffer32 = new Uint32Array(idata.data.buffer);
//         const len = buffer32.length;

//         for (let i = 0; i < len; i++) {
//             if (Math.random() < 0.5) {
//                 buffer32[i] = 0xff000000;
//             }
//         }

//         noiseData.push(idata);
//     };


//     // Play Noise
//     const paintNoise = () => {
//         if (frame === 9) {
//             frame = 0;
//         } else {
//             frame++;
//         }

//         ctx.putImageData(noiseData[frame], 0, 0);
//     };


//     // Loop
//     const loop = () => {
//         paintNoise(frame);

//         loopTimeout = window.setTimeout(() => {
//             window.requestAnimationFrame(loop);
//         }, (1000 / 25));
//     };


//     // Setup
//     const setup = () => {
//         wWidth = window.innerWidth;
//         wHeight = window.innerHeight;

//         canvas.width = wWidth;
//         canvas.height = wHeight;

//         for (let i = 0; i < 10; i++) {
//             createNoise();
//         }

//         loop();
//     };


//     // Reset
//     let resizeThrottle;
//     const reset = () => {
//         window.addEventListener('resize', () => {
//             window.clearTimeout(resizeThrottle);

//             resizeThrottle = window.setTimeout(() => {
//                 window.clearTimeout(loopTimeout);
//                 setup();
//             }, 200);
//         }, false);
//     };


//     // Init
//     const init = (() => {
//         canvas = document.getElementById('noise');
//         ctx = canvas.getContext('2d');

//         setup();
//     })();
// };

// noise();

