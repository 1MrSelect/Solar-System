$(function(){
  
  var lastUp = true;
  
  function animate(callback)
  {
    if ($("#popup").css("display") === "none")
   {
       $("#popup").toggle(function(){
         $("#content").slideToggle();
       });
       
   }
    else
    {
      $("#content").slideToggle(function(){
        $("#popup").toggle();
      });
    }
  }
  function toSun(){
    
  }
  
  function toMars(){
    
  }
  
  
  $("#popup").hide();
  $("#content").slideToggle();
  
   $("#sun").click(function(){
     animate(toSun());
     $("#header").text("PLUTO");
     $("#content p").html("<b>Mass:</b> 0.00218 times the earth. <br>Gravity: 1/12th the strength of earth's. <br> Atmosphere: Has a nitrogen atmosphere that it is slowly loosing.<br>Orbit Period: 249 earth years.<br>Planet Day: 6.39 earth days.<br>Fun Fact: It is the second largest dwarf planet. It is one thrid frozen water.");
});


$("#mars").click(function(){
     animate(toMars(){
     $("#header").text("MARS");
     $("#content p").html("<b>Mass:</b> 0.1x<br><b>Gravity:</b> 0.38x<br><b>Atmosphere:</b> 95% carbon dioxide, 3% nitrogen, 2% etc.<br><b>Orbit Period:</b> 687 days<br><b>Planet Day:</b> 1 day 40 mins<br><b>Fun Fact:</b> Mars has carbon dioxide snow clouds.");
     });
    });
});




//  $("#content").slideToggle(function(){
// //       $("#popup").toggle();
// //     });
// //     $("#content p").text("HAHA NEW CONTENT PEOPLE");