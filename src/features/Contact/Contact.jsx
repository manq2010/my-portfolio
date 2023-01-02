import React, { useState } from 'react';
import axios from 'axios';
import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
import { isEmail } from 'validator/lib/isEmail';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
// import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import contactsData from '../../data/contactsData';
import socialsData from '../../data/socialsData';

const ContactWrapper = styled.section`
    display: flex;
    flex-direction: column;
`;

const Contact = () => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleContactForm = (e) => {
    e.preventDefault();

    if (name && email && message) {
      if (isEmail(email)) {
        const responseData = {
          name,
          email,
          message,
        };

        axios.post(contactsData.sheetAPI, responseData).then((res) => {
          console.log(res, 'success');
          console.log(success, 'success');
          setSuccess(true);
          setErrMsg('');

          setName('');
          setEmail('');
          setMessage('');
          setOpen(false);
          console.log(open, 'open');
        });
      } else {
        setErrMsg('Invalid email');
        console.log(errMsg, 'Invalid email');
        setOpen(true);
      }
    } else {
      setErrMsg('Enter all the fields');
      setOpen(true);
    }
  };

  return (
    <div>
      {
      contactsData && (
      <ContactWrapper>
        <h1>Contacts</h1>
        {/* <h3>Want me to build staff for you? Hit me on LinkedIn</h3> */}
        {/* <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
          <span type="button">
            <EmailIcon />
          </span>
        </a> */}

        <div className="contacts-form">
          <form onSubmit={handleContactForm}>
            <div className="input-container">
              <label htmlFor="Name">
                Name
                <input
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="Name"
                />
              </label>
            </div>
            <div className="input-container">
              <label
                htmlFor="Email"
              >
                Email
                <input
                  placeholder="John@doe.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="Email"
                />
              </label>
            </div>
            <div className="input-container">
              <label
                htmlFor="Message"
              >
                Message
                <textarea
                  placeholder="Type your message...."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  name="Message"
                />
              </label>
            </div>
            <div className="submit-btn">
              <button
                type="submit"
              >
                <p>{!success ? 'Send' : 'Sent'}</p>
                <div className="submit-icon">
                  <SendIcon
                    className="send-icon"
                    style={{
                      animation: !success
                        ? 'initial'
                        : 'fly 0.8s linear both',
                      position: success
                        ? 'absolute'
                        : 'initial',
                    }}
                  />
                  <CheckCircleIcon
                    className="success-icon"
                    style={{
                      display: !success
                        ? 'none'
                        : 'inline-flex',
                      opacity: !success ? '0' : '1',
                    }}
                  />
                </div>
              </button>
            </div>
          </form>

          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
          >
            <SnackbarContent
              action={(
                <>
                  <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </>
              )}
              style={{
                fontFamily: 'var(--primaryFont)',
              }}
              message={errMsg}
            />
          </Snackbar>
        </div>

        <div>
          {/* <a href={contactsData.linkedin} target="_blank" rel="noreferrer">
          <span type="button">
            <LinkedInIcon />
          </span>
        </a> */}

          {socialsData.twitter && (
          <a
            href={socialsData.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon aria-label="Twitter" />
          </a>
          )}

          {socialsData.github && (
          <a
            href={socialsData.github}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon aria-label="github" />
          </a>
          )}

          {socialsData.linkedIn && (
          <a
            href={socialsData.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon aria-label="LinkedIn" />
          </a>
          )}
        </div>
      </ContactWrapper>
      )
}
    </div>
  );
};

export default Contact;
