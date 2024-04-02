import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import '../../globals.css'

function Bio() {
  const [openAtteh, setOpenAtteh] = React.useState(false);
  const [openKojo, setOpenKojo] = React.useState(false);

  return (
    <h2>
      Kris 
      <Collapsible.Root open={openAtteh} onOpenChange={setOpenAtteh}>
        <Collapsible.Trigger asChild>
          <em onClick={() => setOpenAtteh(!openAtteh)}>Atteh</em>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <h2>Test One</h2>
        </Collapsible.Content>
      </Collapsible.Root>
      <Collapsible.Root open={openKojo} onOpenChange={setOpenKojo}>
        <Collapsible.Trigger asChild>
          <em onClick={() => setOpenKojo(!openKojo)}>Kojo</em>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <h2>Test Two</h2>
        </Collapsible.Content>
      </Collapsible.Root>
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