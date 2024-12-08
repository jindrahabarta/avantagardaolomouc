import React from 'react'
import Image from 'next/image'
import img1 from '@/../public/images/img1.jpg'

const JakFunguje = () => {
    return (
        <section className='lg:h-screen mt-10 md:mt-24 lg:mt-0 flex items-center'>
            <div className='flex flex-col lg:flex-row-reverse lg:items-center gap-10 lg:gap-20'>
                <div className='flex-[3]'>
                    <h1>Jak funguje?</h1>
                    <p>
                        Trubice v soláriu stimulují slunce a vyzařují UVa a UVB
                        záření. Jdou ale ještě o krok dál, protože mají
                        kontrolovaný výkon a vyvážené spektrum záření,
                        minimalizují riziko spálení kůže a maximalizují
                        opalovací efekt! Výroba solárních trubic je neustále
                        zdokonalována a přizpůsobována novým vědeckým poznatkům
                        o UV záření.
                    </p>
                    <p>
                        Naše přirozená barva kůže je daná množstvím melaninu v
                        kůži. Existence a množství melaninu je u všech lidí
                        závislá na genetických předpokladech. Když je naše
                        pokožka vystavena UV záření začínají melanocyty-buňky
                        nacházející se hluboko v naší kůži, vytvářet více
                        malaninu. Během následujícího zhnědnutí vystupuje
                        melanin na povrch kůže a vytváří opálení. UV záření
                        způsobuje i mimo jiného i zesílení vnější vrstvy kůže,
                        čimž si naše tělo vytváří přirozenou ochranu před UV
                        zářením a před spálením kůže!
                    </p>
                    <p>
                        Lidé na Uv záření reagují různě. Snědá pokožka produkuje
                        melanin rychleji. Pokožka velmi světlých lidí obsahuje
                        melaninu velmi málo, dokonce když je tato pokožka
                        vystavena UV záření, neprodukje žádný melanin. Proto se
                        tito lidé s typem kůže 1 ani na slunci ani v soláriu.
                    </p>
                </div>
                <div className='flex-[2]'>
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

export default JakFunguje
