import Image from 'next/image'
import React from 'react'
import juho from '@assets/images/juho.png'

function Home() {
  return (
    <div className="bg-neutral-800 py-4 px-4 lg:px-8 rounded">
      <div className="text-center lg:text-left">
          <div className="max-w-4xl grid justify-items-center gap-y-6 items-center lg:max-w-full lg:grid-cols-4">
              <h1 className="text-4xl text-neutral-200 font-semibold lg:col-span-4">Tervetuloa Releviumin verkkosivuille!</h1>
              <Image src={juho} alt="Juho" width={230} height={220} className="rounded-lg shadow-2xl lg:col-span-1" />
              <div className="lg:pl-4 text-neutral-300 lg:col-span-3">
                  <p className='mb-4'>Olen Juho Heikkilä, 29-vuotias koulutettu hieroja Lahdesta. Valmistuin vuonna 2020 Lahden Hierojakoulusta ja valmistumiseni jälkeen päätin ryhtyä ammatinharjoittajaksi. Kiinnostukseni alaa kohtaan kasvaa jatkuvasti ja opiskelenkin osteopatiaa Ortopedisen Osteopatian Koulutuskeskuksessa.</p>
                  <p className='mb-4'>Pitkään kamppailulajeja harrastaneena erilaiset urheilusta aiheutuvat kiputilat ja loukkaantumiset ovat tulleet tutuiksi. Urheilusta johtuvien kiputilojen tutkiminen ja hoitaminen on minulle siten luontaista. Lisäksi työperäiset kiputilat sekä tuki- ja liikuntaelinsairaudet ovat tänä päivänä hyvin tyypillisiä, ja nämä ovatkin myös erinomaisia syitä hakeutua hierojan vastaanotolle. Hieronta sopii myös kiputilojen ennaltaehkäisyyn sekä yleisen hyvinvoinnin ylläpitämiseen.</p>
                  <p className='text-lg font-semibold text-neutral-200 italic'>Oli tilanteesi mikä tahansa, olet aina tervetullut vastaanotolleni! -Juho</p>
              </div>
              
          </div>
      </div>
    </div>
  )
}

export default Home
