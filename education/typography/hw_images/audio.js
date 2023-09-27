let more = document.querySelector('.more');
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