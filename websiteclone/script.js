function page1Animation(){ var tl = gsap.timeline()

tl.from('nav h1, nav h4, nav button',{
  y:-40,
  opacity:0,
  delay:1,
  duration:0.8,
  stagger:0.15
})

tl.from('.center1 h1',{
  x:-300,
  opacity:0,
  duration:0.6
})

tl.from('.center1 p',{
  x:-100,
  opacity:0,
  duration:0.4
})
tl.from('.center1 button ',{
  opacity:0,
  duration:0.4
})

tl.from('.center2 img',{
  x:50,
  opacity:0,
  duration:0.5
},'-=.3')
}
page1Animation()

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.section2',
        scroller:'body',
        markers:true,
        start:'top 50%',
        end:'top -40%',
        scrub:2,

    }
})


tl2.from('.service ', {
  y:30,
  opacity:0,
  duration:0.5
})

tl2.from('.carda',{
  x:-300,
  opacity:0,
  duration:1
},'anim')

tl2.from('.cardc',{
  x:300,
  opacity:0,
  duration:1
},'anim')

tl2.from('.cardb',{
  x:-300,
  opacity:0,
  duration:1
},'aniim')

tl2.from('.cardd',{
  x:300,
  opacity:0,
  duration:1
},'aniim')

gsap.to('.section3 h1',{
  transform:'translateX(-150%)',
  scrollTrigger:{
    trigger:'.section3',
    scroller:'body',
    markers:true,
    start:'top 0%',
    end:'top -150%',
    scrub:2,
    pin:true
  }
 
})


