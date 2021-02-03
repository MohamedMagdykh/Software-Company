$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
   
        
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:false,
        responsiveClass:true,
        slideTransition: 'linear',
        autoplaySpeed: 3000,
        responsive:{
          0:{
              items:1,
          },
          500:{
              items:1,
          },
          800:{
              items:3,
              
          },
          1370:{
            items:5,
            
        }
      }
    });
    setTimeout(() => {
      

       
        if (localStorage.getItem("lang") == null) 
        {
            $("#ar").show()
            $("#en").hide()
            document.documentElement.style.setProperty("--direction", "ltr")
            document.documentElement.style.setProperty("--display", "block")
            document.documentElement.style.setProperty("--textaligen", "left")
            document.documentElement.style.setProperty("--padingright", "30px")
             
             
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
                document.documentElement.style.setProperty("--textaligen", "left")
                localStorage.setItem("lang", "en");
                document.documentElement.style.setProperty("--padingright", "30px")
                 
                 

               



             }
             if(localStorage.getItem("lang")=="ar"){
                // console.log("3")
                $("#ar").hide()
                $("#en").show()
                document.documentElement.style.setProperty("--direction", "rtl")
                document.documentElement.style.setProperty("--textaligen", "right")
                document.documentElement.style.setProperty("--display", "flex")
                document.documentElement.style.setProperty("--padingright", "0px")
                
                 

               
                 
            }
            $("[data-localize]").localize("../mylanguage",{language:localStorage.getItem("lang")})

         }
       
        
      
      
       $(".translate").on("click",function(){
           if($(this).attr("id")=="ar"){
            $("#en").show()
            $("#ar").hide()
            document.documentElement.style.setProperty("--direction", "rtl")
            document.documentElement.style.setProperty("--textaligen", "right")
            document.documentElement.style.setProperty("--display", "flex")
            document.documentElement.style.setProperty("--padingright", "0px")
            
             



           }
           if($(this).attr("id")=="en"){
            $("#en").hide()
            $("#ar").show()
            document.documentElement.style.setProperty("--direction", "ltr")
            document.documentElement.style.setProperty("--textaligen", "left")
            document.documentElement.style.setProperty("--display", "block")
            document.documentElement.style.setProperty("--padingright", "30px")
             
             



           }
           lang = $(this).attr("id")
           localStorage.setItem("lang", lang);
        $("[data-localize]").localize("../mylanguage",{language:localStorage.getItem("lang")})
       

    })
    }, 100);
})
