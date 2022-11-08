const posts = [
    {title: 'Post One', body: 'This is Post One'},
    {title: 'Post Two', body: 'This is Post Two'}
]


function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            const error = false;
            
            if(!error) {
                resolve()
            }
            else {
                reject('Error: Something went wrong!')
            }   
        }, 0)
    })
}

createPost({title: 'Post Three', body: 'This is Post Three'})
.then(getPosts)
.catch(err => console.log(err))

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.pop()) {
                resolve()
            }
            else {
                reject('Error: Array is empty now')
            }
        }, 1000);
    })  
}

deletePost()
.then(getPosts)
.catch(err => console.log(err))

deletePost()
.then(getPosts)
.catch(err => console.log(err))

deletePost()
.then(getPosts)
.catch(err => console.log(err))

deletePost()
.then(getPosts)
.catch(err => console.log(err))

createPost({title: 'Post Four', body: 'This is Post Four'})
.then(getPosts)
.catch(err => console.log(err))

deletePost()
.then(getPosts)
.catch(err => console.log(err))





