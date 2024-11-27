import { gsap } from 'gsap/dist/gsap'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const animationInit = () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    gsap.registerPlugin(ScrollTrigger)

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
}

export default animationInit
