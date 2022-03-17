require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
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
            resolve: "gatsby-plugin-anchor-links",
            options: {
              //offset: 300
            }
          }

    ]
}