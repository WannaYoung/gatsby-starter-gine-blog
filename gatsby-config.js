module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/code/fd31f730093545fb88208bc3867bd042?v=e0196db3528a47a9aa5325e2697c64ac"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/code/c1a7b18b6a364ad7b027e955d3b8fa23?v=0dbf9ab405194bee8725e2a380af631f"
            }
        }
    ],
}
