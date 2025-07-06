function toggleNav() {
  document.getElementById('navLinks').classList.toggle('active');
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior: 'smooth', block: 'start'});
      document.getElementById('navLinks').classList.remove('active');
    }
  });
});
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const name = formData.get('name');
  const email = formData.get('email');
  const company = formData.get('company');
  const message = formData.get('message');
  const subject = encodeURIComponent(`Enquiry from ${name}${company ? ` (${company})` : ''}`);
  const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n${company ? `Company: ${company}\n` : ''}\nMessage:\n${message}`);
  const mailtoLink = `mailto:visionflow@gmx.net?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
  alert('Thank you for your message. Your email program will open shortly.');
  this.reset();
});
function newsletterSignup() {
  document.getElementById('newsletter-email').value = '';
  document.getElementById('newsletter-thankyou').style.display = 'block';
  setTimeout(function(){
    document.getElementById('newsletter-thankyou').style.display = 'none';
  }, 5000);
}