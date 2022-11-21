//Accordion expandar
let acc = document.querySelectorAll(".acc-heading");

//accordion interactivity
Array.from(acc).forEach((item)=>{
    item.addEventListener("click", function(){
        this.children[1].classList.toggle("rotation");
        this.nextElementSibling.classList.toggle("para-show");

        
    })
})

//Modal inter activites

let passInput = document.getElementById("password");

let myInput = document.querySelectorAll(".mail-pass");

myInput.forEach((item)=>{
    item.addEventListener("click", function(){
        this.children[1].classList.toggle("transit");
        console.log(this.children)
    
    })
})

let learnMore = document.querySelectorAll(".learn");
learnMore.forEach((item)=>{
    item.addEventListener("click", function(){
        document.querySelector(".privacy").innerHTML = `The information collected by Google reCAPTCHA is subject to the Google <a href="https://policies.google.com/privacy" target="_blank" class="learn">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" class="learn">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).`;
        this.style.display = "none";
    })
})

let sms = document.querySelectorAll('input[name=remember-me]');
let signingEmail = document.querySelector('input[name=email-or-phone]');
let buttonEmail = document.querySelector("button[class=email-me]")
sms.forEach((x)=>{
    x.addEventListener("change", function(){
        if(this.id =="sms"){
            console.log(buttonEmail);
            signingEmail.style.display= "none";
            buttonEmail.innerText = "Text Me";
            document.querySelector(".phoneNumber").innerHTML = `<input type="text"  placeholder="input mobile number">`

            
        } else{
                
                buttonEmail.innerText = "Email Me";
                document.querySelector(".phoneNumber").innerHTML = `<input type="email"  placeholder="name@example.com" validate>`
                //signingEmail.innerHTML = `<input type="number" max="11" placeholder="input mobile number">`;
                // signingEmail.style.display= "block";
                
        }
           
    })
})