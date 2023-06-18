const sectionFAQ = document.getElementsByClassName('contentBx');

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
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

function clearForm() {
    var getValueName = document.getElementById("name");
    var getValueEmail = document.getElementById("email");
    var getValueMsg = document.getElementById("message");

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