var t=document.querySelector(".spider"),e=document.querySelector(".wall");e.addEventListener("click",function(i){var l=e.getBoundingClientRect(),n={top:event.clientY-l.top-e.clientTop-t.clientHeight/2,left:event.clientX-l.left-e.clientLeft-t.clientWidth/2};n.top<0&&(n.top=0),n.left<0&&(n.left=0),n.left+t.clientWidth>e.clientWidth&&(n.left=e.clientWidth-t.clientWidth),n.top+t.clientHeight>e.clientHeight&&(n.top=e.clientHeight-t.clientHeight),t.style.left=n.left+"px",t.style.top=n.top+"px"});
//# sourceMappingURL=index.236d77cb.js.map