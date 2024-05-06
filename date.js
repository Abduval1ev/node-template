// let date = new Date()
// let string = "It's time now is"

// let dateMessage = `${string} ${date}`

// module.exports = dateMessage

// !
const axios = require("axios");
const fetch = require("fetch");

const API = "https://jsonplaceholder.typicode.com/posts";

function getPostsFromFetch() {
  fetch(API)
    .then((res) => res.json())
    .then((posts) => {
      posts.slice(0, 14).map((post) => {
        return console.log(post.id), console.log(post.userId), console.log(post.title), console.log(post.body);
      });
    })
    .catch((err) => console.log(err));
}
getPostsFromFetch();

// ! Axios
function getPostsFromAxios() {
  axios(API)
    .then((posts) => {
      posts.data.slice(0, 14).map((post) => {
        return console.log(post.id), console.log(post.userId), console.log(post.title), console.log(post.body);
      });
    })
    .catch((err) => console.log(err));
}
getPostsFromAxios();
