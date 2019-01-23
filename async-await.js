const posts = [
    {title: "Post One", body: "This is the very first post in my new blog and I love to share some thoughts..."},
    {title: "Post Two", body: "Second Post. Great isn’t it? Yet, I don’t know what to write now..."},
];

function getPosts() {
    // setTimeout(callback(){}, delayInMs);
    setTimeout(() => {

        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        console.log(output);
        document.body.innerHTML = output;

    }, 1000);

}

const createPost = post => {
    // this returns a promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("Error: Something went wrong!");
            }

        }, 2000);

    });
};


// async / await
async function init() {
    await createPost({title: "Third Post", body: "This is now a Promise..."});

    getPosts();
}

init();

// with fetch
const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  console.log(data);
};

fetchUsers();