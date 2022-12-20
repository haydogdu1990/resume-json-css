function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  let sayac=0;
function myStyle() {
    let cssStyle=document.getElementById("cssStyle");
    
    console.log(sayac);
    if(sayac==0){
        sayac=1;
        cssStyle.href="style2.css";
        
    }
    else if(sayac==1){
      sayac=2;
      cssStyle.href="style3.css";
      
  }
    else{
        sayac=0;
        cssStyle.href="style.css";
        
    }
    
    
  }

  


let informations=document.getElementsByClassName("informations")[0];



const data=fetch("resume.json")
.then(response=>response.json())
.then(resume=>{
    

    var user = resume.basics;

  

    document.getElementById("myImg").src = user.image;
    document.getElementById("name").innerHTML = user.name;
    document.getElementById("label").innerHTML = user.label;

    document.getElementById("location").innerHTML = user.location.city+", "+user.location.countryCode;
    document.getElementById("email").innerHTML = user.email;
    document.getElementById("email").href="mailto:"+user.email;

    document.getElementById("twitter").href=user.profiles.twitter.url;
    document.getElementById("github").href=user.profiles.github.url;
    document.getElementById("linkedin").href=user.profiles.linkedin.url;

    document.getElementById("name2").innerHTML = user.name;

    document.getElementById("summary").innerHTML = user.summary;
   
})






//https://www.youtube.com/watch?v=UkB-zKNBVTo&list=PLv1CRNciwsrf_DA7Yl3_kdsqYjbjbMB8r&index=3



