chrome.storage.local.get("web",result=>{const default_setting=`github|https://github.com/
bl_Bilibili|https://www.bilibili.com/
git_Search|https://github.com/search?q={query}
bn_Search|https://www.bing.com/search?q={query}
gg_Search|https://www.google.com/search?q={query}
bl_Search|https://search.bilibili.com/all?keyword={query}
zh_Search|https://www.zhihu.com/search?type=content&q={query}
icon_Search|https://www.iconfont.cn/search/index?searchType=icon&q={query}`;if(!result.web){chrome.storage.local.set({web:default_setting});return}function runner(wflag,param){let cmd=this.winfo.replace("{query}",param);window.open(cmd)}function acp(){return this.winfo.includes("{query}")}let webs=result.web.split("\n");webs.forEach(web=>{web=wom.splitn(web,2);addPlugin({wtype:"web",wkey:web[0],wname:web[0],winfo:web[1],run:runner,acceptParam:acp})})});