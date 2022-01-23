const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/mathdle',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/lemononmars/mathdle.git',
        user: {
            name: 'lemononmars',
            email: 'sakulbuth@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)