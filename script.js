document.addEventListener('DOMContentLoaded',()=>{
  const slides = document.querySelectorAll('#carousel .slides img')
  const prev = document.querySelector('.carousel-btn.prev')
  const next = document.querySelector('.carousel-btn.next')
  const dots = document.querySelectorAll('.carousel-indicators .dot')
  const navToggle = document.querySelector('.nav-toggle')
  const mainNav = document.querySelector('.main-nav')
  let idx=0, timer=null

  function show(i){
    const slidesWrap = document.querySelector('#carousel .slides')
    slidesWrap.style.transform = `translateX(${-i*100}%)`
    dots.forEach(d=>d.classList.remove('active'))
    if(dots[i]) dots[i].classList.add('active')
  }
  function nextSlide(){ idx = (idx+1)%slides.length; show(idx) }
  function prevSlide(){ idx = (idx-1+slides.length)%slides.length; show(idx) }

  next.addEventListener('click',()=>{ nextSlide(); resetTimer() })
  prev.addEventListener('click',()=>{ prevSlide(); resetTimer() })

  dots.forEach(d=>d.addEventListener('click', e=>{
    idx = Number(e.currentTarget.dataset.index || 0)
    show(idx); resetTimer()
  }))

  // Pause on hover
  const carousel = document.getElementById('carousel')
  carousel.addEventListener('mouseenter', ()=> clearInterval(timer))
  carousel.addEventListener('mouseleave', ()=> startTimer())

  function startTimer(){ timer = setInterval(nextSlide,4500) }
  function resetTimer(){ clearInterval(timer); startTimer() }
  startTimer()

  // Mobile nav toggle
  navToggle.addEventListener('click', ()=>{
    mainNav.classList.toggle('open')
  })
})
