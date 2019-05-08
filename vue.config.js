module.exports = {
  publicPath: '/kcart',
  configureWebpack: {
    devServer: {
      before(app) {
        app.get('/good',(req,res) => {
          res.json([
            {id:1, text:'abc'},
            {id:2, text:'def'}
          ])
        })
      }
    }
  }
}