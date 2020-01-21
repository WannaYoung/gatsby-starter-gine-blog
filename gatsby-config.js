module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/code/3460118f10644540b4fbdff6c0d9bdab?v=48283f4becf54112b0acea9418e31a36"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/code/5e03272177aa4947b455ce1aa93ba2e0?v=1338b33bcebd4dcabbd599e3924f1744"
            }
        }
    ],
}
