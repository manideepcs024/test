
window.onload=init;
function init()
{
	var element = document.getElementById('sub-menu-one'),
    style = window.getComputedStyle(element),
    height = style.getPropertyValue('height');
    console.log(height)
 



	
  /*document.getElementById("allproducts").onclick   = function(){showarrow()};
 document.getElementById("allproducts").onmouseover   = function(){showarrow()};
 document.getElementById("allproducts").onmouseout  = function(){hidearrow()};*/
 document.getElementById("mobile-show-nav").onclick = function(){showmobnav()};
 /*document.getElementById("allproducts").onclick   = function(){showall()};*/
	var t= 	document.querySelectorAll(".first-level");
console.log("no of class forst level " +  t.length);
	var sub= 	document.querySelectorAll(".sub-menu-allp").length;
console.log("no of class sub menu all p  " +  sub);

// document.getElementsByClassName("first-level")[0].onclick=function(){shows()};


for (var i = 0, len = t.length; i < len; i++)
{
    
    (function(index){
        t[i].onclick = function(){
              console.log("index clicked" + index);
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
    alert(height);
 }
 function shows(indexval,t)
{
 	console.log("indexval is " + indexval)


/*for (var i = 0, len = t;  i < len; i++)
{
	alert(i);
	if(i!=indexval)
	{
 document.getElementsByClassName("sub-menu-allp")[indexval].style.display="none";
 alert("class removed from " + i );
	}


}*/

var ifshowns=document.getElementsByClassName("sub-menu-allp")[indexval].style.display;
// alert(ifshowns);
console.log("display propertty is " + ifshowns + indexval);

/*if(ifshowns=="block")
{

document.getElementsByClassName("sub-menu-allp")[0].style.display = "none";
console.log(ifshowns);
}else{
	if(ifshowns=="none"){
	document.getElementsByClassName("sub-menu-allp")[0].style.display = "block";
console.log(ifshowns);	

	}*/



 document.getElementsByClassName("sub-menu-allp")[indexval].classList.toggle("showallpdesktop");

for(var i=0; i<7;i++)
{
console.log("loopp ran " + i)
document.getElementsByClassName("selected-marker")[i].style.display = "none";
console.log("clicked index val " + indexval);
/*if(i==indexval)
{
document.getElementsByClassName("sub-menu-allp")[indexval].classList.toggle("showallpdesktop");


}else {
	if(i!==indexval)
{
if ( document.getElementsByClassName("sub-menu-allp")[i].classList.contains("showallpdesktop") )

document.getElementsByClassName("sub-menu-allp")[indexval].classList.toggle("showallpdesktop");
}

	
}*/

}
var ifshown=document.getElementsByClassName("selected-marker")[indexval].style.display;
console.log("before if " + ifshown);
if(ifshown=="block")
{
console.log(" before applied" + ifshown);
document.getElementsByClassName("selected-marker")[indexval].style.display = "none";
console.log("applied" + ifshown)
}
else(ifshown=="none")
{
	console.log(" before applied" + ifshown);
document.getElementsByClassName("selected-marker")[indexval].style.display = "block";
console.log("applied" + ifshown);
}

document.getElementsByClassName("selected-marker")[indexval].style.display = "block";
	// document.getElementsByClassName("sub-menu-allp")[indexval].className="showallpdesktop";
/* 	   var x = document.getElementById("menu-block-id").nextSibling.className; 
 	   alert(x);*/
 }
 function showmobnav()
 {
 var elem=document.getElementById("menu-block-id");
/*alert(elem);*/
elem.classList.toggle("vertical-tabs");
/*elem.style.display="block";*/
var element=document.getElementById("mobile-show-nav");

element.classList.toggle("arrow-down");
 }

function showarrow()
{
	// window.alert("Property one called");
	document.getElementsByClassName("selected-marker")[0].style.visibility = "visible";
		
/*document.getElementsByClassName("sub-menu-allp")[0].style.display = "block";*/
var ifshown=document.getElementsByClassName("sub-menu-allp")[0].style.display;

if(ifshown=="block")
{
alert(ifshown);
document.getElementsByClassName("sub-menu-allp")[0].style.display = "none";
}
else(ifshown=="none")
{
	alert("ifshown");
document.getElementsByClassName("sub-menu-allp")[0].style.display = "block";
}
/*document.getElementsByClassName("selected-marker")[0].style.backgroundColor = "red";*/
	}




function hidearrow()
{
	// window.alert("Property one called");
/*	document.getElementsByClassName("selected-marker")[0].style.visibility = "hidden";
	document.getElementsByClassName("sub-menu-allp")[0].style.display = "none";*/
/*document.getElementsByClassName("selected-marker")[0].style.backgroundColor = "red";*/
	}

