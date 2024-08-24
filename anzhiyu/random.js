var posts=["2024/08/23/hexo1/","2024/08/17/测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Admibrill","link":"https://admibrill1.pages.dev/","avatar":"https://image.m-c.top/?/images/2024/08/18/OPxd6hAJUP/%E6%97%A0%E6%A0%87%E9%A2%98.png","descr":"Where there is a will,there is a way.","siteshot":"https://image.m-c.top/?/images/2024/08/23/hihfyF996k/111.png","color":"vip"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2024/07/16/6695ebf7463be.png","color":"vip"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg","descr":"期待您的光临！","siteshot":"https://npm.elemecdn.com/akilar-friends@latest/siteshot/akilar.top.jpg","color":"vip"},{"name":"iMaeGoo’s Blog","link":"https://www.imaegoo.com","avatar":"https://cdn.jsdelivr.net/npm/imaegoo/avatar.jpg","descr":"虹墨空间站","color":"vip"},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://www.fomal.cc/assets/avatar.webp","descr":"Future is now 🍭🍭🍭","siteshot":"https://source.fomal.cc/siteshot/www.fomal.cc.webp","color":"vip"},{"name":"Eurkon","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/eurkon-cdn/hexo/images/user/avatar.jpg","descr":"及时当勉励，岁月不待人","color":"vip"},{"name":"唐志远","link":"https://fe32.top/","avatar":"https://bu.dusays.com/2022/05/02/626f92e193879.jpg","descr":"古今之成大事者，不惟有超世之才，亦必有坚忍不拔之志","screenshot":"https://bu.dusays.com/2023/07/16/64b400bf8e546.jpg","color":"vip"},{"name":"Tianli","link":"https://tianli-blog.club/","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=507249007&spec=640","descr":"自知之明是最可贵的知识！","siteshot":"https://p.zhheo.com/3lt2id24590781657704885285.jpeg!cover_siteshot"},{"name":"CyanFalse's Weblog","link":"https://blog.eurekac.cn","avatar":"https://cdn.eurekac.cn/npm/chenyfan-oss/4.0.0/files/512.jpg","descr":"I'm CyanFalse,New to Here."},{"name":"序炁的博客","link":"https://www.ordchaos.com","avatar":"https://www.ordchaos.com/img/avatar.jpg","descr":"A dragon that born in the order and chaos."}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };