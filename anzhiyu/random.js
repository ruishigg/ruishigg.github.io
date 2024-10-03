var posts=["2024/10/01/hello-world/","2024/10/02/今天是2024年10月1日，国庆节/","2024/10/03/好看的图片/","2024/10/03/盲盒为什么能一而再的吸引我们？/","2024/10/02/童年记忆/","2024/10/02/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };