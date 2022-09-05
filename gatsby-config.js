module.exports = {
  siteMetadata: {
    title: `SCC-DEMO`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass",
  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  {
    resolve: `gatsby-source-sanity`,
    options: {
      projectId: `h3asrjaf`,
      dataset: `production`,
      watchMode:true,
      // a token with read permissions is required
      // if you have a private dataset
      token: "skzjtF1p3kRzTU0pdLXVMlJkb4hZW3H3PlJ34wrfWnCSVvK07UdtNohcd6FfS1IkIj1xmdz278OdFCM5gbQsAucSxdGS47dwYBMkFiIxz3kuim8ZqaTKOXagzntMN6QEMHY3CfpfDosP8wfo63HT01gImZIg5m2gSwIvQWu35NPXBdnfJnpO",
      // If the Sanity GraphQL API was deployed using `--tag <name>`,
      // use `graphqlTag` to specify the tag name. Defaults to `default`.
      graphqlTag: 'default',
      overlayDrafts: true
    },
  },
  {
    resolve: "gatsby-plugin-sanity-image",
    options: {
      projectId: "h3asrjaf",
      dataset: "production",
    },
  }
]
};