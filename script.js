// Initialize EmailJS (replace with your EmailJS public key)
(function () {
  emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY_HERE", // e.g. "AbCdEf123456"
  });
})();

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "Sending...";

    const formData = {
      from_name: document.getElementById("name").value,
      reply_to: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
      .then(() => {
        status.textContent = "Thanks! Your message has been sent.";
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        status.textContent =
          "Oops, something went wrong. Please try again later.";
      });
  });
});
