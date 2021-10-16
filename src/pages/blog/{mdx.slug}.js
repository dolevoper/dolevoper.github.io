import * as React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import ExternalLink from "../../components/externalLink";
import { container, post, heroImage, links, next, top, prev } from "./post.module.css";

const BlogPostPage = ({ data, location }) => {
    const { frontmatter, body, slug } = data.mdx;
    const image = getImage(frontmatter.hero_image);

    const currPostIndex = data.allMdx.nodes.findIndex(post => post.slug === slug);
    const nextPost = data.allMdx.nodes[currPostIndex + 1];
    const prevPost = data.allMdx.nodes[currPostIndex - 1];

    return (
        <Layout title={frontmatter.title} path={location.pathname} description={frontmatter.description} image={frontmatter.hero_image?.childImageSharp.fixed.src} type="article">
            <main className={container}>
                <article className={post}>
                    <h2>{frontmatter.title}</h2>
                    <small>{frontmatter.date}</small>
                    <p>{frontmatter.description}</p>
                    {
                        image &&
                        <figure>
                            <GatsbyImage image={image} alt={frontmatter.hero_image_alt} className={heroImage} />
                            <figcaption>
                                Photo by{" "}
                                <ExternalLink href={frontmatter.hero_image_credit_link}>{frontmatter.hero_image_credit_text}</ExternalLink>
                            </figcaption>
                        </figure>
                    }
                    <MDXRenderer>
                        {body}
                    </MDXRenderer>
                </article>
                <nav className={links}>
                    <ul>
                        {nextPost && <li className={next}><Link to={`/blog/${nextPost.slug}`}>{nextPost.frontmatter.title} →</Link></li>}
                        <li className={top}><Link to="#">Back to top</Link></li>
                        {prevPost && <li className={prev}><Link to={`/blog/${prevPost.slug}`}>← {prevPost.frontmatter.title}</Link></li>}
                    </ul>
                </nav>
            </main>
        </Layout>
    );
};

export const query = graphql`
    query($slug: String) {
        mdx(slug: {eq: $slug}) {
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
                description
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData
                        fixed {
                            src
                        }
                    }
                }
            }
            body
            slug
        }
        allMdx(sort: {fields: frontmatter___date, order: ASC}, filter: {frontmatter: {unlisted: {ne: true}}}) {
            nodes {
                slug
                frontmatter {
                    title
                }
            }
        }
    }
`;

export default BlogPostPage;
