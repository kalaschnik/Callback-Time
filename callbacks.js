const posts = [
    {title: "Post One", body: "This is the very first post in my new blog and I love to share some thoughts..."},
    {title: "Post Two", body: "Second Post. Great isn’t it? Yet, I don’t know what to write now..."},
];

function getPosts() {
    // setTimeout(callback(){}, delayInMs);
    setTimeout(() => {

        let output = '';
    posts.forEach((post) => {

    }, 1000);

}

const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
};


createPost({title: "Post Three", body: "This is post 3"}, getPosts);

