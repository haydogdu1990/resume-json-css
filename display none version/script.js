function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function active(id) {
    console.log(id);
    var activex = document.getElementById(id);

      document.getElementById("home").className= "";
      document.getElementById("topnav1").className= "";
      document.getElementById("topnav2").className= "";
      document.getElementById("topnav3").className= "";
      document.getElementById("topnav4").className= "";
      document.getElementById("topnav5").className= "";
    
    if (activex.className === "") {

      activex.className = "active";
    } else {
      activex.className = "";
    }
  }

  let ho=true;
  let su=false;
  let sk=false;
  let re=false;
  let wo=false;
  let ed=false;
  





  function hideFunc(id) {
    
    
    
    
    document.getElementById("all").className= "none";
    
    if(id=="home" && ho){
      document.getElementById("c1").style.display="none";
      
      ho=false;
      console.log("kapat");
    } 
    else if(id=="home" && !ho){
      document.getElementById("c1").style.display="block";
      document.getElementById("home").className= "active";

     
      document.getElementById("topnav1").className= "";
      document.getElementById("topnav2").className= "";
      document.getElementById("topnav3").className= "";
      document.getElementById("topnav4").className= "";
      document.getElementById("topnav5").className= "";

      document.getElementById("summaryH").style.display="none";
      document.getElementById("skills").style.display="none";
      document.getElementById("repository").style.display="none";
      document.getElementById("works").style.display="none";
      document.getElementById("education").style.display="none";
      
      ho=true;
      su=false;
      sk=false;
      re=false;
      wo=false;
      ed=false;



      console.log("aç");
    }
    else{

    }

    if(id=="topnav1" && su){
      document.getElementById("summaryH").style.display="none";
      
      su=false;
    } 
    else if(id=="topnav1" && !su){
      document.getElementById("summaryH").style.display="block";

      document.getElementById("home").className= "";
      document.getElementById("topnav1").className= "active";
      document.getElementById("topnav2").className= "";
      document.getElementById("topnav3").className= "";
      document.getElementById("topnav4").className= "";
      document.getElementById("topnav5").className= "";

      document.getElementById("c1").style.display="none";
      
      document.getElementById("skills").style.display="none";
      document.getElementById("repository").style.display="none";
      document.getElementById("works").style.display="none";
      document.getElementById("education").style.display="none";
      su=true;
      ho=false;
      
      sk=false;
      re=false;
      wo=false;
      ed=false;
    }
    else{

    }

    if(id=="topnav2" && sk){
      document.getElementById("skills").style.display="none";
      
      sk=false;
    } 
    else if(id=="topnav2" && !sk){
      document.getElementById("skills").style.display="block";

      document.getElementById("home").className= "";
      document.getElementById("topnav1").className= "";
      document.getElementById("topnav2").className= "active";
      document.getElementById("topnav3").className= "";
      document.getElementById("topnav4").className= "";
      document.getElementById("topnav5").className= "";

      document.getElementById("c1").style.display="none";
      document.getElementById("summaryH").style.display="none";
      document.getElementById("repository").style.display="none";
      document.getElementById("works").style.display="none";
      document.getElementById("education").style.display="none";
      sk=true;
      ho=false;
      su=false;
      
      re=false;
      wo=false;
      ed=false;
    }
    else{

    }


    if(id=="topnav3" && re){
      document.getElementById("repository").style.display="none";
      
      re=false;
    } 
    else if(id=="topnav3" && !re){
      document.getElementById("repository").style.display="block";

      document.getElementById("home").className= "";
      document.getElementById("topnav1").className= "";
      document.getElementById("topnav2").className= "";
      document.getElementById("topnav3").className= "active";
      document.getElementById("topnav4").className= "";
      document.getElementById("topnav5").className= "";

      document.getElementById("c1").style.display="none";
      document.getElementById("summaryH").style.display="none";
      document.getElementById("skills").style.display="none";
      document.getElementById("works").style.display="none";
      document.getElementById("education").style.display="none";
      re=true;
      ho=false;
      su=false;
      sk=false;
      
      wo=false;
      ed=false;
    }
    else{

    }

    if(id=="topnav4" && wo){
      document.getElementById("works").style.display="none";
      
      wo=false;
    } 
    else if(id=="topnav4" && !wo){
      document.getElementById("works").style.display="block";

      document.getElementById("home").className= "";
      document.getElementById("topnav1").className= "";
      document.getElementById("topnav2").className= "";
      document.getElementById("topnav3").className= "";
      document.getElementById("topnav4").className= "active";
      document.getElementById("topnav5").className= "";

      document.getElementById("c1").style.display="none";
      document.getElementById("summaryH").style.display="none";
      document.getElementById("skills").style.display="none";
      document.getElementById("repository").style.display="none";
      document.getElementById("education").style.display="none";
      wo=true;
      ho=false;
      su=false;
      sk=false;
      re=false;
      
      ed=false;
    }
    else{

    }


    if(id=="topnav5" && ed){
      document.getElementById("education").style.display="none";
      
      ed=false;
    } 
    else if(id=="topnav5" && !ed){
      document.getElementById("education").style.display="block";

      document.getElementById("home").className= "";
      document.getElementById("topnav1").className= "";
      document.getElementById("topnav2").className= "";
      document.getElementById("topnav3").className= "";
      document.getElementById("topnav4").className= "";
      document.getElementById("topnav5").className= "active";

      document.getElementById("c1").style.display="none";
      document.getElementById("summaryH").style.display="none";
      document.getElementById("skills").style.display="none";
      document.getElementById("repository").style.display="none";
      document.getElementById("works").style.display="none";
      ed=true;
      ho=false;
      su=false;
      sk=false;
      re=false;
      wo=false;
      
    }
    else{

    }

    console.log("ho "+ho);
    console.log("su "+su);
    console.log("sk "+sk);
    console.log("re "+re);
    console.log("wo "+wo);
    console.log("ed "+ed);
    console.log("------");
    console.log((!ho && !su && !sk && !re && !wo && !ed));
    


    if((!ho && !su && !sk && !re && !wo && !ed)||id=="all"){

    console.log("dd");
      document.getElementById("c1").style.display="block";
      document.getElementById("summaryH").style.display="block";
      document.getElementById("skills").style.display="block";
      document.getElementById("repository").style.display="block";
      document.getElementById("works").style.display="block";
      document.getElementById("education").style.display="block";

      document.getElementById("home").className= "active";
      document.getElementById("topnav1").className= "active";
      document.getElementById("topnav2").className= "active";
      document.getElementById("topnav3").className= "active";
      document.getElementById("topnav4").className= "active";
      document.getElementById("topnav5").className= "active";
      document.getElementById("all").className= "active";

    }


    
   




    
  }



  // Get the button
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  



  
  let sayac=2;

