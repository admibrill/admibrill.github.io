var posts=["2024/08/23/hexo1/","2024/09/15/hexo4/","2024/08/25/hexo2/","2024/08/29/hexo3/","2024/10/04/hexo6/","2024/09/28/hexo5/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };