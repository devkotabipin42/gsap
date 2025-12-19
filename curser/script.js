var main =document.querySelector('.main')
var curser =document.querySelector('.curser')
var imgsD = document.querySelector('.img')

main.addEventListener('mousemove',function(dets){
  gsap.to(curser,{
    x:dets.x,
    y:dets.y,
    duration:1,
    ease:'back.out',

  })
// curser.style.left=`${dets.x}px`
// curser.style.top=`${dets.y}px`
})

imgsD.addEventListener('mouseenter',function(){
  curser.innerHTML='View more'
  gsap.to(curser,{
    scale:2,
    backgroundColor:'rgba(251, 248, 248, 0.441)',
    curser:'none'

  })
})
imgsD.addEventListener('mouseleave',function(){
  curser.innerHTML=''
  gsap.to(curser,{
    scale:1,
    backgroundColor:'#fff'

  })
})