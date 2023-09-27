let more = document.querySelector('.rounded_corners_2');
let audioArr = document.getElementsByTagName('audio');
console.log('audioArr')
more.addEventListener('mouseenter', ()=>
{
   audioArr[0].play() 
});
more.addEventListener('mouseleave', ()=>
{
   audioArr[0].pause(); 
   audioArr.currentTime = 0;
});