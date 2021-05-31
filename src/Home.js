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
          <Homepage2
            svg1={SVG.Design}
            svg2={SVG.Appdev}
            firstserviceh1="Web design"
            secondserviceh1="APP DEVELOPMENT"
            firstservicep="We're Software Engineers, who deliver top-notch Web Designs that will put you ahead of your competition. We build everything from static websites, E-Commerce stores to progressive web apps. Are you tired of your boring, ugly website? No worries, We'll make you something beautiful that looks even better than your web designers home page!"
            secondservicep="Do you have an app idea that could be as big as TicTok, Angry birds, Fortnight, or Facebook? Don't worry, We don't just build websites here. We make responsive fast websites that will put your local Web design company in San Antonio or anywhere else to shame. We know that sounds like a lot to offer, but our Software Engineers are Experienced professionals who have worked at companies like Google, Facebook, and Startups across the globe."
          />
        </Slide>
        <Slide>
          <Homepage2
            svg1={SVG.Clean}
            svg2={SVG.Appdev}
            firstserviceh1="MONTHLY MAINTENENCE"
            secondserviceh1="FINANCING"
            firstservicep="Does your website need changes often but you just can't figure out how to do it yourself, or you just don't have time? Don't worry, we have affordable monthly maintenence plans so you can get site updates every month."
            secondservicep="We're the most Affordable Web Design, App Development, and Marketing Company yet. We have partnered with Zip money, funding hero, and Paypal to offer you many different Affordable payment options so your business can strive no matter how big or small."
          />
        </Slide>
      </FullPage>
    </div>
  );
}

export default Home;
