function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
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

  


let skillsHtml=document.getElementsByClassName("skillsHtml")[0];

let worksHtml=document.getElementsByClassName("worksHtml")[0];
let educationHtml=document.getElementsByClassName("educationHtml")[0];

const data=fetch("resume.json")
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

    document.getElementById("twitter").href=user.profiles.twitter.url;
    document.getElementById("github").href=user.profiles.github.url;
    document.getElementById("linkedin").href=user.profiles.linkedin.url;

   

    document.getElementById("summary").innerHTML = user.summary;


    let skills=resume.skills;
    for(let i in skills){
      let list=skills[i];
      skillsHtml.innerHTML +=`<hr>`;
      
      skillsHtml.innerHTML +=`<h3>${list.situation}</h3>`;
      //skillsHtml.innerHTML +=`<span>${list.level}</span>`;
      //skillsHtml.innerHTML +=`<span>${" "+list.name}</span>`;
      //display: flex;
      //flex-wrap: wrap;

      
      
      for(let j in list.keywords){
        
        skillsHtml.innerHTML +=`<span class="skills" style="display: inline-block;">${list.keywords[j]}</span>`;

      }
      
      
     
     

    } 

  let works=resume.work;
  for(let i in works){
    let list=works[i];
        
    worksHtml.innerHTML +=`<hr>`;
    worksHtml.innerHTML +=`<h3>${list.position} - ${list.name}</h3>`;
    
    worksHtml.innerHTML +=`<span class="worksSpan">${list.startDate} - ${list.location}</span>`;
    
    
    worksHtml.innerHTML +=`<p>${list.summary}</p>`;

    

}

//educationHtml studyType

let education=resume.education;

educationHtml.innerHTML +=`<h3>${education[0].institution}</h3>`;
  educationHtml.innerHTML +=`<h4>${education[0].area} (${education[0].studyType}) </h4>`;
  educationHtml.innerHTML +=`<p class="worksSpan">(${education[0].startDate}-${education[0].endDate})</p>`;



   
})






//https://www.youtube.com/watch?v=UkB-zKNBVTo&list=PLv1CRNciwsrf_DA7Yl3_kdsqYjbjbMB8r&index=3



