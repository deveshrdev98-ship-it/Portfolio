document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     DARK / LIGHT MODE
  ========================== */
  const toggleBtn = document.getElementById("themeToggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggleBtn.textContent =
      document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  /* =========================
     CONTACT FORM → GMAIL
  ========================== */
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = `Portfolio Contact - ${name}`;

    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`;

    const mailtoLink =
      `mailto:deveshr.dev98@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  });

});
