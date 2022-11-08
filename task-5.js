const posts = [
    {title: 'Post One', body: 'This is Post One', createdAt: Math.floor(Date.now() / 1000)},
    {title: 'Post Two', body: 'This is Post Two', createdAt: Math.floor(Date.now() / 1000)}
]


function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post, index) => {
            // post.createdAt = Math.floor(Date.now() / 1000)
            const createdAgo = new Date().getTime() - post.createdAt
            output += `<li>${post.title}  created at: ${createdAgo}</li>`
        });
        document.body.innerHTML = output
    }, 1000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post)
        callback()
    }, 2000)
}

createPost({title: 'Post Three', body: 'This is Post Three', createdAt: Math.floor(Date.now() / 1000)}, getPosts)

function create4thPost(post, callback) {
    createPost(post, callback)
}

create4thPost({title: 'Post Four', body: 'This is Post Four', createdAt: Math.floor(Date.now() / 1000)}, getPosts)