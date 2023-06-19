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
        // generate a five digit number for the contact_number variable
        //this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_ux08wsp', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
                clearForm();
                window.alert("Wiadomość została wysłana!")

            }, function(error) {
                console.log('FAILED...', error);
                window.alert("Ups... z jakiegoś powodu nie udało się wysłać wiadomości")
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
}

const toggleMenu = () => {
    document.body.classList.toggle("open");
}