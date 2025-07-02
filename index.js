document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    const subject = encodeURIComponent('Contact from website');
    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nType of Repair: ${service}\nMessage: ${message}`
    );
    window.location.href = `mailto:lasillaelectricax@gmail.com?subject=${subject}&body=${body}`;
});