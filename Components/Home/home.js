

    particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 500
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 8
            },
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 0.1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 10,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
      $(document).scroll(function(){
         
     
        if(window.pageYOffset>= 57 ){
            $("#navbarcolor").css({
                "background":"rgb(78, 175, 180)"
            })
          }
          if(window.pageYOffset<= 56  )
          {
            $("#navbarcolor").css({
                "background":"none",
                "border-bottom": "1px solid rgba(255,255,255,.3)"
            })  
        
        }
          
    
 

      })
      $(document).ready(function(){
        setTimeout(() => {
            if(window.pageYOffset>= 57 ){
           
                $("#navbarcolor").css({
                    "background":"rgb(78, 175, 180)"
                })
              }
              if(window.pageYOffset<= 56  )
              {
                $("#navbarcolor").css({
                    "background":"none",
                    "border-bottom": "1px solid rgba(255,255,255,.3)"
                })  
            
            }
                
        }, 100);
        setTimeout(() => {
      

       
          if (localStorage.getItem("lang") == null) 
          {
              $("#ar").show()
              $("#en").hide()
              document.documentElement.style.setProperty("--direction", "ltr")
              document.documentElement.style.setProperty("--display", "block")
              $("#s5Text").removeClass("ArTextS5");
              $(".s5li").removeClass("ArliS5");
              localStorage.setItem("lang", "en");
              $("[data-localize]").localize("../mylanguage",{language:localStorage.getItem("lang")})
              // console.log("1")
  
           }
           if(localStorage.getItem("lang") != null){
               if(localStorage.getItem("lang")=="en"){
                  //  console.log("2")
                  $("#ar").show()
                  $("#en").hide()
                  document.documentElement.style.setProperty("--direction", "ltr")
                  document.documentElement.style.setProperty("--display", "block")
                  localStorage.setItem("lang", "en");
                  $("#s5Text").removeClass("ArTextS5");
                  $(".s5li").removeClass("ArliS5");
  
                 
  
  
  
               }
               if(localStorage.getItem("lang")=="ar"){
                  // console.log("3")
                  $("#ar").hide()
                  $("#en").show()
                  document.documentElement.style.setProperty("--direction", "rtl")
                  document.documentElement.style.setProperty("--display", "flex")
                  $("#s5Text").addClass("ArTextS5");
                  $(".s5li").addClass("ArliS5");
  
                 
                   
              }
              $("[data-localize]").localize("../mylanguage",{language:localStorage.getItem("lang")})
  
           }
         
          
        
        
         $(".translate").on("click",function(){
             if($(this).attr("id")=="ar"){
              $("#en").show()
              $("#ar").hide()
              document.documentElement.style.setProperty("--direction", "rtl")
              document.documentElement.style.setProperty("--display", "flex")
              $("#s5Text").addClass("ArTextS5");
              $(".s5li").addClass("ArliS5");
  
  
  
             }
             if($(this).attr("id")=="en"){
              $("#en").hide()
              $("#ar").show()
              document.documentElement.style.setProperty("--direction", "ltr")
              document.documentElement.style.setProperty("--display", "block")
              $("#s5Text").removeClass("ArTextS5");
              $(".s5li").removeClass("ArliS5");
  
  
  
             }
             lang = $(this).attr("id")
             localStorage.setItem("lang", lang);
          $("[data-localize]").localize("../mylanguage",{language:localStorage.getItem("lang")})
         
  
      })
      }, 100);
     
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:1500,
            autoplayHoverPause:true,
            responsiveClass:true,
            responsive:{
              0:{
                  items:1,
              },
              500:{
                  items:2,
              },
              1370:{
                  items:3,
                
              }
          }
        });


      })
      $( window ).resize(function() {
        
        if($( window ).width() <1200)
        {
          $(".photoLand").css({
            "margin-top":"0%"
          })
        }
        if($( window ).width() >=1200)
        {
          $(".photoLand").css({
            "margin-top":"20%"
          })
        }
        if($( window ).width() <1378)
        {
          
        }
        if($( window ).width() >=1200)
        {
         
        }
        
      });
   