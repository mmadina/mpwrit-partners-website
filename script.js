const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        formMessage.textContent = "Message sent — we'll be in touch within one business day.";
        formMessage.style.color = '#0F6E56';
        form.reset();
      } else {
        formMessage.textContent = 'Something went wrong. Please email us directly at contact@mpwritpartners.com';
        formMessage.style.color = '#E07B2A';
      }
    } catch {
      formMessage.textContent = 'Something went wrong. Please email us directly at contact@mpwritpartners.com';
      formMessage.style.color = '#E07B2A';
    }
    btn.textContent = 'Send message';
    btn.disabled = false;
  });
}
