fetch("head.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;

        // Active link logic needs to be inside here
        const links = document.querySelectorAll(".navbar a");

        links.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add("active");
            }

            link.addEventListener("click", function (e) {
                e.preventDefault();
                links.forEach(l => l.classList.remove("active"));
                this.classList.add("active");
                window.location.href = this.href;
            });
        });
	});
	
// Contact validation
function sbm1() {
    let msg = "";
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('sub').value.trim();
    const message = document.getElementById('msg').value.trim();

    if (name === "") msg += "Enter your Name.\n";
    if (email === "") msg += "Enter your Email ID.\n";
    if (subject === "") msg += "Enter your Subject.\n";
    if (message === "") msg += "Enter your Message.\n";

    if (msg === "") {
        return true;
    } else {
        alert(msg);
        return false;
    }
}

function clr() {
        // Custom logic to clear error messages
        document.getElementById('error-msg').innerHTML = '';
        console.log("Form has been cleared.");
		alert('Everything Is Cleared!');
}

// Email Sending
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("7qB9KFtx34qp-pXs2");                           //Public API Key

    const form = document.getElementById('f1');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
			console.log("Sending:", {
                name: form.name.value,
                email: form.email.value,
                subject: form.subject.value,
                message: form.message.value
            });
            emailjs.sendForm('service_lp2rads', 'template_xitk60y', this)       //SERVICE_ID, TEMPLATE_ID
                .then(function () {
                    alert('Message sent successfully!');
                }, function (error) {
                    alert('Failed to send message. Error: ' + JSON.stringify(error));
                });
        });
    }
});

//Button animation
// Get the button
window.onload = function() {
    let mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  {
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
window.topFunction = function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };


//slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
};