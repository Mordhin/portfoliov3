import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { EmailForm } from "./EmailForm";
import { FaLinkedin, FaGithubSquare, FaCopy } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const renderCopy = () => {
    return (
      <div>
        <FaCopy /> Copier
      </div>
    );
  };

  const renderCopied = () => {
    return (
      <div>
        <FaCopy /> Copié !
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      if (copied) setCopied(false);
    }, 2000);
  }, [copied]);

  return (
    <Fade left>
      <div className="contact">
        <h2>Contactez-moi !</h2>
        <div className="contact_grid">
          <ul className="links">
            <li>
              <a
                href="https://www.linkedin.com/in/julien-corion-dev"
                target="_blank"
              >
                <FaLinkedin />
                <div>
                  LinkedIn
                  <span className="discret">/in/julien-corion-dev</span>
                </div>
              </a>
            </li>
            <li>
              <a href="https://github.com/Mordhin" target="_blank">
                <FaGithubSquare />
                <div>
                  GitHub
                  <span className="discret">/Mordhin</span>
                </div>
              </a>
            </li>
            <li>
              <CopyToClipboard
                text="astram59@gmail.com"
                onCopy={() => setCopied(true)}
              >
                <button className="copy_button">
                  {copied ? renderCopied() : renderCopy()}
                </button>
              </CopyToClipboard>
              juliencorion.dev@gmail.com
            </li>
          </ul>
          <EmailForm />
        </div>
      </div>
    </Fade>
  );
};
