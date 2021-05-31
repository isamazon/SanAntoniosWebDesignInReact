import React from "react";
import Heropage from "./components/heropage";
import Nav from "./components/navbar";
import Homepage2 from "./components/homepage2";
import SVG from "./components/svgs/SVG";
import { Slide, FullPage } from "react-full-page";
function Home() {
  return (
    <div>
      <Nav />
      <FullPage>
        <Slide>
          <Heropage />
        </Slide>
        <Slide>
          <Homepage2
            circle1="circle1"
            circle2="circle2"
            svg1={SVG.Hosting}
            svg2={SVG.SEO}
            header="Our services"
            firstserviceh1="Hosting"
            secondserviceh1="SEO"
            firstservicep="We keep it real with high-end web hosting and The lowest downtime we've seen in the industry for our loyal San Antonio customers."
            secondservicep="Is your current SEO Company charging you hundreds a month and getting you 0 results? Do you need to rank locally in San Antonio, Texas? No worries, We're industry professionals. We'll boost Your Seo with a written out process to get you to the top of Google's search results."
          />
        </Slide>
        <Slide>
          <Homepage2 svg1={SVG.SEO} />
        </Slide>
      </FullPage>
    </div>
  );
}

export default Home;
