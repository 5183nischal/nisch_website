import React from "react";
import LayoutBlack from "../components/layoutBlack";
// import DevPostGroup from "../components/devPostGroup";
import FragmentGroup from "../components/fragmentGroup";
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/seo";

export default function Home() {
  const data = useStaticQuery(graphql`
    query GetPhotos {
      allFile(filter: { relativeDirectory: { eq: "photos" } }) {
        nodes {
          childImageSharp {
            fluid(
              fit: COVER
              webpQuality: 100
              quality: 100
              jpegQuality: 100
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  const photo = data.allFile.nodes[0].childImageSharp.fluid;
  return (
    <LayoutBlack>
      <SEO
        keywords={[`nisch`, `web`, `neuroscience`, `mainali`]}
        title="Home"
        bodyAttr={{
          class:
            "bg-white text-black font-default leading-outer antialiased align-baseline",
        }}
      />
      <div
        id="flexcontainer-index"
        className="flex flex-col justify-left mx-2/25 w-21/25 text-index leading-para max-w-xxl md:flex-row md:-mt-px30 md:mb-px60 md:mx-auto md:text-base md:leading-outer md:w-full"
      >
        <section
          id="text"
          className="max-w-full flex-shrink md:my-0 md:mr-px2 md:ml-px80 md:max-w-px680"
        >
          {/* <h1
            id="block"
            className="font-helvetica tracking-normal font-bold my-px15 text-block leading-block uppercase"
          >
            about
          </h1> */}
          <p className="my-px15 hyphens-auto">
            Hi, I&apos;m{" "}निश्चल \ Nischal
            and I am a PhD candidate in Theoretical Neuroscience at the Burak lab in the Hebrew
            University of Jerusalem.
          </p>
          <p className="my-px15">
            I am interested in mathematical theories of spatial cognition 
            and understanding representational properties of neural networks broadly.
          </p>
          {/* <p className="my-px15">You can find my recent works below.</p> */}
          <div id="writing" className="mx-3/50 md:mx-0">
            {/* <div
              id="divider-short"
              className="mx-auto my-px25 border-b border-gray-900 w-4/5"
            />
            <h1
              id="block"
              className="font-helvetica tracking-normal font-bold my-px15 text-block leading-block uppercase"
            >
              dev-posts
            </h1>
            <ul className="mt-px10 mb-px25 list-none">
              <DevPostGroup />
            </ul>
            <p id="older" className="my-px10 text-older text-date">
              <em>
                Older posts available{" "}
                <Link
                  to="/dev-posts"
                  className="text-white hvr-underline-to-center"
                >
                  here
                </Link>
                .
              </em>
            </p> */}
            <div
              id="divider-short"
              className="mx-auto my-px25 border-b border-gray-900 w-4/5"
            />
            <h1
              id="block"
              className="font-helvetica tracking-normal font-bold my-px20 text-strong leading-block uppercase"
            >
              Recent Work
            </h1>
            <ul className="mt-px10 mb-px15 list-none">
              <FragmentGroup />
            </ul>
            <p id="older" className="my-px10 text-block text-date">
              <em>
                Older works{" "}
                <Link
                  to="/fragments"
                  className="text-black hover:text-white hover:bg-black hover:underline"
                >
                  here
                </Link>
              </em>
            </p>
          </div>
        </section>
        <section
          id="photo"
          className="w-full flex-shrink-5 md:mr-px20 md:w-px250 md:ml-px10 md:overflow-hidden"
        >
          <Img className="object-cover my-px2 md:h-px250 md:w-px250" fluid={photo} alt="cover photo" />
        </section>
      </div>
    </LayoutBlack>
  );
}
