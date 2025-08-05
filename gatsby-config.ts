import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `stinkywebsite`,
    siteUrl: `https://janellevb.github.io/msn-memories`,
  },
  pathPrefix: `/msn-memories`,
  graphqlTypegen: true,
  plugins: [`gatsby-plugin-sass`],
}

export default config
