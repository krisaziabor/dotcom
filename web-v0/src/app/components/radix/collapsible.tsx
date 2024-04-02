import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import '../../globals.css'

function Bio() {
  const [openAtteh, setOpenAtteh] = React.useState(false);
  const [openKojo, setOpenKojo] = React.useState(false);

  return (
    <h2>
      Kris
      <span> </span>
      <Collapsible.Root open={openAtteh} onOpenChange={setOpenAtteh} style={{display: 'inline'}}>
        <Collapsible.Trigger asChild>
          <em onClick={() => setOpenAtteh(!openAtteh)}>Atteh</em>
        </Collapsible.Trigger>
        <Collapsible.Content asChild>
          <span><em> – first born of twins – </em></span>
        </Collapsible.Content>
      </Collapsible.Root>
      <span> </span>
      <Collapsible.Root open={openKojo} onOpenChange={setOpenKojo} style={{display: 'inline'}}>
        <Collapsible.Trigger asChild>
          <em onClick={() => setOpenKojo(!openKojo)}>Kojo</em>
        </Collapsible.Trigger>
        <Collapsible.Content asChild>
          <span><em> – born on a Monday – </em></span>
        </Collapsible.Content>
      </Collapsible.Root>
      <span> </span>
      Aziabor is a software engineer, designer, and photographer.
      <br></br>
      <br></br>
      Passionate to explore the intentional creations and destructions of institutional memory, Aziabor plays with minimalistic aesthetics when forming thought-provoking visuals. 
      <br></br>
      <br></br>
      He currently attends Yale University and is an incoming Full-Stack Software Engineering Intern at Fidelity Investments. 
      <br></br>
      <br></br>
      While this website is under renovation, you can access his <em>Linkedin</em>, <em>CV</em>, and <em>Github</em>, and this portfolio's <em>Colophon</em>.
    </h2>
  );
}

export default Bio;