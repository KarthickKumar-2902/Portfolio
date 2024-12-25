document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("JBppJSBsZF3QoDa0S");
  document.getElementById("send-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.getElementById("name-inp").value;
    const email = document.getElementById("mail-inp").value;
    const subject = document.getElementById("sub-inp").value;
    const message = document.getElementById("body-inp").value;

    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      reply_to: email,
    };

    console.log("Form Data:", { name, email, subject, message });

    emailjs.send("service_6crbaoi", "template_iib14hr", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully!");

        document.getElementById("name-inp").value = "";
        document.getElementById("mail-inp").value = "";
        document.getElementById("sub-inp").value = "";
        document.getElementById("body-inp").value = "";
      },
      function (error) {
        console.error("FAILED...", error);
        alert("There was an error sending your message. Please try again.");

        console.log("Error details:", error);
      }
    );
  });
});
