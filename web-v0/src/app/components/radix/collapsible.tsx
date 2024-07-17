import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import '../../globals.css'

function Bio() {
  const [openAtteh, setOpenAtteh] = React.useState(false);
  const [openKojo, setOpenKojo] = React.useState(false);

  return (
    <h2>
      I,
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
      am a software engineer, designer, and photographer.
      <br></br>
      <br></br>
      I am entering my third year as a Computing in the Arts major at Yale University and currently intern at Fidelity Investments as a Full-Stack Software Engineer. 
      <br></br>
      <br></br>
      Whether I am producing designs, photo series, or pieces of writing, the traditions of time and memory and their creation and destruction always seep heavily into my work.
      <br></br>
      <br></br>
      Sharing my love for combining minimalistic aesthetics and  thought-provoking messaging, I lead projects and contribute to organizations across the Yale campus such as Yale Visual Artists, Maison, Yale Pop-Up, and The New Journal.
      <br></br>
      <br></br>
      As is the case for all my other work, this website is perpetually in progress.
      While this website is <div style={{ textDecoration: 'underline', display: 'inline'}}>under renovation</div>, you can access his <em><a href="https://www.linkedin.com/in/krisaziabor/">Linkedin</a></em>, <em><a href="https://read.cv/krisaziabor">CV</a></em>, and <em><a href="https://github.com/krisaziabor/">Github</a></em>.
    </h2>
  );
}

export default Bio;