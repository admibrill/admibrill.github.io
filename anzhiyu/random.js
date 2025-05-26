var posts=["2024/08/23/hexo1/","2024/12/30/hexo10/","2025/01/20/hexo12/","2025/01/18/hexo11/","2025/03/23/hexo13/","2025/04/05/hexo14/","2025/05/25/hexo15/","2024/08/25/hexo2/","2024/08/29/hexo3/","2024/09/15/hexo4/","2024/09/28/hexo5/","2024/10/20/hexo7/","2024/10/04/hexo6/","2024/12/08/hexo9/","2024/11/24/hexo8/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Admibrill","link":"https://blog.qyadbr.top/","avatar":"https://source-admibrill.pages.dev/file/f69c9c86b22cb90df18a1.png","descr":"有志者,事竟成.","siteshot":"https://source-admibrill.pages.dev/file/98110db06c2c189fb0e44.png","color":"vip"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://bu.dusays.com/2024/07/16/6695ebf7463be.png","color":"vip"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg","descr":"期待您的光临！","siteshot":"https://npm.elemecdn.com/akilar-friends@latest/siteshot/akilar.top.jpg","color":"vip"},{"name":"iMaeGoo’s Blog","link":"https://www.imaegoo.com","avatar":"https://source-admibrill.pages.dev/file/90015d2c90b2cd4ac99f5.png","descr":"虹墨空间站","color":"vip"},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://www.fomal.cc/assets/avatar.webp","descr":"Future is now 🍭🍭🍭","siteshot":"https://source.fomal.cc/siteshot/www.fomal.cc.webp","color":"vip"},{"name":"Eurkon","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/eurkon-cdn/hexo/images/user/avatar.jpg","descr":"及时当勉励，岁月不待人","color":"vip"},{"name":"唐志远","link":"https://fe32.top/","avatar":"https://bu.dusays.com/2022/05/02/626f92e193879.jpg","descr":"古今之成大事者，不惟有超世之才，亦必有坚忍不拔之志","screenshot":"https://bu.dusays.com/2023/07/16/64b400bf8e546.jpg","color":"vip"},{"name":"Tianli","link":"https://tianli-blog.club/","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=507249007&spec=640","descr":"自知之明是最可贵的知识！","siteshot":"https://p.zhheo.com/3lt2id24590781657704885285.jpeg!cover_siteshot"},{"name":"CyanFalse's Weblog","link":"https://blog.eurekac.cn","avatar":"https://cdn.eurekac.cn/npm/chenyfan-oss/4.0.0/files/512.jpg","descr":"I'm CyanFalse,New to Here."},{"name":"序炁的博客","link":"https://www.ordchaos.com","avatar":"https://www.ordchaos.com/img/avatar.jpg","descr":"A dragon that born in the order and chaos."},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。"},{"name":"ichika","link":"https://ichika.cc","avatar":"https://cdn.ichika.cc/page/HeadIcon.jpg","descr":"Hello,gamer!"},{"name":"小冰博客","link":"https://zfe.space","avatar":"https://zfe.space/images/headimage.png","descr":"做个有梦想的人！"},{"name":"清羽飞扬","link":"https://blog.liushen.fun/","avatar":"https://blog.liushen.fun/info/avatar.ico","descr":"柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜","siteshot":"https://blog.liushen.fun/info/siteshot.jpg"},{"name":"Ariasakaの小窝","link":"https://blog.yaria.top","avatar":"https://weavatar.com/avatar/795ce413eb6c7485954b78283ffa3e00","descr":"人有悲欢离合 月有阴晴圆缺","siteshot":"https://vercel.yaria.top/img/siteshot.png"},{"name":"Redish101","link":"https://blog.redish101.top","avatar":"https://bu.dusays.com/2024/09/01/66d3c23c16277.jpg","descr":"人文 科技 白日梦，"},{"name":"山岳库博","link":"https://kmar.top/","avatar":"https://cdn.jsdelivr.net/npm/@kmar/fonts/avatar/own.png","siteshot":"https://cdn.jsdelivr.net/npm/@kmar/fonts/sc/own.jpg","descr":"开发学习启发性二刺螈"},{"name":"轻笑Chuckle","link":"https://www.qcqx.cn","avatar":"https://www.qcqx.cn/head.webp","descr":"漫天倾尘,风中轻笑","siteshot":"https://www.qcqx.cn/qcqx.webp"},{"name":"青稚の空间","link":"https://blog.linux-qitong.top/","avatar":"https://blog.linux-qitong.top/img/avatar.avif","descr":"越努力，越幸运.","siteshot":"https://blog.linux-qitong.top/img/qingzhi.webp"},{"name":"姓王者的博客","link":"https://xingwangzhe.fun/","avatar":"https://xingwangzhe.fun/images/apple-touch-icon-next.png","descr":"记录学习生活的琐事，或者技术文章:)","siteshot":"https://i.ibb.co/Wg9zLFX/2024-10-12-133038.png"},{"name":"xyx404","link":"https://blog.qyadbr.top/link/","avatar":"https://fastly.jsdelivr.net/npm/xyx404blogphoto@1.2.23/avatar.webp","descr":"在努力和摆烂中选择了努力摆烂AWA","siteshot":"https://fastly.jsdelivr.net/npm/xyx404blogphoto@1.2.24/wzsyjt.png"},{"name":"Walter_Fang","link":"https://blog.walterfang.site/","avatar":"https://blog.walterfang.site/walterfang.jpg","descr":"正在学习与人交流 || INFJ-T || Software Developer&Rhythm Game Player || He/Him"},{"name":"bbb-lsy07","link":"https://i.bbb-lsy07.sbs/","avatar":"https://i.bbb-lsy07.sbs/upload/quality_restoration_20250211145207618.JPG","descr":"科技激荡人文，洞见智慧本真。","siteshot":"https://img.z4a.net/images/2025/02/16/2025-02-16-14.08.18.png"}];
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