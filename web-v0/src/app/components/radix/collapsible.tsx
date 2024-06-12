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
        <Collapsible.Content asChild className="etymology">
          <span><em> – first born boy of twins – </em></span>
        </Collapsible.Content>
      </Collapsible.Root>
      <span> </span>
      <Collapsible.Root open={openKojo} onOpenChange={setOpenKojo} style={{display: 'inline'}}>
        <Collapsible.Trigger asChild>
          <em onClick={() => setOpenKojo(!openKojo)}>Kojo</em>
        </Collapsible.Trigger>
        <Collapsible.Content asChild className="etymology">
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
      He currently attends Yale University and is a Full-Stack Software Engineering Intern at Fidelity Investments. 
      <br></br>
      <br></br>
    While this website is <div style={{ textDecoration: 'underline', display: 'inline'}}>under renovation</div>, you can access his <em><a href="https://www.linkedin.com/in/krisaziabor/">Linkedin</a></em>, <em><a href="https://read.cv/krisaziabor">CV</a></em>, and <em><a href="https://github.com/krisaziabor/">Github</a></em>.
    </h2>
  );
}

export default Bio;