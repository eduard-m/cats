let btn = document.querySelector('.show');
    btn.onclick = function f1() {
    let e = document.getElementsByClassName('goods__card');
    for (let i=0; i<e.length; i++) {
        if (e[i].style.display == 'none') e[i].style.display = 'block';
    }
    btn.remove();
}


let scrollUp = document.querySelector('.scrollup');

function f2() {
  if (window.pageYOffset > 200) {
    scrollUp.style.opacity = '1';
  } 
  else { 
      scrollUp.style.opacity = '0';
    }
}

scrollUp.onclick = function () {
	window.scrollTo(0,0);
}
window.onscroll = f2;

// let div = document.querySelector('.content__goods');
// replacedNode = div.replaceChild(div.children[1], div.children[0]);
// div.appendChild(replacedNode);

document.querySelector('.btn-price').onclick = mySort;
function mySort() {
    let div = document.querySelector('.content__goods');
    for (let i=0; i<div.children.length; i++) {
        for (let j=i; j<div.children.length; j++) {
            if (+div.children[i].getAttribute('data-price') > +div.children[j].getAttribute('data-price')) {
                replacedNode = div.replaceChild(div.children[j], div.children[i]);
                insertAfter(replacedNode, div.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}


