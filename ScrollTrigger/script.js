gsap.from('.page1 .box',{
  scale:0,
  delay:1,
  duration:2,
  rotate:360
})
gsap.from('.page2 h2',{
  opacity:0,
  duration:2,
  x:500,
  scrollTrigger:{
    trigger:'.page2 h2',
    scroller:'body',
    markers:true,
    start: 'top 50%'
  }
})

gsap.from('.page2 h3',{
  opacity:0,
  duration:2,
  x:-500,
  scrollTrigger:{
    trigger:'.page2 h2',
    scroller:'body',
    markers:true,
    start: 'top 50%'
  }
})
gsap.from('.page3 .box',{
  scale:0,
  delay:1,
  duration:2,
  rotate:360,
  scrollTrigger:{
    trigger:'.page3 .box',
    scroller:'body',
    markers:true,
    start:'top 60%'
  }
})

gsap.to('.page4 h1',{
  transform:'translateX(-190%)',
  scrollTrigger:{
    trigger:'.page4',
    scroller:'body',
    markers:true,
    start:'top 0%',
    end:'top -150%',
    scrub:3,
    pin:true
  }
})
