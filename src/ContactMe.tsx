import React, {useState} from 'react';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import './ContactMe.css';
import {ReactComponent as Github} from './icons/github.svg';
import {ReactComponent as LinkedIn} from './icons/linkedin.svg';
import {ReactComponent as Mail} from './icons/mail.svg';
import {ReactComponent as MailOpen} from './icons/mail-open.svg';
import {ReactComponent as Twitter} from './icons/twitter.svg';

export function ContactMe() {
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const toggleOpen = () => setOpen(!isOpen);

  const actions = [{
    icon: <Github />,
    name: 'Github',
  }, {
    icon: <LinkedIn />,
    name: 'LinkedIn',
  }, {
    icon: <Twitter />,
    name: 'Twitter',
  }];

  return (
    <div>
      <SpeedDial
        className='contact-me'
        ariaLabel='Social links and ways of contacting me'
        onBlur={handleClose}
        icon={<Mail />}
        openIcon={<MailOpen />}
        onClick={toggleOpen}
        onClose={handleClose}
        onFocus={handleOpen}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        open={isOpen}
        direction='left'
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={toggleOpen}
          />
        ))}
      </SpeedDial>
    </div>
  );
}