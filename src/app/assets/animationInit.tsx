import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const animationInit = (path: string) => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    gsap.registerPlugin(ScrollTrigger)

    if (path === '/') {
        ScrollTrigger.create({
            trigger: '#uvod',
            start: 'top top',
            end: 'bottom top',

            onUpdate: (self) => {
                const mappedProgress = 100 + self.progress * 10

                gsap.to('#hero-image', {
                    scale: mappedProgress / 100,
                })
            },
        })
    } else if (path === '/opalovani') {
        gsap.set('.opalovaniInner', {
            y: 200,
        })

        gsap.to('.opalovaniInner', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
        })
    } else if (path === '/galerie') {
        gsap.set('#galerie', {
            y: 200,
        })

        gsap.to('#galerie', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
        })
    }
}

export default animationInit
