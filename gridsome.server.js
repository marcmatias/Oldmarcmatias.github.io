// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async store => {
    store.addMetadata('userName', '@marcmatias')
    store.addMetadata('socCodePen', '//codepen.io/marcmatias')
    store.addMetadata('socGithub', '//github.com/marcmatias')
    store.addMetadata('socIn', '//www.linkedin.com/in/marcel-marques-836a04208')
    store.addMetadata('socTwitter', '//twitter.com/marcmatias')
  })
}
