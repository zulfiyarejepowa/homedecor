//Scroll
let scrollpos = window.scrollY;

const nav = document.querySelector(".list");
const scrollChange = 560;

const add_class_on_scroll = () => nav.classList.add("nav-fixed")
const remove_class_on_scroll = () => nav.classList.remove("nav-fixed")

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
})
//Seasons
document.getElementById('all').classList.add('all');

document.getElementById('winter').onclick = function () {
  document.querySelector('.winter-content').style.display = 'block';
  document.querySelector('.content').style.display = 'none'
  document.querySelector('#winter').classList.add('all');
  document.querySelector('#all').classList.remove('all');
  document.querySelector('#spring').classList.remove('all');
  document.querySelector('#autumn').classList.remove('all');
  document.querySelector('#summer').classList.remove('all');
}

document.getElementById('all').onclick = function () {
  document.querySelector('.winter-content').style.display = 'none';
  document.querySelector('.content').style.display = 'block';
  document.querySelector('#all').classList.add('all');
  document.querySelector('#spring').classList.remove('all');
  document.querySelector('#autumn').classList.remove('all');
  document.querySelector('#summer').classList.remove('all');
  document.querySelector('#winter').classList.remove('all');
}
document.getElementById('spring').onclick = function () {
  document.querySelector('#spring').classList.add('all');
  document.querySelector('#all').classList.remove('all');
  document.querySelector('#winter').classList.remove('all');
  document.querySelector('#autumn').classList.remove('all');
  document.querySelector('#summer').classList.remove('all');
}
document.getElementById('summer').onclick = function () {
  document.querySelector('#summer').classList.add('all');
  document.querySelector('#all').classList.remove('all');
  document.querySelector('#winter').classList.remove('all');
  document.querySelector('#autumn').classList.remove('all');
  document.querySelector('#spring').classList.remove('all');
}
document.getElementById('autumn').onclick = function () {
  document.querySelector('#autumn').classList.add('all');
  document.querySelector('#all').classList.remove('all');
  document.querySelector('#winter').classList.remove('all');
  document.querySelector('#spring').classList.remove('all');
  document.querySelector('#summer').classList.remove('all');
}
document.querySelector('.load-more-btn').onclick = function () {
  document.querySelector('.content2').style.display = 'block';
}
//Set
// let quantity = document.querySelector('#number')
// let count = quantity.value;
// console.log(count);
// function func() {
//         let plusButton = document.querySelectorAll("#plus");
//         let minusButton = document.querySelectorAll("#minus");
//         if (plusButton.onclick) {
//             count++;
//             console.log(count);
//     } else if (minusButton.onclick) {
//             count--;
//             console.log(count);
//         }
// }
document.getElementById('delete1').onclick = () => {
  document.querySelector('.description1').style.display = 'none';
  document.querySelector('.picture1').style.display = 'none'
};
document.getElementById('delete2').onclick = () => {
  document.querySelector('.description2').style.display = 'none';
  document.querySelector('.picture2').style.display = 'none'
};
document.getElementById('delete3').onclick = () => {
  document.querySelector('.description3').style.display = 'none';
  document.querySelector('.picture3').style.display = 'none'
};
document.getElementById('delete4').onclick = () => {
  document.querySelector('.description4').style.display = 'none';
  document.querySelector('.picture4').style.display = 'none'
};
document.getElementById('delete5').onclick = () => {
  document.querySelector('.description5').style.display = 'none';
  document.querySelector('.picture5').style.display = 'none'
};
document.getElementById('delete6').onclick = () => {
  document.querySelector('.description6').style.display = 'none';
  document.querySelector('.picture6').style.display = 'none'
};
document.getElementById('delete7').onclick = () => {
  document.querySelector('.description7').style.display = 'none';
  document.querySelector('.picture7').style.display = 'none'
};
document.getElementById('delete8').onclick = () => {
  document.querySelector('.description8').style.display = 'none';
  document.querySelector('.picture8').style.display = 'none'
};

//navigation
document.querySelector("#nav-more-left").onclick = function () {
  document.querySelector("#hidden-nav").style.visibility = "visible";
  document.querySelector("#nav-more-left").style.visibility = 'hidden';
  document.querySelector("#nav-item-first").style.display = 'none';
  document.querySelector("#nav-more-right").style.visibility = 'visible';
}

document.querySelector("#nav-more-right").onclick = function () {
  document.querySelector("#nav-item-first").style.display = 'block';
  document.querySelector("#hidden-nav").style.visibility = "hidden";
  document.querySelector("#nav-more-right").style.visibility = 'hidden';
  document.querySelector("#nav-more-left").style.visibility = 'visible';
}