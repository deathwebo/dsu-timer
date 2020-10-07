var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/dsu-timer',
    {
        branch: 'gh-pages',
        repo: 'git@github.com:deathwebo/dsu-timer.git',
        user: {
            name: 'Erick M',
            email: 'tony3c24@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)