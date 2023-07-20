//window.addEventListener('load',function(){
//  $("#header").hide();
//});
// $(window).load(function(){
//   alert('page is fully loaded')
// });

// $("body").load(function(){
//   $("#header").hide();
// })
$(".myBtn").click(function(){
  myFunction();
});
$(".myBtne").click(function(){
  stephChief();
});
$(".myBtnse").click(function(){
  otheRead();
});



function myFunction() {
  var dots = $(".dots");
  var moreText = $(".more");
  var btnText = $(".myBtn");

  if ($(".dots").css("display") === "none") {
    $(".dots").css("display","inline");
    $(".myBtn").html("Read more");
    $(".more").css("display", "none");
  } else {
    $(".dots").css("display", "none");
    $(".myBtn").html("Read less");
    $(".more").css("display", "inline");
  }
}

function stephChief(){
  var dor = $(".dotse");
  var cor = $(".moree");
  var bor = $(".myBtne");

  if ($(".dotse").css("display") === "none") {
    $(".dotse").css("display","inline");
    $(".myBtne").html("Read more");
    $(".moree").css("display", "none");
  } else {
    $(".dotse").css("display", "none");
    $(".myBtne").html("Read less");
    $(".moree").css("display", "inline");
  }
}

function otheRead(){
  var dor = $(".dotsse");
  var cor = $(".morese");
  var bor = $(".myBtnse");

  if ($(".dotsse").css("display") === "none") {
    $(".dotsse").css("display","inline");
    $(".myBtnse").html("Read more");
    $(".morese").css("display", "none");
  } else {
    $(".dotsse").css("display", "none");
    $(".myBtnse").html("Read less");
    $(".morese").css("display", "inline");
  }
}



$(".white").click(function(){
  $("#header").slideDown(1000);
  timeOutWhite();
});

$(".dark").click(function(){
  $("#header").slideUp(1000);
  timeOutDark();
});

function timeOutWhite(){
  
  let ativeButton= $(".white");
  ativeButton.addClass("pressed")
  setTimeout(function(){$(ativeButton).removeClass("pressed");}, 100 );
}

function timeOutDark(){

  let actobutton= $(".dark");
  actobutton.addClass("pressed");
  setTimeout(function(){$(actobutton).removeClass("pressed");}, 100 );
}