function myStyle() {
    let cssStyle=document.getElementById("cssStyle");
    
    console.log(sayac);
    if(sayac==0){
        sayac=1;
        cssStyle.href="style5.css";
        
    }
    
  
else if(sayac==1){
  sayac=2;
  cssStyle.href="style6.css";
  
}

    else{
        sayac=0;
        cssStyle.href="style4.css";
        
    }
    
    
  }

  


let skillsHtml=document.getElementsByClassName("skillsHtml")[0];

let worksHtml=document.getElementsByClassName("worksHtml")[0];
let educationHtml=document.getElementsByClassName("educationHtml")[0];
let interestsHtml=document.getElementsByClassName("interestsHtml")[0];
let repositoryHtml=document.getElementsByClassName("repositoryHtml")[0];

let resume="resume.json";
const data=fetch(resume)
.then(response=>response.json())
.then(resume=>{
    

    let user = resume.basics;

    

    document.getElementById("myImg").src = user.image;
    document.getElementById("name").innerHTML = user.name;

    document.getElementById("home").innerHTML = user.name;
    
    
    document.getElementById("label").innerHTML = user.label;

    document.getElementById("location").innerHTML = user.location.city+", "+user.location.countryCode;
    document.getElementById("email").innerHTML = user.email;
    document.getElementById("email").href="mailto:"+user.email;

    document.getElementById("twitterHtml").href=user.profiles.twitter.url;
    document.getElementById("githubHtml").href=user.profiles.github.url;
    document.getElementById("linkedinHtml").href=user.profiles.linkedin.url;

    document.getElementById("linkedinHtml").innerHTML="in/"+user.profiles.linkedin.username;
    document.getElementById("githubHtml").innerHTML=""+user.profiles.github.username;
    document.getElementById("twitterHtml").innerHTML="@"+user.profiles.twitter.username;



   

    document.getElementById("summary").innerHTML = user.summary;


    let skills=resume.skills;
    for(let i in skills){
      let list=skills[i];
      skillsHtml.innerHTML +=`<hr>`;
      
      skillsHtml.innerHTML +=`<h4>${list.situation}</h4>`;
      //skillsHtml.innerHTML +=`<span>${list.level}</span>`;
      //skillsHtml.innerHTML +=`<span>${" "+list.name}</span>`;
      //display: flex;
      //flex-wrap: wrap;

      
      
      for(let j in list.keywords){
        
        skillsHtml.innerHTML +=`<span class="skills" style="display: inline-block;">${list.keywords[j]}</span>`;

      }
      
      
     
     

    } 

//repositoryHtml
let repository=resume.repository;

//<p style="display=inline-block; font-size: 0.7em; font-style: italic;">${repository[i].bestLang}</p>
//

for(let i in repository){

  repositoryHtml.innerHTML +=`<hr>`;
  repositoryHtml.innerHTML+=`<h3 style="display:inline-block;">${repository[i].name}</h3>`;
  repositoryHtml.innerHTML+=`<a target="_blank" href="${repository[i].link}"><span class="link" style="display:inline-block;">Go Repository <i class="fa-solid fa-arrow-up-right-from-square"></i></span></a>`;
  repositoryHtml.innerHTML+=`<a target="_blank" href="${repository[i].viewLink}"><span class="link" style="display:inline-block;">View <i class="fa-solid fa-arrow-up-right-from-square"></i></span></a>`;
  repositoryHtml.innerHTML+=`<p style=" font-size: 0.7em; font-style: italic;">${repository[i].bestLang}</p>`;

  repositoryHtml.innerHTML+=`<p>${repository[i].explanation}</p>`;
  for(let j in repository[i].tag){
    repositoryHtml.innerHTML+=`<span style="display:inline-block;">${repository[i].tag[j]}</span>`;
  }
  
  
  

  

}




    

  let works=resume.work;
  for(let i in works){
    let list=works[i];
        
    worksHtml.innerHTML +=`<hr>`;
    worksHtml.innerHTML +=`<h4>${list.position} - ${list.name}</h4>`;
    
    worksHtml.innerHTML +=`<span class="worksSpan">${list.startDate} - ${list.location}</span>`;
    
    
    worksHtml.innerHTML +=`<p>${list.summary}</p>`;

    

}

//educationHtml studyType

let education=resume.education;

educationHtml.innerHTML +=`<h3>${education[0].institution}</h3>`;
  educationHtml.innerHTML +=`<h4>${education[0].area} (${education[0].studyType}) </h4>`;
  educationHtml.innerHTML +=`<p class="worksSpan">(${education[0].startDate}-${education[0].endDate})</p>`;



//interestsHtml

let interests=resume.interests;


for(let i in interests){
  interestsHtml.innerHTML +=`<span style="display:inline-block;" class="interestsSpan">${interests[i]}</span>`;

}



   
})






//https://www.youtube.com/watch?v=UkB-zKNBVTo&list=PLv1CRNciwsrf_DA7Yl3_kdsqYjbjbMB8r&index=3



