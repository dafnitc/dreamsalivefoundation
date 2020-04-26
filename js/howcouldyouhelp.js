$(document).ready(function() {
  $(".more").click(function() {
    $(".back").addClass("active");
    $(".front").removeClass("active");
  });
  $(".go-back").click(function() {
    $(".back").removeClass("active");
    $(".front").addClass("active");
  });
});
// from here tooltip and payment 
$(function(){
  $(document).keypress(function(e) {
    cwrite(e.which,'Keypress event');
    if(e.which==120) custom_dialog_toggle('Keypress x','You opened this window by pressing x');
  });
});
function custom_dialog_toggle(title,text,buttons) {
  if(typeof title !=='undefined') $('#dlg-header').html(title);
  if(typeof text !=='undefined') $('#dlg-content').html(text);
  cwrite('Current state: '+$('#dialog_state').prop("checked"),'custom_dialog_toggle');
  $('#dialog_state').prop("checked", !$('#dialog_state').prop("checked"));
}
// Console logging function for debugging
// cwrite(str, title)
//      str:              string to be appended to console
//      title (optional): title of the string
// (c)  Tuomas Hatakka 2015
//      http://tuomashatakka.fi
function cwrite(str,title) {
  var ce = $('#console');
  var sg = "<p>";
  if(typeof title !=='undefined') sg = sg+"<em>"+title+"</em> ";
  sg = sg+str+"</p>";
  ce.prepend(sg);
  //if(ce.children("p").length>6) ce.children("p").first().remove();
}
// tooltip
// tooltip_1

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
// tooltip_2

function myFunction_1() {
  var copyText = document.getElementById("myInput_1");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip_1");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip_1");
  tooltip.innerHTML = "Copy to clipboard";
}

// tooltip_2

function myFunction_2() {
  var copyText = document.getElementById("myInput_2");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip_2");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip_2");
  tooltip.innerHTML = "Copy to clipboard";
}
// tooltip_3
function myFunction_3() {
  var copyText = document.getElementById("myInput_3");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip_3");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip_3");
  tooltip.innerHTML = "Copy to clipboard";
}