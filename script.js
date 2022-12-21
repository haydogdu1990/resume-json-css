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

  


let skillsHtml=document.getElementsByClassName("skillsHtml")[0];
let worksHtml=document.getElementsByClassName("worksHtml")[0];
let educationHtml=document.getElementsByClassName("educationHtml")[0];

const data=fetch("resume.json")
.then(response=>response.json())
.then(resume=>{
    

    let user = resume.basics;

    

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


    let skills=resume.skills;
    for(let i in skills){
      let list=skills[i];
      
      skillsHtml.innerHTML +=`<h3>${list.situation}</h3>`;
      //skillsHtml.innerHTML +=`<span>${list.level}</span>`;
      //skillsHtml.innerHTML +=`<span>${" "+list.name}</span>`;


      console.log();
      for(let j in list.keywords){
        
        skillsHtml.innerHTML +=`<span class="skills">${list.keywords[j]}</span>`;

      }

      
      skillsHtml.innerHTML +=`<hr>`;

  }

  let works=resume.work;
  for(let i in works){
    let list=works[i];
        
    
    worksHtml.innerHTML +=`<h3>${list.position} - ${list.name}</h3>`;
    
    worksHtml.innerHTML +=`<span class="worksSpan">${list.startDate} - ${list.location}</span>`;
    
    
    worksHtml.innerHTML +=`<p>${list.summary}</p>`;

    worksHtml.innerHTML +=`<hr>`;

}

//educationHtml studyType

let education=resume.education;

educationHtml.innerHTML +=`<h3>${education[0].institution}</h3>`;
  educationHtml.innerHTML +=`<h4>${education[0].area} (${education[0].studyType}) </h4>`;
  educationHtml.innerHTML +=`<p class="worksSpan">(${education[0].startDate}-${education[0].endDate})</p>`;



   
})






//https://www.youtube.com/watch?v=UkB-zKNBVTo&list=PLv1CRNciwsrf_DA7Yl3_kdsqYjbjbMB8r&index=3



