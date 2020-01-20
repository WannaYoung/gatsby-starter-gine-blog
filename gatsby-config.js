module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/code/61a347f746f0450180b76d1da07ed5d4?v=a9c9b1db0c7e4faba7c8e0a153954213"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/code/9bef712c294d428e9ef169759187bc98?v=b0a1b0ae31004bc19b494fd7adcd9536"
            }
        }
    ],
}
