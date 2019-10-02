require('simple-git')()
    .add('./*')
    .commit("first commit!")
    // .addRemote('origin', 'https://github.com/ipirm/kz-site.git')
    .push(['-u', 'origin', 'master'], () => console.log('done'));
