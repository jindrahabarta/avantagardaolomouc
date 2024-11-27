import React from 'react'
import Image from 'next/image'
import img1 from '@/../public/images/img1.jpg'

const AboutUs = () => {
    return (
        <section id='o-nas' className='pt-24'>
            <div className='flex flex-col lg:flex-row gap-10 lg:gap-20'>
                <div className='flex-[2]'>
                    <h1>O nás</h1>
                    <p>
                        Čtyři základní živly, na kterých závisí náš život jsou
                        voda, vzduch, půda a sluneční záření. Kdybychom jeden z
                        těchto živlů neměli, přestali bychom jako lidstvo
                        existovat. Bez slunce není život! Sluneční světlo:
                        ultrafialové záření( UVC, UVb, UVA) je vyzařováno
                        sluncem a UV-trubicemi. UVC záření, které je pro lidi
                        nebezpečné, je ozónovou vrstvou v horní části atmosféry
                        a v UV trubicích, zcela odfiltrované. Část UVB záření
                        (může způsobit spálení kůže a poškození očí) UVA záření
                        dopadá na zemský povrch. Jeho síla závisí na úhlu
                        dopadu-geografické poloze, ročním období a denní době.
                        UV paprsky jsou neviditelné. O prázdninách jsou lidé
                        často vystaveni různé intenzitě slunečního záření, často
                        bez znalosti jeho aktuální sily. Více zde:
                        https://studio-avantgarda.webnode.cz/opalovani/
                    </p>
                </div>
                <div className='flex-1'>
                    <div className='w-full h-full rounded-2xl overflow-hidden'>
                        <Image
                            src={img1}
                            alt='Obrázek v sekci o nás'
                            className='object-cover w-full h-full'
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
