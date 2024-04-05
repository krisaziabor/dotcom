import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import '../../globals.css'

const AlertDialogSet = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <ArrowTopRightIcon />
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="AlertDialogOverlay" />
      <AlertDialog.Content className="AlertDialogContent">
        {/* insert title of alert dialog here */}
        <AlertDialog.Description className="AlertDialogDescription">
            Are you affiliated with Yale University?
            <br></br>
            If so, please select yes and use your @yale.edu email.
            <br></br>
            If not, send any inquiries to kris@krisaziabor.com – this helps ensure I get your message.
        </AlertDialog.Description>
        <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
  <AlertDialog.Cancel asChild>
    <button 
      className="Button mauve" 
      onClick={(e) => {
        e.preventDefault();
        window.location.href='mailto:kris@krisaziabor.com';
      }}
    >
      No, send to kris@krisaziabor.com
    </button>
  </AlertDialog.Cancel>
  <AlertDialog.Action asChild>
    <button 
      className="Button red" 
      onClick={(e) => {
        e.preventDefault();
        window.location.href='mailto:kris.aziabor@yale.edu';
      }}
    >
      Yes, send to kris.aziabor@yale.edu
    </button>
  </AlertDialog.Action>
</div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default AlertDialogSet;