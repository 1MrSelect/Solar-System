$(function(){
  
//   var lastClick;
//   var lastDir = "up";
  
  
//   function animate(callback)
//   {
//     if ($("#popup").css("display") === "none")
//    {
//        callback();
//        $("#popup").toggle(function(){
//          $("#content").slideDown();
//          lastDir = 'down';
//        });
//    }
//     else
//     {
//       $("#content").slideUp(function(){
//         $("#popup").toggle();
//         lastDir = "up";
//       });
//       callback();
//     }
//   }
//   function toSun(){
//     $("#header").html("PLUTO");
//      $("#content p").html("<b>Mass:</b> 0.00218 times the earth. <br>Gravity: 1/12th the strength of earth's. <br> Atmosphere: Has a nitrogen atmosphere that it is slowly loosing.<br>Orbit Period: 249 earth years.<br>Planet Day: 6.39 earth days.<br>Fun Fact: It is the second largest dwarf planet. It is one thrid frozen water.");
//   }
  
//   function toMars(){
//      $("#header").html("MARS");
//      $("#content p").html("<b>Mass:</b> 0.1x<br><b>Gravity:</b> 0.38x<br><b>Atmosphere:</b> 95% carbon dioxide, 3% nitrogen, 2% etc.<br><b>Orbit Period:</b> 687 days<br><b>Planet Day:</b> 1 day 40 mins<br><b>Fun Fact:</b> Mars has carbon dioxide snow clouds.");
//   }
  
  
//   $("#popup").hide();
//   $("#content").slideToggle();
  
//    $("#sun").click(function(){
//      if (lastClick === undefined || lastClick === "sun" || lastDir === 'up')
//      {
//        animate(toSun);
       
//      }
//      else
//      {
//        toSun();
//      }
     
//      lastClick = "sun";
     
// });


// $("#mars").click(function(){
//     if (lastClick === undefined || lastClick === "mars" || lastDir === 'up')
//      {
//        animate(toMars);
//      }
//      else
//      {
//        toMars();
//      }
//      lastClick = "mars";
// });

  //FIGURE OUT HOW TO START!!!!!
  
  
//   var lastClick = "mars";
//   var clicked = "sun";
  
//   var planets = ["mars","sun","neptune"];
  
//   var mars = false;
//   var sun = false;
//   var neptune = false;
  
//   function marstext()
//   {
//     $("#content").html("I LIKE THE CHICKEN MUCH"); 
//   }
//   function suntext()
//   {
//     $("#content").html("SUNNY D"); 
//   }
//   function neptunetext()
//   {
//     $("#content").html("THE GOD OF THE SEA"); 
//   }
  
// //   store states in object store states in 

  
//   $("#mars").click(function(){
//     clicked = "mars";
//   });
  
//   $("#sun").click(function(){
//     clicked = "sun";
//   });
  
//   $("#neptune").click(function(){
//     clicked = "neptune";
//   });

  
//   function animate()
//   {
//     if(lastClick === clicked)
//     {
//       eval(clicked + " = !" + clicked);
//     }
//     else
//     {
//       eval(clicked + " = !" + clicked);
//       eval(lastClick + " = !" + lastClick);
//     }
    
//     console.log(clicked);
//     console.log("sun " + sun);
//     console.log("mars " + mars);
//     console.log("neptune " +neptune);
//     console.log("");
    
//     var holder;
//     for (i=0;i<planets.length;i++)
//     {
//      holder = planets[i];
//       if(eval(holder))
//       {
//         //CHANGE THE CONTENT TEXT AND BRING DOWN
//         eval(holder+"text()");
//         $("#popup").show(function(){
//           $("#content").slideDown();
//         });
//         console.log("BROUGHT DOWN");
//       }
//       else
//       {
//         //PULL UP
//         $("#content").slideUp(function(){
//         $("#popup").hide();
//         });
//       }
//     }
//     lastClick = clicked;
//   }
  
//   $("#planets").click(function(){
//      animate();
//   });

  
  $("#sun").click(function(){
    $("#header").html("SUN");
    $("#content").html("<br>WHY DONT WE GO TO THE SUN AT NIGHT, IT WILL BE COOL THEN.");
  });
  
  $("#mercury").click(function(){
    $("#header").html("MERCURY");
    $("#content").html("<br><span>Mass:</span> 10% of earth's mass<br><span>Gravity:</span> 37% of earth’s<br><span>Atmosphere:</span> Mercury's atmosphere contains small amounts of hydrogen, helium, and oxygen<br><span>Orbit Period:</span> 58d 15h 30m <br><span>Planet Day:</span> 88 days<br><span>Not so fun fact:</span> Mercury is the smallest planet in the Solar System");
  });
  
  $("#venus").click(function(){
    $("#header").html("VENUS");
    $("#content").html("<br><span>Mass:</span> 81%<br><span>Gravity:</span> 90%<br><span>Atmosphere:</span>The atmosphere of Venus is very thick and is about 90 times more massive than Earth's atmosphere. It is mostly carbon dioxide gas<br><span>Orbit Period:</span> 225 days<br><span>Planet Day:</span>116d 18h<br><span>Not so fun fact:</span>Venus is so bright it is sometimes mistaken for a UFO");
  });
  
  $("#earth").click(function(){
    $("#header").html("EARTH");
    $("#content").html("<span>Touch The SKY- Kanye West</span>");
  });
  
  $("#mars").click(function(){
    $("#header").html("MARS");
    $("#content").html("<br><span>Mass:</span> 0.1x<br><span>Gravity:</span> 0.38x<br><span>Atmosphere:</span> 95% carbon dioxide, 3% nitrogen, 2% etc.<br><span>Orbit Period:</span> 687 days<br><span>Planet Day:</span> 1 day 40 mins<br><span>Fun Fact:</span> Mars has carbon dioxide snow clouds.");
  });
  
  $("#jupiter").click(function(){
    $("#header").html("JUPITER");
    $("#content").html("<br><span>Mass:</span> 317x<br><span>Gravity:</span>  2.4x<br><span>Atmosphere:</span> 90% hydrogen 10% helium<br><span>Orbit Period:</span> 12 years<br><span>Planet Day:</span> 9.8 hours<br><span>Not so fun fact:</span>  Inside it’s atmosphere temperatures of around 70 degrees can be found.");
  });
  
   $("#saturn").click(function(){
    $("#header").html("SATURN");
    $("#content").html("<br><span>Mass:</span> 17x<br><span>Gravity:</span> 1.06x<br><span>Atmosphere:</span> Saturn is made up approximately 75% hydrogen and 25% helium<br><span>Orbit Period:</span> 29 years.<br><span>Planet Day:</span> 10 hours.<br><span>Not so fun fact:</span> It’s ring is made out of ice chunks.");
  });
  
  
  
  
  $("#uranus").click(function(){
    $("#header").html("URANUS");
    $("#content").html("<br><span>Mass:</span> 15x<br><span>Gravity:</span> 0.9 of earth.<br><span>Atmosphere:</span> Gas, the blue color is from methane.<br><span>Orbit Period:</span> 21 years.<br><span>Planet Day:</span> 17 hours 15 minutes<br><span>Not so fun fact:</span> Because of it's tilt Uranus's seasons take 20 years.");
  });
  
  
  $("#neptune").click(function(){
    $("#header").html("NEPTUNE");
    $("#content").html("<br><span>Mass:</span> 17x<br><span>Gravity:</span> 1.2x<br><span>Atmosphere:</span> Neptune's atmosphere is made up predominantly of hydrogen and helium, with some methane. Methane makes it blue.<br><span>Orbit Period:</span> 165 years<br><span>Planet Day:</span> 16 hours.<br><span>Fun Fact:</span> Neptune's winds can reach 700 mph.");
  });
  
  $("#pluto").click(function(){
    $("#header").html("PLUTO");
    $("#content").html("<br><span>Mass:</span> 0.00218 times the earth.<br><span>Gravity:</span> 1/12th the strength of earth's.<br><span>Atmosphere:</span> Has a nitrogen atmosphere that it is slowly loosing.<br><span>Orbit Period:</span> 249 earth years.<br><span>Planet Day:</span> 6.39 earth days.<br><span>Not so fun fact:</span> It is the second largest dwarf planet. It is one third frozen water.");
  });
  
  
/*
if click = lastclick
  invert click
else 
  invert click
  invert lastclick

*/
 
  
  
  
});