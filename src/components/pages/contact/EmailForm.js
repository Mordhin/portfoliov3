import React from "react";
import emailjs from "emailjs-com";

export const EmailForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h2sghqv",
        "template_8nxag49",
        e.target,
        "user_WKM08ndjnUihnYy9KonPC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form className="email_form" onSubmit={sendEmail}>
      <h3>Envoyez-moi un message</h3>
      <input type="text" name="user_name" placeholder="Nom" />
      <input type="email" name="user_email" placeholder="Email" />
      <input type="text" name="subject" placeholder="Sujet" />
      <textarea name="message" placeholder="Message" />
      <input type="submit" value="Envoyer" />
    </form>
  );
};
