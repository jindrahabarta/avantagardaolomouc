import React from 'react'
import TypeCard from '../_Components/TypeCard'

const TypyPleti = () => {
    return (
        <section className='pt-24'>
            <h1>Typy pleti</h1>
            <p>
                Jednotlivé typy pleti rozdělujeme do určitých skupin, podle toho
                jaké vlastnosti má a jak reaguje na sluneční záření:
            </p>

            <div className='grid md:grid-cols-2 gap-5 md:gap-10 mt-8'>
                <TypeCard
                    title='Velmi světlá až světlá pleť'
                    text='Tento typ pleti je velmi citlivý na UV záření a obsahuje jen
                malé množství melaninu, což způsobuje vysoké riziko spálení.
                Lidé s touto pletí mají často pihy, světlé blond nebo červenavé
                vlasy a světlé oči (zelené, modré, šedé). Pokožka se spálí velmi
                rychle a jen výjimečně a mírně zhnědne. Pro tento typ pleti je
                zásadní vyhýbat se přímému slunci, používat ochranné krémy s
                vysokým SPF 50+ a omezit opalování na minimum, ať už na slunci
                nebo v soláriu.'
                    dot={'bg-orange/50 group-hover:bg-orange/70'}
                ></TypeCard>

                <TypeCard
                    title='Světlá až světle hnědá pleť'
                    text='Pokožka tohoto typu je méně citlivá než velmi světlá pleť, ale
                stále je náchylná ke spálení. Lidé s tímto typem pleti mají
                zpravidla tmavší blond až hnědé vlasy a šedé či hnědé oči.
                Riziko spálení je střední, ale při zodpovědném opalování může
                dojít k jemnému a rovnoměrnému opálení. Doporučuje se začínat s
                kratší dobou vystavení slunci a používat krémy s SPF 20–30.
                Pokožka tohoto typu často dosahuje přirozeného lehkého opálení,
                pokud je chráněna a opalování je postupné.'
                    dot={'bg-orange/70 group-hover:bg-orange/90'}
                ></TypeCard>

                <TypeCard
                    title='Světle hnědá až tmavě hnědá pleť'
                    text='Tento typ pleti má vyšší obsah melaninu, což znamená lepší
                přirozenou ochranu proti slunečnímu záření. Lidé s tímto typem
                mají tmavě hnědé vlasy a tmavší oči. Spálení je vzácné, pokožka
                se opaluje snadno a rychle, často do hloubky. Přesto by měli
                používat opalovací krémy s SPF 15–20, zejména při delším pobytu
                na slunci nebo při intenzivním slunečním záření. Tato pleť
                dosahuje intenzivního opálení, které je dlouhodobé a rovnoměrné.'
                    dot={'bg-darkOrange/70 group-hover:bg-darkOrange/90'}
                ></TypeCard>

                <TypeCard
                    title='Tmavě hnědá až velmi tmavá pleť'
                    text=' Nejvyšší obsah melaninu dodává tomuto typu pleti silnou
                přirozenou ochranu před UV zářením. Lidé s těmito vlastnostmi
                pokožky mají černé vlasy a velmi tmavé oči. Pokožka se nikdy
                nespálí, a opaluje se rychle a rovnoměrně. I když tento typ
                pleti obvykle nepotřebuje ochranný krém v běžných podmínkách,
                při dlouhodobém nebo intenzivním slunečním záření je vhodné
                použít lehký krém s nízkým SPF (například SPF 10), aby byla
                pokožka hydratovaná a zdravá. Tento typ pleti dosahuje velmi
                tmavého odstínu opálení s minimálním úsilím.'
                    dot={'bg-darkOrange/90 group-hover:bg-darkOrange'}
                ></TypeCard>
            </div>

            {/* <table>
                <tr>
                    <th>Typ pleti</th>
                    <th>Popis</th>
                    <th>Jak reaguje</th>
                </tr>

                <tr>
                    <td>Typ pleti</td>
                    <td>Popis</td>
                    <td>Jak reaguje</td>
                </tr>
            </table> */}
        </section>
    )
}

export default TypyPleti
