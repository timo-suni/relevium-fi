import Image from 'next/image'
import React from 'react'
import juho from '@/assets/images/juho.png'

function Palvelut() {
  return (
    <div id="palvelut"className="hero bg-neutral-800 py-8">
    <div className="hero-content text-center lg:text-left">
        <div className="max-w-5xl grid justify-items-center gap-y-6 items-center lg:max-w-full lg:grid-cols-4">
            <h1 className="text-4xl font-bold lg:col-span-4">Tervetuloa Releviumin verkkosivuille!</h1>
            <Image src={juho} alt="Juho" width={230} height={220} className="rounded-lg shadow-2xl lg:col-span-1" />
            <div className="lg:pl-4 lg:col-span-3">
                <p className='mb-4'>Olen Juho Heikkilä, 28-vuotias koulutettu hieroja Lahdesta. Valmistuin vuonna 2020 Lahden Hierojakoulusta ja valmistumiseni jälkeen päätin ryhtyä ammatinharjoittajaksi. Kiinnostukseni alaa kohtaan kasvaa jatkuvasti ja pyrinkin tulevaisuudessa jatkokouluttautumaan oppiakseni lisää manuaalisen terapian alalta.</p>
                <p className='mb-4'>Pitkään kamppailulajeja harrastaneena erilaiset urheilusta aiheutuvat kiputilat ja loukkaantumiset ovat tulleet tutuiksi. Urheilusta johtuvien kiputilojen tutkiminen ja hoitaminen on minulle siten luontaista. Lisäksi työperäiset kiputilat sekä tuki- ja liikuntaelinsairaudet ovat tänä päivänä hyvin tyypillisiä, ja nämä ovatkin myös erinomaisia syitä hakeutua hierojan vastaanotolle. Hieronta sopii myös kiputilojen ennaltaehkäisyyn sekä yleisen hyvinvoinnin ylläpitämiseen.</p>
                <p className='text-lg text-neutral-200 italic'>Oli tilanteesi mikä tahansa, olet aina tervetullut vastaanotolleni! -Juho</p>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Palvelut
