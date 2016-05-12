
window.onload=init;
function init()
{
	var element = document.getElementById('sub-menu-one'),
    style = window.getComputedStyle(element),
    height = style.getPropertyValue('height');
  
   /*document.getElementById("allproducts").onclick   = function(){showarrow()};
  document.getElementById("allproducts").onmouseover   = function(){showarrow()};
  document.getElementById("allproducts").onmouseout  = function(){hidearrow()};*/
  /*document.getElementById("allproducts").onclick   = function(){showall()};*/
    document.getElementById("mobile-show-nav").onclick = function(){showmobnav()};
	var t= 	document.querySelectorAll(".first-level");
	var sub= 	document.querySelectorAll(".sub-menu-allp").length;

    // document.getElementsByClassName("first-level")[0].onclick=function(){shows()};


for (var i = 0, len = t.length; i < len; i++)
{
    
    (function(index){
        t[i].onclick = function(){
         
              shows(index,len);

        }    
    })(i);
    
}


}
 function showall()
 {

 	document.getElementById("sub-menu-one").classList.toggle("showallpdesktop");
 	document.getElementsById("menu-block-id li").onclick
 	var element = document.getElementById('sub-menu-one'),
    style = window.getComputedStyle(element),
    height = style.getPropertyValue('height');
 }
 
 function shows(indexval,t)
{
 	
    
    for(var i=0; i<7;i++)
    {
      document.getElementsByClassName("selected-marker")[i].style.display = "none";
     }

    var ifArrow=document.getElementsByClassName("selected-marker")[indexval].style.display;
    if(ifArrow=="block")
   {
      
      document.getElementsByClassName("selected-marker")[indexval].style.display = "none";
      
   }
    else(ifArrow=="none")
    {
      document.getElementsByClassName("selected-marker")[indexval].style.display = "block";
     }
     var i;
      for(i=0;i<t;i++)
      {
      	var className="showallpdesktop";
      	var elem=document.getElementsByClassName("sub-menu-allp")[i];
      	
        removeClass(elem,className,i);
      }
     //  document.getElementsByClassName("sub-menu-allp")[indexval].className += "showallpdesktop";

       document.getElementsByClassName("sub-menu-allp")[indexval].classList.toggle("showallpdesktop");
       document.getElementsByClassName("selected-marker")[indexval].style.display = "block";
   	
 }

 function removeClass(elem, className,ival) {
 	
 	console.log(elem.className);
 	var newClassName="";
 	var classNames = elem.className,
 	classArray = classNames.split(" ");
 	console.log(classArray);
 	console.log(classArray.length);
 		
 	  for(var i=0;i<classArray.length;i++)
 	  {

 	  	 console.log(classArray[i]);
 	  	  console.log(className);
          if(classArray[i]!=className)
          {
                 newClassName += classArray[i] + " ";
          }
          console.log(classArray[i]);
          console.log(newClassName);  
 	  }
 	  elem.className = newClassName;
    
 } 
    function showmobnav()
   {
     var elem=document.getElementById("menu-block-id");

    elem.classList.toggle("vertical-tabs");
    /*elem.style.display="block";*/
    var element=document.getElementById("mobile-show-nav");
    element.classList.toggle("arrow-down");
   }

   function showarrow()
  {
     document.getElementsByClassName("selected-marker")[0].style.visibility = "visible";
     var ifshown=document.getElementsByClassName("sub-menu-allp")[0].style.display;
     if(ifshown=="block")
      {
          console.log(ifshown)
          document.getElementsByClassName("sub-menu-allp")[0].style.display = "none";
       }
        else(ifshown=="none")
       {
	        alert("ifshown");
            document.getElementsByClassName("sub-menu-allp")[0].style.display = "block";
        }
   /*document.getElementsByClassName("selected-marker")[0].style.backgroundColor = "red";*/
 }


