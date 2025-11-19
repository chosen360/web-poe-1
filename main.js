// Lightbox functionality
const imgs = document.querySelectorAll('.lightbox-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.lightbox-close');

imgs.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Accordion functionality
const toggles = document.querySelectorAll('.accordion-toggle');
toggles.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('open');
  });
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
const contactResponse = document.getElementById('contactResponse');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    contactResponse.textContent = "Please fill in all fields.";
    contactResponse.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    contactResponse.textContent = "Invalid email format.";
    contactResponse.style.color = "red";
    return;
  }

  contactResponse.textContent = "Message sent successfully!";
  contactResponse.style.color = "green";
  contactForm.reset();
});
