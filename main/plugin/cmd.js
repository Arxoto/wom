(function(){function power_runner(wflag,param){wom.asyi("asyi://power/"+this.flags)}let default_action=[{wtype:"cmd",wkey:"power_XM_Hibernate",wname:"power_XM",flags:"hibernate",run:power_runner},{wtype:"cmd",wkey:"power_GJ_Shutdown",wname:"power_GJ",flags:"shutdown",run:power_runner},{wtype:"cmd",wkey:"power_CQ_Restart",wname:"power_CQ",flags:"restart",run:power_runner}];default_action.forEach(plugin=>{addPlugin(plugin)})})();chrome.storage.local.get("cmd",result=>{const default_setting=`ipconfig|ipconfig
portSearch|netstat -ano|findstr {query}
portFindPid|tasklist|findstr {query}
portKillPid|taskkill /pid {query} /f /t`;if(!result.cmd){chrome.storage.local.set({cmd:default_setting});return}function runner(wflag,param){let cmd=this.winfo.replace("{query}",param);wom.copy(cmd);wom.asyi("asyi://open_cmd/")}function acp(){return this.winfo.includes("{query}")}let cmds=result.cmd.split("\n");cmds.forEach(cmd=>{cmd=wom.splitn(cmd,2);addPlugin({wtype:"cmd",wkey:cmd[0],wname:cmd[0],winfo:cmd[1],run:runner,acceptParam:acp})})});