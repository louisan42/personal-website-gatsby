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
          }

    ]
}