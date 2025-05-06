const hamburger = document.getElementById('hamburger');
const navContent = document.getElementById('navContent');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // triggers animation
  navContent.classList.toggle('active'); // toggles menu visibility
});
// const a = [1,5,3,5,9,8]
// a[0] = 4
// // const b = 5
// // b= 6
// // console.log(b)
// console.log(a) 

// var c = 45
// {
//   var c =65
//   console.log(c)
// }
// console.log(c)
// let d = 56

// {
//   let d = 89
//   console.log(d);
  
// }
// console.log(d);
