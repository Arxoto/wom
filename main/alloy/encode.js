const title=document.getElementById("title");const input=document.getElementById("input");const behavior=document.getElementById("behavior");const box=document.getElementById("box");let behaviors=[{name:"斜杠转义",actions:[{name:"斜杠转义",on:getAllSlash}]},{name:"代码风格转换",actions:[{name:"代码风格转换",on:getAllCodeStyle}]},{name:"编码解码",actions:[{name:"自动编码",on:getAutoEncode},{name:"unicode解码",on:decodeUni},{name:"url解码",on:getAutoDecodeUri}]}];for(let i=0;i<behaviors.length;i++){let button=document.createElement("button");button.id="behavior"+i;button.innerText=behaviors[i].name;button.onclick=()=>{input.select();initBehavior(i)};behavior.appendChild(button)}initBehavior(0);input.select();function initBehavior(behaviorN){behavior.childNodes.forEach(node=>{node.className=""});document.getElementById("behavior"+behaviorN).className="active";let actionDom=document.getElementById("action");actionDom&&actionDom.remove();actionDom=document.createElement("div");actionDom.id="action";box.appendChild(actionDom);let contentDom=document.getElementById("content");contentDom&&contentDom.remove();const actions=behaviors[behaviorN].actions;for(let i=0;i<actions.length;i++){const action=actions[i];let button=document.createElement("button");button.innerText=action.name;button.onclick=()=>initAction(action);actionDom.appendChild(button)}initAction(actions[0])}function initAction(action){input.select();title.innerText=action.name;const show=()=>{res=action.on(input.value);initContent(res)};input.oninput=show;input.value&&show()}function initContent(res){let contentDom=document.getElementById("content");contentDom&&contentDom.remove();contentDom=document.createElement("div");contentDom.id="content";box.appendChild(contentDom);for(let i=0;i<res.length;i++){let p=document.createElement("h1");p.innerText=res[i];p.onclick=()=>{navigator.clipboard.writeText(res[i]).then(()=>{addMessage("copy suc: "+res[i])},()=>{addMessage("copy fail")})};contentDom.appendChild(p)}}function addMessage(str){let p=document.createElement("h2");p.innerText=str;p.className="msg";document.body.appendChild(p);setTimeout(()=>{p.remove()},1e3)}