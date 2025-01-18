
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Scroll Section Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');

window.onscroll = () => {
        let top = window.scrollY;

      sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
              });
        let activeLink = document.querySelector('header nav a[href="#${id}"]');
        if(activeLink) activeLink.classList.add('active');
        };
    });

    // Sticky Navbar
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove Menu Icon and Navbar Active State on Scroll
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

  
const buttons = document.querySelectorAll(".toggleLink");

// Loop through each button and add click event listeners
buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    // Select corresponding dots and more content based on index
    const dots = document.querySelectorAll(".dots")[index];
    const moreContent = document.querySelectorAll(".more")[index];

    // Toggle the visibility of dots and more content
    dots.classList.toggle("hidden");
    moreContent.classList.toggle("hidden");

    // Update the button text
    if (moreContent.classList.contains("hidden")) {
      button.textContent = "Read More";
    } else {
      button.textContent = "Read Less";
    }
  });
});



/*---------] form section----------*/
const form = document.getElementById('contactForm');

form.addEventListener('submit', async function (event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('number').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  try {
    const response = await fetch('https://formspree.io/f/xwppellb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        subject,
        message
      })
    });

    if (response.ok) {
      alert('Message sent successfully!');
      form.reset(); // Clear the form after submission
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
});


/*-----SCROLL REVEAL -----*/
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' }); 
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' }); 

/*---- typed js ----*/
const typed = new Typed('.multiple-text', {
  strings: ['Web Developer', 'Frontend Developer',],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

