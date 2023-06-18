const sectionFAQ = document.getElementsByClassName('contentBx');
var getValueName = document.getElementById("name");
var getValueEmail = document.getElementById("email");
var getValueMsg = document.getElementById("message");

for (i=0; i <sectionFAQ.length; i++){
    sectionFAQ[i].addEventListener("click", function() {
        this.classList.toggle('active')
    })
}

window.onload = function() {
 
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            emailjs.sendForm('service_ux08wsp', 'contact_form', this)
                .then(function() {
                    console.log('SUCCESS!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
        });
    }
    

function clearForm() {

    if (getValueName.value !="") {
        getValueName.value = ""
    
    }
    if (getValueEmail.value !="") {
        getValueEmail.value = ""
    }

    if (getValueMsg.value !="") {
        getValueMsg.value = ""
    }
    window.alert("Wiadomość została wysłana");
}

const toggleMenu = () => {
    document.body.classList.toggle("open");
}