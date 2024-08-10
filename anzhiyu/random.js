var posts=["2024/08/08/hello-world/","2024/08/09/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };