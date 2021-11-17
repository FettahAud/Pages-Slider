const slides = document.querySelectorAll('.container div')
const cont = document.querySelector('.container')

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        moveToSlide(slide)
        slide.classList.contains('open') ? openSlide(slide) : setTimeout(() => openSlide(slide), 500)
    })
    window.addEventListener('resize', () => resize(slide))
    window.addEventListener('keydown', (e) => closeSlide(e, slide))
})

const moveToSlide = (slide) => {
    if (!slide.classList.contains('open')) {
        cont.scrollTo({ left: slide.offsetLeft - 220, behavior: 'smooth' })
    }
}

const openSlide = (slide) => {
    if (slide.classList.contains('open')) {
        cont.scrollTo({ left: slide.offsetLeft - 220, behavior: 'smooth' })
        slide.classList.remove('open')
    } else {
        slide.classList.add('open')
        cont.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' })
        cont.style.overflow = 'hidden'
    }
}

const resize = (slide) => {
    if (slide.classList.contains('open')) {
        cont.scrollTo({ left: slide.offsetLeft - 220, behavior: 'smooth' })
        slide.classList.remove('open')
    }
}

const closeSlide = (e, slide) => {
    if (e.keyCode === 27) {
        if (slide.classList.contains('open')) {
            if (slide.classList.contains('slide-3')) {
                cont.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' })
            } else {
                cont.scrollTo({ left: slide.offsetLeft - 220, behavior: 'smooth' })
            }
            slide.classList.remove('open')
        }
        cont.style.overflowX = 'scroll'
    }
}