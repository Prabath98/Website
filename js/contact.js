const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const data = new URLSearchParams(new FormData(form));
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString()
      });
      if (res.ok) {
        alert('Message sent successfully');
        form.reset();
      } else {
        alert('There was an error sending your message');
      }
    } catch (err) {
      alert('There was an error sending your message');
    }
  });
}
