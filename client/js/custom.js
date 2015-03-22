// Load bower-installed libraries. Don't remove this

var revapi;

  $(window).ready(function () {

     jQuery(document).ready(function() {
           revapi = jQuery('.tp-banner').revolution(
        {
            delay:15000,
            startwidth:1170,
            startheight:500,
            hideThumbs:10,
            fullWidth:"off",
            fullScreen:"on",
            fullScreenOffsetContainer: ""

        });
 
   });
    console.log('Hello from Javascript');
  });


