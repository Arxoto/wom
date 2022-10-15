class WomList{constructor(items=[]){this.items=items}size(){return this.items.length}isEmpty(){return this.size()===0}checkEmpty(){if(this.isEmpty())throw"list_is_empty"}}class Stack extends WomList{constructor(){super()}push(element){this.items.push(element)}pop(){this.checkEmpty();return this.items.pop()}peek(){this.checkEmpty();return this.items[this.size()-1]}}class Queue extends WomList{constructor(){super()}enqueue(element){this.items.push(element)}dequeue(){this.checkEmpty();return this.items.shift()}front(){this.checkEmpty();return this.items[0]}}function initList(params){let list=[];let tmp="";function tryPushNum(){if(!tmp)return;let zeroIndex=0;while(zeroIndex<tmp.length&&tmp[zeroIndex]==="0"){zeroIndex++}tmp=zeroIndex===tmp.length?"0":tmp.substring(zeroIndex);list.push(tmp);tmp=""}for(let i=0;i<params.length;i++){const symbol=params[i];switch(symbol){case" ":break;case"(":case")":case"+":case"-":case"*":case"/":case"%":case"^":tryPushNum();list.push(symbol);break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case".":tmp+=symbol;break;default:throw"error_precheck"}}tryPushNum();return list}function infixToPostfix(elements){let stack=new Stack;let queue=new Queue;for(let i=0;i<elements.length;i++){const s=elements[i];if(s==="("){stack.push(s);continue}if(s===")"){let pop=stack.pop();while(pop!=="("){queue.enqueue(pop);pop=stack.pop()}continue}if(s==="+"||s==="-"){if(stack.isEmpty()){stack.push(s);continue}while(!stack.isEmpty()&&stack.peek()!=="("){queue.enqueue(stack.pop())}stack.push(s);continue}if(s==="*"||s==="/"||s==="%"){if(stack.isEmpty()){stack.push(s);continue}while(!stack.isEmpty()&&stack.peek()!=="("&&stack.peek()!=="+"&&stack.peek()!=="-"){queue.enqueue(stack.pop())}stack.push(s);continue}if(s==="^"){if(stack.isEmpty()){stack.push(s);continue}while(!stack.isEmpty()&&stack.peek()==="^"){queue.enqueue(stack.pop())}stack.push(s);continue}queue.enqueue(s)}let res=[];while(!queue.isEmpty()){res.push(queue.dequeue())}while(!stack.isEmpty()){res.push(stack.pop())}return res}function evaluatePostfix(postfix){function evaluate(a,b,operator){switch(operator){case"+":return Number(a)+Number(b);case"-":return Number(a)-Number(b);case"*":return Number(a)*Number(b);case"/":return Number(a)/Number(b);case"%":return Number(a)%Number(b);case"^":return Number(a)**Number(b);default:throw"unknown_operator"}}let stack=new Stack;for(let i=postfix.length-1;i>=0;i--){stack.push(postfix[i])}let tmp=new Stack;let res="";while(!stack.isEmpty()){let pop=stack.pop();if(pop==="+"||pop==="-"||pop==="*"||pop==="/"||pop==="%"||pop==="^"){let rightValue=tmp.pop();let leftValue=tmp.pop();let sum=evaluate(leftValue,rightValue,pop);stack.push(sum);while(!tmp.isEmpty()){stack.push(tmp.pop())}continue}tmp.push(pop);res=pop}return res}function calcEval(params){return evaluatePostfix(infixToPostfix(initList(params)))}(function(){let calc={wtype:"tool",wkey:"",wname:"calc计算器"};calc.run=(wflag,param)=>{wom.copy(wflag)};calc.filter=(key,param,hasParam,input)=>{if("js".startsWith(key)||"calc"===key){try{calc.flags=calcEval(param)}catch(error){calc.flags="error"}return true}try{calc.flags=calcEval(input);return true}catch(error){calc.flags="error";return false}};addPlugin(calc)})();