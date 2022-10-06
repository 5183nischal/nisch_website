import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

export default function FragmentGroup() {
  return (
    <StaticQuery
      query={graphql`
        query GetFragments {
          allMarkdownRemark(
            filter: { fields: { slug: { regex: "^/fragments/" } } }
            sort: { order: DESC, fields: frontmatter___published_at }
            limit: 7
          ) {
            nodes {
              frontmatter {
                title
                published_at(formatString: "MMMM DD yyyy")
                hook
              }
              fields {
                slug
              }
            }
          }
        }
      `}
      render={(data) => {
        return data.allMarkdownRemark.nodes.map((node) => {
          // const { title, published_at, hook } = node.frontmatter;
          const {title} = node.frontmatter;
          return (
            <li key={title} className="mb-px10 list-none">
              <p
                id="title"
                className="font-default font-light my-px15 leading-block md:text-older hover:text-white hover:bg-black hover:underline"
              >
                <Link
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </p>
              {/* <p id="hook" className="leading-outer text-hook font-thin">
                {hook}{" "}
                <span id="date" className="text-block italic mx-px3 text-date">
                  {published_at}
                </span>
              </p> */}
            </li>
          );
        });
      }}
    />
  );
}
