var path = `M 10 100 Q 250 100 690 100`

var finalPath = 'M 10 100 Q 250 100 690 100'

var string=document.querySelector('.string')

string.addEventListener('mousemove', function(dets) {
  path = `M 10 100 Q  ${dets.x} ${dets.y} 690 100`
  gsap.to('svg path',{
    attr:{d:path},
    duration:0.3,
    ease:'power3.out'
  })
  console.log(dets.x, dets.y)
})

string.addEventListener('mouseleave', function() {
  gsap.to('svg path',{
    attr:{d:finalPath},
    duration:1.5,
    ease:'elastic.out(1,0.2)'
  })
  console.log('mouseleave')
})