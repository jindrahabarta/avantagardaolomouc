import React from 'react'
import Image from 'next/image'
import img1 from '@/../public/images/img1.jpg'

const OpalovaniUvod = () => {
    return (
        <section className='lg:h-screen flex items-center'>
            <div className='flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20'>
                <div className='opalovaniInner md:opacity-0 flex-[3]'>
                    <h1>Opalování</h1>
                    <p>
                        Správné a bezpečné opalování přináší řadu zdravotních
                        výhod. UV záření dokáže stimulovat imunitní systém,
                        zlepšovat stav pokožky (například při akné, ekzémech či
                        lupénce) a přispívá k tvorbě vitaminu D, který je
                        důležitý pro zdraví kostí a imunitu. Opalování také
                        působí protistresově, zvyšuje tělesnou výkonnost a může
                        sloužit jako prevence proti nachlazení a chřipce.
                    </p>
                    <p>
                        Ať už se rozhodnete pro opalování na slunci nebo v
                        soláriu, je důležité znát svůj typ pleti a přistupovat k
                        opalování s respektem a mírou. Bezpečné opalování
                        zahrnuje nejen správnou přípravu pokožky, ale také
                        dodržování doporučených intervalů a používání speciální
                        kosmetiky. Při zodpovědném přístupu se můžete těšit
                        nejen na krásné opálení, ale také na pozitivní přínosy
                        pro vaše zdraví a celkovou pohodu.
                    </p>
                </div>
                <div className='opalovaniInner md:opacity-0 flex-[2]'>
                    <div className='w-full lg:h-[400px] rounded-2xl overflow-hidden'>
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

export default OpalovaniUvod
