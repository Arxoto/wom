(function(){function power_runner(){chrome.windows.create({focused:true,type:"popup",url:`./main/alloy/${this.getAttribute("walt")}.html`,height:this.getAttribute("walt")==="color"?90:null,width:this.getAttribute("walt")==="color"?260:null})}let default_action=[{wtype:"../pluginx-color.png",wkey:"color",run:power_runner},{wtype:"../pluginx-encode.png",wkey:"encode",run:power_runner},{wtype:"../pluginx-sn.png",wkey:"stickynotes",run:power_runner}];const fixedBox=document.getElementById("fixedBox");default_action.forEach(plugin=>{let icon=document.createElement("w-itex");icon.setAttribute("wsrc",plugin.wtype);icon.setAttribute("walt",plugin.wkey);icon.onclick=power_runner;fixedBox.appendChild(icon)})})();