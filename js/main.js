$(document).ready(function(){
// These functions load the content for the work area of the site.
// Music
  $("#sunkillmoon").click(function(){
    $("#content_right").load("music.html #sunkillmoon > *");
  });
  $("#openmouth").click(function(){
    $("#content_right").load("music.html #openmouth > *");
  });
  $("#soundscore").click(function(){
    $("#content_right").load("music.html #soundscore > *");
  });

// Video
  $("#jamesmanuele").click(function(){
    $("#content_right").load("video.html #jamesmanuele > *");
  });
  $("#omsi").click(function(){
    $("#content_right").load("video.html #omsi > *");
  });
  $("#soundscore").click(function(){
    $("#content_right").load("video.html #soundscore > *");
  });

// Websites
  $("#pdxguitarduo").click(function(){
    $("#content_right").load("websites.html #pdxguitarduo > *");
  });
  $("#martians").click(function(){
    $("#content_right").load("websites.html #martians > *");
  });
  $("#transpoetica").click(function(){
    $("#content_right").load("websites.html #transpoetica > *");
  });

// Graphic Design
  $("#pdxguitarduo_logo").click(function(){
    $("#content_right").load("design.html #pdxguitarduo_logo > *");
  });
  $("#h2baf_logo").click(function(){
    $("#content_right").load("design.html #h2baf_logo > *");
  });
  $("#pdx_recordings").click(function(){
    $("#content_right").load("design.html #pdx_recordings > *");
  });
});

function preload(images) {
    if (document.images) {
        var i = 0;
        var imageArray = new Array();
        imageArray = images.split(',');
        var imageObj = new Image();
        for(i=0; i<=imageArray.length-1; i++) {
            //document.write('<h3>poop</h3><img src="img/me.jpg""' + imageArray[i] + '" />');// Write to page (uncomment to check images)
            imageObj.src=imageArray[i];
        }
    }
}

