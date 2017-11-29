$(document).ready(function() {

        $("#nav-about").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#about"), 1000);
        });
        $("#nav-courses").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#courses"), 1000);
        });
        $("#nav-contact").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#contact"), 1000);
        });
          
      });