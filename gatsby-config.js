
module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
        title:`Louis' Portfolio`,
        description: `Portfolio website of Louis Amoah-Nuamah`,
        author:`Louis Amoah`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
              google: {
                families: ['Montserrat: 400,500,800',
                           'Raleway:600' ]
              }
            }
          },
          {
            resolve: "gatsby-plugin-react-svg",
            options: {
              rule: {
                include: /assets/
              }
            }
          },
          {
            resolve: `gatsby-plugin-react-helmet`
          },
          {
            resolve: 'gatsby-plugin-manifest',
            options: {
              name:`Louis' Portfolio`,
              lang: `en`,
              icon: 'src/images/fav.png',
            },
          },

    ]
}