var ghpages = require('gh-pages')
var path = require('path')
 
console.log('start deploying to gh-pages...')
ghpages.publish('dist', {
  branch: 'gh-pages',
  message: 'Deploy from master branch in ' + new Date()
}, function(err) {
  console.log('done deploying to gh-pages')
});