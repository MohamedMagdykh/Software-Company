
$(document).ready(function(){  
    setTimeout(() => {

        $(".servicesBtn").click(function() {
            document.querySelector('.servicesBtn').scrollIntoView({ 
                behavior: 'smooth' 
              });
        
        });

  
      
        
    }, 1000);
    
    var myVar = setInterval(myTimer, 100);
    var i = 1
    function myTimer(){

       
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
    if(i>3)
    {
      clearInterval(myVar);
    }
}
 
  });
 