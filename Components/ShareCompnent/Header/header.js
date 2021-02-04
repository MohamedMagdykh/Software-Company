function openNav()
{
    $("#myNav").css({
        "width":"100%"
    })
    $("#hide-nav").css({
        "display":"block"
    })

}
function closeNav()
{
    $("#myNav").css({
        "width":"0%"
    })
    $("#hide-nav").css({
        "display":"none"
    })

}
$(function(){
    var myVar = setInterval(myTimer, 10);
    var i =1
    function myTimer(){
        i++
       
        if (localStorage.getItem("lang") == null) 
        {
            console("ee")
            $(".ar").show()
            $(".en").hide()
            document.documentElement.style.setProperty("--direction", "ltr")
            document.documentElement.style.setProperty("--display", "block")

            $(".closebtn").css({
                "left": "20%",
                

            })

           
            localStorage.setItem("lang", "en");
            $("[data-localize]").localize("../mylanguage",{language:localStorage.getItem("lang")})
            // console.log("1")

         }
         if(localStorage.getItem("lang") != null){
             if(localStorage.getItem("lang")=="en"){
                //  console.log("2")
                $(".ar").show()
                $(".en").hide()
                document.documentElement.style.setProperty("--direction", "ltr")
                document.documentElement.style.setProperty("--display", "block")

                $(".closebtn").css({
                    "left": "20%",
                  
    
                })



             }
             if(localStorage.getItem("lang")=="ar"){
                // console.log("3")
                $(".ar").hide()
                $(".en").show()
                document.documentElement.style.setProperty("--direction", "rtl")
                document.documentElement.style.setProperty("--display", "flex")

                $(".closebtn").css({
                    "left": "80%",
                    
    
                })
                 
            }
            $("[data-localize]").localize("../mylanguage",{language:localStorage.getItem("lang")})

         }
       
        
      
      
       $(".translate").on("click",function(){
           if($(this).attr("id")=="ar"){
            $(".en").show()
            $(".ar").hide()
            document.documentElement.style.setProperty("--direction", "rtl")
            document.documentElement.style.setProperty("--display", "flex")

            $(".closebtn").css({
                "left": "80%",
                

            })


           }
           if($(this).attr("id")=="en"){
            $(".en").hide()
            $(".ar").show()
            document.documentElement.style.setProperty("--direction", "ltr")
            document.documentElement.style.setProperty("--display", "block")

            $(".closebtn").css({
                "left": "20%",
                

            })


           }
           lang = $(this).attr("id")
           localStorage.setItem("lang", lang);
        $("[data-localize]").localize("../mylanguage",{language:localStorage.getItem("lang")})
       

    })
    if(i>5)
    {
      clearInterval(myVar);
    }
 }
   
        
                  
   }); 