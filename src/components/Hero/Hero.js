import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi I am Nikhil Rai. <br />I am an aspiring software developer.
        </SectionText>

        <a
          target="_blank"
          href="https://drive.google.com/file/d/1WiDrW0CYhOvTeNsLC4Z381VBDt5NKlm6/view"
        >
          <Button>Learn More</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
