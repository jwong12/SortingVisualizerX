(this["webpackJsonpalgorithms-visualization"]=this["webpackJsonpalgorithms-visualization"]||[]).push([[0],{17:function(t,e,r){t.exports=r(32)},28:function(t,e,r){},29:function(t,e,r){},30:function(t,e,r){},31:function(t,e,r){},32:function(t,e,r){"use strict";r.r(e);var o=r(0),n=r.n(o),a=r(5),s=r.n(a),c=r(4),l=r(6),i={unsortedArray:u(),startSort:!1,isArraySorted:!1,randomAlgoClicks:0};function u(){for(var t,e,r=[],o=0;o<120;o++)r.push((t=10,e=330,Math.floor(Math.random()*(e-t+1)+t)));return r}var h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SORTING_VISUALIZER_SHUFFLE_ARRAY":return Object.assign({},t,{unsortedArray:u(),startSort:!1,isArraySorted:!1});case"SORTING_VISUALIZER_RANDOMIZE_ALGO":return Object.assign({},t,{randomAlgoClicks:t.randomAlgoClicks+1,startSort:!1});case"SORTING_VISUALIZER_START_SORT":return Object.assign({},t,{startSort:!0,isArraySorted:!0});default:return t}},m=Object(l.b)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),f=(r(28),r(3)),g=r(1),p=r(2),b=r(12),y=r(13),d=r(15),S=r(14),k=r(16);function v(t){for(var e=[],r=0;r<t.length-1;r++){for(var o=r,n=r+1;n<t.length;n++)e.push([n,o]),t[n]<t[o]&&(o=n);var a=t[r];t[r]=t[o],t[o]=a,e.push([r,t[r],o,t[o]])}return e}function E(t){for(var e=[],r=0;r<t.length-1;r++)for(var o=t.length-1-r,n=0;n<o;n++){if(e.push([n,n+1]),t[n+1]<t[n]){var a=t[n];t[n]=t[n+1],t[n+1]=a,e.push([n+1,t[n+1],n,t[n]])}else e.push([n,t[n],n+1,t[n+1]]);e.push([n,n+1])}return e}function A(t){var e=[];if(t.length<=1)return t;var r=Object(f.a)(t);return function t(e,r,o,n,a){if(r===o)return;var s=Math.floor((r+o)/2);t(n,r,s,e,a),t(n,s+1,o,e,a),function(t,e,r,o,n,a){var s=e,c=e,l=r+1;if(t.length-1===o&&0===e){for(;c<=r&&l<=o;)a.push([c,l,0]),a.push([c,l,0]),n[c]<=n[l]?(a.push([s,n[c],0]),t[s++]=n[c++]):(a.push([s,n[l],0]),t[s++]=n[l++]);for(;c<=r;)a.push([c,c,0]),a.push([c,c,0]),a.push([s,n[c],0]),t[s++]=n[c++];for(;l<=o;)a.push([l,l,0]),a.push([l,l,0]),a.push([s,n[l],0]),t[s++]=n[l++]}else{for(;c<=r&&l<=o;)a.push([c,l]),a.push([c,l]),n[c]<=n[l]?(a.push([s,n[c]]),t[s++]=n[c++]):(a.push([s,n[l]]),t[s++]=n[l++]);for(;c<=r;)a.push([c,c]),a.push([c,c]),a.push([s,n[c]]),t[s++]=n[c++];for(;l<=o;)a.push([l,l]),a.push([l,l]),a.push([s,n[l]]),t[s++]=n[l++]}}(e,r,s,o,n,a)}(t,0,t.length-1,r,e),e}r(29);var O=["selectionSort","bubbleSort","mergeSort"];function R(t,e){return Math.floor(Math.random()*(e-t+1)+t)}var C=function(t){function e(t){var r;return Object(b.a)(this,e),(r=Object(d.a)(this,Object(S.a)(e).call(this,t))).selectionSort=function(){for(var t=v(r.state[r.componentRef.current].array),e=r.componentRef.current.getElementsByClassName("array-bar"),o=0,n=0,a=function(r){if(4===t[r].length)setTimeout((function(){var a=Object(p.a)(t[r],4),s=a[0],c=a[1],l=a[2],i=a[3],u=e[s].style,h=e[l].style;u.height="".concat(c,"px"),h.height="".concat(i,"px"),setTimeout((function(){e[o++].style.backgroundColor="deepskyblue"}),2),119===++n&&setTimeout((function(){e[n].style.backgroundColor="deepskyblue"}),2)}),2*r);else{var a=Object(p.a)(t[r],2),s=a[0],c=a[1],l=e[s].style,i=e[c].style;setTimeout((function(){l.backgroundColor="tomato",i.backgroundColor="tomato",setTimeout((function(){l.backgroundColor="darkkhaki",i.backgroundColor="darkkhaki"}),2)}),2*r)}},s=0;s<t.length;s++)a(s)},r.bubbleSort=function(){for(var t=E(r.state[r.componentRef.current].array),e=r.componentRef.current.getElementsByClassName("array-bar"),o=119,n=119,a=function(r){if(r%3!==1){var a=Object(p.a)(t[r],2),s=a[0],c=a[1],l=e[s].style,i=e[c].style,u=r%3!==2?"tomato":"darkkhaki";setTimeout((function(){l.backgroundColor=u,i.backgroundColor=u}),2*r/3)}else setTimeout((function(){var a=Object(p.a)(t[r],4),s=a[0],c=a[1],l=a[2],i=a[3],u=e[s].style,h=e[l].style;u.height="".concat(c,"px"),h.height="".concat(i,"px"),l!==o&&s!==o||(setTimeout((function(){e[n--].style.backgroundColor="deepskyblue"}),2),0===--o&&setTimeout((function(){e[0].style.backgroundColor="deepskyblue"}),2))}),2*r/3)},s=0;s<t.length;s++)a(s)},r.handleClickAlgoButton=function(t){var e=r.highlightAlgoButton(t);r.props.isArraySorted?r.setState(Object(g.a)({},r.componentRef.current,{array:r.getSortedArray(),algorithm:e})):r.setState(Object(g.a)({},r.componentRef.current,{array:Object(f.a)(r.props.array),algorithm:e}))},r.componentRef=n.a.createRef(),r.componentRef.current=R(0,1e6),r.state=Object(g.a)({},r.componentRef.current,{array:[],algorithm:String}),r}return Object(k.a)(e,t),Object(y.a)(e,[{key:"componentDidMount",value:function(){var t=this.highlightAlgoButton(O[R(0,O.length-1)]);this.setState(Object(g.a)({},this.componentRef.current,{array:Object(f.a)(this.props.array),algorithm:t}))}},{key:"componentDidUpdate",value:function(t,e){if(t.array!==this.props.array){for(var r=this.componentRef.current.getElementsByClassName("array-bar"),o=0;o<r.length;o++)r[o].style.backgroundColor="grey";var n=Object(f.a)(this.props.array);this.setState(Object(g.a)({},this.componentRef.current,{array:n,algorithm:e[this.componentRef.current].algorithm}))}if(t.randomAlgoClicks!==this.props.randomAlgoClicks){var a=this.highlightAlgoButton(O[R(0,O.length-1)]);this.props.isArraySorted?this.setState(Object(g.a)({},this.componentRef.current,{array:this.getSortedArray(),algorithm:a})):this.setState(Object(g.a)({},this.componentRef.current,{array:Object(f.a)(this.props.array),algorithm:a}))}if(t.startSort!==this.props.startSort&&this.props.startSort)switch(this.state[this.componentRef.current].algorithm){case O[0]:this.selectionSort();break;case O[1]:this.bubbleSort();break;case O[2]:this.mergeSort();break;default:console.error("no algorithm selected")}}},{key:"mergeSort",value:function(){for(var t=A(this.state[this.componentRef.current].array),e=this.componentRef.current.getElementsByClassName("array-bar"),r=function(r){if(r%3!==2){var o=Object(p.a)(t[r],2),n=o[0],a=o[1],s=e[n].style,c=e[a].style,l=r%3===0?"tomato":"darkkhaki";if(3!==t[r].length)setTimeout((function(){s.backgroundColor=l,c.backgroundColor=l}),2*r*3);else{var i=Object(p.a)(t[r],1)[0],u=e[i].style;setTimeout((function(){u.backgroundColor="deepskyblue"}),2*r*3)}}else{var h=Object(p.a)(t[r],2),m=h[0],f=h[1],g=e[m].style;setTimeout((function(){g.height="".concat(f,"px"),3===t[r].length&&setTimeout((function(){g.backgroundColor="deepskyblue"}),0)}),2*r*3)}},o=0;o<t.length;o++)r(o)}},{key:"highlightAlgoButton",value:function(t){for(var e=this.componentRef.current.getElementsByClassName("algo-buttons"),r=0;r<e.length;r++)t===e[r].id?(e[r].style.color="#ffffff",e[r].style.backgroundColor="#f6b93b"):(e[r].style.color="#494949",e[r].style.backgroundColor="#ffffff");return t}},{key:"getSortedArray",value:function(){for(var t=this.componentRef.current.getElementsByClassName("array-bar"),e=[],r=0;r<t.length;r++)e.push(parseInt(t[r].style.height));return e}},{key:"testSortingAlgorithms",value:function(){var t=this.props.array.sort((function(t,e){return t-e})),e=E(this.props.array.slice()),r=v(this.props.array.slice()),o=A(this.props.array.slice());console.log(t.length),console.log(e.length),console.log(r.length),console.log(o.length)}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"canvas"},n.a.createElement("div",{className:"canvas-content",ref:this.componentRef},n.a.createElement("div",{className:"array-container"},this.state[this.componentRef.current].array.map((function(t,e){return n.a.createElement("div",{className:"array-bar",key:e,style:{backgroundColor:"grey",height:"".concat(t,"px")}})})),n.a.createElement("div",{className:"static-bar",style:{height:"330px"}})),n.a.createElement("div",{className:"algo-bar"},n.a.createElement("button",{className:"algo-buttons",id:"selectionSort",onClick:function(){return t.handleClickAlgoButton(O[0])}},"SelectionSort"),n.a.createElement("button",{className:"algo-buttons",id:"bubbleSort",onClick:function(){return t.handleClickAlgoButton(O[1])}},"BubbleSort"),n.a.createElement("button",{className:"algo-buttons",id:"mergeSort",onClick:function(){return t.handleClickAlgoButton(O[2])}},"MergeSort"),n.a.createElement("button",{className:"algo-buttons"},"HeapSort"),n.a.createElement("button",{className:"algo-buttons"},"QuickSort"),n.a.createElement("button",{className:"algo-buttons"},"... Sort"),n.a.createElement("button",{className:"algo-buttons"},"... Sort"))))}}]),e}(o.Component),N=Object(c.b)((function(t){return{array:t.unsortedArray,startSort:t.startSort,randomAlgoClicks:t.randomAlgoClicks,isArraySorted:t.isArraySorted}}))(C);r(30);var j=function(t){return n.a.createElement("div",{className:"nav-bar"},n.a.createElement("h2",null,"Sorting Visualizer X"),n.a.createElement("button",{onClick:function(){return t.startSort()}},"Start"),n.a.createElement("button",{onClick:function(){return t.randomizeAlgo()}},"Randomize Algorithms"),n.a.createElement("button",{onClick:function(){return t.shuffleArray()}},"Shuffle"),n.a.createElement("button",null,"Theme"))},T=Object(c.b)(null,(function(t){return{shuffleArray:function(){t({type:"SORTING_VISUALIZER_SHUFFLE_ARRAY"})},randomizeAlgo:function(){t({type:"SORTING_VISUALIZER_RANDOMIZE_ALGO"})},startSort:function(){t({type:"SORTING_VISUALIZER_START_SORT"})}}}))(j);r(31);var _=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(T,null),n.a.createElement("div",{className:"grid"},n.a.createElement(N,null),n.a.createElement(N,null),n.a.createElement(N,null),n.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(c.a,{store:m},n.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.c509fb80.chunk.js.map