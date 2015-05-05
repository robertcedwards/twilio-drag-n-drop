/*
 * Beginning of research about drag'n'drop user experience
 * using Jquery & Jquery UI
 *
 * 6 steps for the moment:
 * - find the draggable object with mouse reaction
 * - transform the object to a little clone (easier move)
 * - the drop zone is highlighting
 * - this zone valid the transfer with the clone
 * - ...and accept the clone
 * - the clone disappear
 *
 * every messages are usefull notification 
 *
 */

  $(function() {
    $("#drag").draggable({ 
      revert: "invalid",
      revertDuration: 200,
      cursor: "move", 
      helper: "clone",
      cursorAt: { top: 17, left: 80 },
      start: function(event, ui) {
        $('#drop')
          .removeClass("ui-highlight")
            .find("p")
              .html("Drop here");
      },
      drag: function(event, ui) {
        $('#drop')
          .addClass("ui-selected")
          .find("p")
            .html("Yes, here !");
            
       $(".ui-draggable-dragging")

         .find("p")
           .html("Let's go");

      }
    });
  
    $("#drop").droppable({
      activeClass: "ui-hover",
      hoverClass: "ui-active",
      drop: function( event, ui ) {
        $(this)
          .addClass("ui-highlight")
          .find("p")
            .html("Got it !");
            $( "#post" ).submit();
      }
    });
  });