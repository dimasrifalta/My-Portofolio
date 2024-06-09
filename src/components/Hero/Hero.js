import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import fileSaver from 'file-saver';

const saveFile = () => {
  fileSaver.saveAs(
    './images/resumedimas.pdf',
    'resume_dimas.pdf'
  );
};
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, I'm Dimas Rifalta <br />
          This My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Software Engineer Based In Jakarta, Indonesia.
        </SectionText>

          <Button onClick={saveFile}>Download Portfolio</Button>
          
    
      </LeftSection>
    </Section>
  </>
);

export default Hero;
