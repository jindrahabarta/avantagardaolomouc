import React from 'react'

import Accordion from '../../Global/Accordion'

const QaA = () => {
    return (
        <section id='faq' className='pt-10 flex flex-col items-center'>
            <h1>Otázky a odpovědi</h1>
            <div className='p-4 shadow-md border border-black rounded-2xl w-full mt-4'>
                <Accordion
                    title='Jak dlouho bych měl/a poprvé zůstat v soláriu?'
                    answer='Při první návštěvě doporučujeme kratší dobu, obvykle 5–8 minut, v závislosti na typu vaší pokožky. Naši odborníci vám rádi poradí.'
                />
                <Accordion
                    title='Musím si přinést vlastní ochranné brýle?'
                    answer='Ne, ochranné brýle vám rádi zapůjčíme přímo na místě. Je ale možné si u nás zakoupit vlastní.'
                />
                <Accordion
                    title='Jak často mohu solárium navštěvovat?'
                    answer='Doporučuje se navštěvovat solárium maximálně 2–3krát týdně, s odstupem alespoň 48 hodin mezi jednotlivými návštěvami.'
                />
                <Accordion
                    title='Mohu navštívit solárium, pokud mám citlivou pokožku?'
                    answer='Pokud máte citlivou pokožku, doporučujeme konzultaci s dermatologem před návštěvou solária. V případě návštěvy zvolte kratší dobu opalování.'
                />
                <Accordion
                    title='Je potřeba používat speciální krémy do solária?'
                    answer='Ano, doporučujeme používat speciální kosmetiku určenou přímo pro opalování v soláriu, která chrání pokožku a pomáhá dosáhnout lepšího výsledku.'
                />
                <Accordion
                    title='Můžu se opalovat v soláriu, pokud mám tetování?'
                    answer='Ano, ale doporučuje se tetování chránit speciálním krémem nebo zakrýt, aby nedošlo k jeho vyblednutí.'
                />
                <Accordion
                    title='Jaké jsou kontraindikace pro návštěvu solária?'
                    answer='Solárium není vhodné pro těhotné ženy, osoby s kožními problémy, alergiemi na UV záření nebo osoby užívající léky zvyšující citlivost na světlo.'
                />
                <Accordion
                    title='Mohu přijít do solária bez předchozí rezervace?'
                    answer='Ano, většina našich poboček přijímá klienty bez rezervace, ale doporučujeme si termín raději předem domluvit, abyste měli jistotu.'
                />
                <Accordion
                    title='Jaká je minimální věková hranice pro návštěvu solária?'
                    answer='Návštěva solária je povolena osobám starším 18 let, podle legislativy České republiky.'
                />
                <Accordion
                    title='Jaké výhody má návštěva solária?'
                    answer='Návštěva solária pomáhá získat přirozené opálení, zlepšuje náladu díky produkci vitamínu D a může mírně zlepšit některé kožní problémy, jako například akné.'
                />
            </div>
        </section>
    )
}

export default QaA
