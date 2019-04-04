// import _ from 'lodash/array';
// import printMe from './print.js';
import './style.css';
// import Icon from './save.png';
import { cube } from './math';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  // var element = document.createElement('div');
  var element = document.createElement('pre');
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  /* var btn = document.createElement('button');
  btn.innerHTML = 'click me!';
  btn.onclick = printMe;
  element.appendChild(btn); */
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5),
    'sum(100) :' + sum(10)
  ].join('\n\n');
  // 加载css
  element.classList.add('hello');
  // 加载图片
  /* var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon); */

  return element;
}
// 求1，2，3，4...n的和
function sum(n) {
  if(n === 1) return 1;
  return sum(n-1)+n;
}
// 1，3，5，7，9...，求第n项的值，n从0开始取值
function foo(n) {
  if(n === 0) return 1;
  return foo(n-1) + 2;
}
// console.log('foo(5) :', foo(5));
// 求1，3，5，7，9...n，求前n项的和，n从0开始取值
function sumFoo(n){
  if(n === 0) return 1;
  sumFoo(n-1)+foo(n)
}
console.log('sumFoo(4) :', sumFoo(4));
document.body.appendChild(component());

/* if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
} */