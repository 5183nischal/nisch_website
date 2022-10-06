import React from "react";
import SEO from "../components/seo";
import LayouWhite from "../components/layoutWhite";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export default function About() {
  const cvPdf = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "cv" }) {
        name
        extension
        publicURL
      }
      GetImage: file(relativePath: { eq: "metaInfo/about.jpg" }) {
        childImageSharp {
          fluid(quality: 100, webpQuality: 100, maxWidth: 650) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  
  return (
    <>
      <LayouWhite>
        <SEO
          keywords={[`tong yin`, `web`, `salesforce`, `quip`, `aboutme`]}
          title="About"
        />
        <section
          id="content"
          className="mx-2/25 w-21/25 overflow-hidden flex-1 md:m-px50"
        >
          <div
            id="content-inner-standard"
            className="max-w-full md:max-w-px550"
          >
            <div id="title">
              <h1 className="mt-px20 mb-px30 font-helvetica font-normal text-title tracking-xtight leading-navul md:text-xtitle">
                About
              </h1>
            </div>
            <div id="about">
              <p className="my-px20">
              <Img fluid={cvPdf.GetImage.childImageSharp.fluid} alt="about"></Img>
              </p>
              <p className="my-px20">
            I&apos;m a PhD student in Theoretical Neuroscience at Burak lab in the 
            {" "}
            <a
              href="https://elsc.huji.ac.il/"
            >
              Hebrew University of Jerusalem
            </a>{" "}.
            I am interested in understanding mechanisms of biological and artificial intelligence and philosophy of 
            objects such as computation and representation that we might use to that end. I am also interested in 
            normative issues surrounding technology in society and have a Masters in Applied Cybernetics from the{" "} 
            {" "}
            <a
              href="https://3ainstitute.org/"
            >
              3AI institute
            </a>{" "} 
            at the Australian National University, where we took a system perspective of position and implications
            of technology. All of this started with an undergraduate degree in Mathematics from 
            {" "}
            <a
              href="https://nyuad.nyu.edu/en/"
            >
              New York University Abu Dhabi
            </a>{" "}.
            For more details, here is my {" "}
            <a
              href={cvPdf.pdf.publicURL}
              className="hvr-underline-to-center underline-black"
            >
              CV
            </a>.
          </p>
            </div>
          </div>
        </section>
      </LayouWhite>
    </>
  );
}
