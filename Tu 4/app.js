// posts 
const posts= [
{
  title: 'Post One',
  body: 'This is the First Post'
},
{
  title: 'Post Two',
  body: 'This is post two'
}
];


// fun
function creatPost(post)
{
setTimeout(function()
{
  posts.push(post);
},2000);
}

// // get 
// function getPost()
// {
//   setTimeout(function(){

//     let output = '';
//     posts.forEach(function(post){
//       output+=`<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;

//   },1000);
  
// }

// creatPost({title: 'Post Three', body:'This is the third post'});
// getPost();

// fun
function creatPost(post,callback)
{
setTimeout(function()
{
  posts.push(post);
  callback();
},2000);
}

// get 
function getPost()
{
  setTimeout(function(){

    let output = '';
    posts.forEach(function(post){
      output+=`<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;

  },1000);
  
}

creatPost({title: 'Post Three', body:'This is the third post'},getPost);
