// Modal

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

window.onclick = function (event) {
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      modals[i].style.display = "none";
    }
  }
};

// Envoi mail

(function () {
  emailjs.init("service_n48ib6i");
})();

function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject =
    "Contact Portfolio: " + document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const templateParams = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  emailjs.send("service_n48ib6i", "template_f5drs8f", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );

  emailjs.send("service_n48ib6i", "template_wf1glem", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Votre message a été envoyé avec succès !");
    },
    function (error) {
      console.log("FAILED...", error);
      alert("L'envoi du message a échoué. Veuillez réessayer plus tard.");
    }
  );
}

document.getElementById("contactForm").addEventListener("submit", sendEmail);
