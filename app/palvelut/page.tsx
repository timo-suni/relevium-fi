import React from 'react'

function Home() {
  return (
    <div className="bg-neutral-800 py-4 px-4 lg:px-8 rounded">
    <div className="text-center lg:text-left">

        <div className="max-w-full grid justify-items-center gap-y-6 items-center">
            <h1 className="text-4xl text-neutral-200 font-bold col-span-4">Palvelut</h1>

            <div className="relative col-span-4 grid grid-cols-8 gap-x-4 bg-neutral-200 justify-items-center items-center rounded-xl p-6 w-full">
                <div className="mb-6 md:mb-0 col-span-8 md:col-span-1 bg-neutral-200 w-20 h-20 flex justify-center flex-col text-center rounded-full drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
                    <h1 className="text-3xl leading-none font-bold text-neutral-800">30</h1>
                    <h2 className="text-md leading-none text-neutral-800">MIN</h2>
                </div>
                <div className="col-span-8 md:col-span-7 flex justify-center flex-col text-left md:pr-10">
                    <p className="text-neutral-800">
                      Puolen tunnin hieronnan aikana hyödynnän klassisen ja mobilisoivan hieronnan otteita rajattuun kehon alueeseen esim. niska-hartia- tai purentalihaskäsittelyyn.
                    </p>
                </div>
				<div className="absolute -top-2 -right-2 bg-emerald-400 w-16 h-16 flex justify-center flex-col text-center rounded-full drop-shadow-[0_0_10px_rgba(0,0,0,0.45)]">
					<h2 className="text-neutral-800 text-xl font-bold">35€</h2>
				</div>
            </div>

            <div className="relative col-span-4 grid grid-cols-8 gap-x-4 bg-neutral-200 justify-items-center items-center rounded-xl p-6 w-full">
                <div className="mb-6 md:mb-0 col-span-8 md:col-span-1 bg-neutral-200 w-20 h-20 flex justify-center flex-col text-center rounded-full drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
                    <h1 className="text-3xl leading-none font-bold text-neutral-800">60</h1>
                    <h2 className="text-md leading-none text-neutral-800">MIN</h2>
                </div>
                <div className="col-span-8 md:col-span-7 flex justify-center flex-col text-left md:pr-10">
                    <p className="text-neutral-800">
                    Tunnin hieronnan aikana hyödynnän klassisen ja mobilisoivan hieronnan otteita, sekä halutessasi lihashuoltovasaraa. Aika on sopiva esim. ensikertalaisen ongelmakohtiin perehtymiseen ja hoitosuunnitelman luomiseen.
                    </p>
                </div>
				<div className="absolute -top-2 -right-2 bg-emerald-400 w-16 h-16 flex justify-center flex-col text-center rounded-full drop-shadow-[0_0_10px_rgba(0,0,0,0.45)]">
					<h2 className="text-neutral-800 text-xl font-bold">45€</h2>
				</div>
            </div>

            <div className="relative col-span-4 grid grid-cols-8 gap-x-4 bg-neutral-200 justify-items-center items-center rounded-xl p-6 w-full">
                <div className="mb-6 md:mb-0 col-span-8 md:col-span-1 bg-neutral-200 w-20 h-20 flex justify-center flex-col text-center rounded-full drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
                    <h1 className="text-3xl leading-none font-bold text-neutral-800">90</h1>
                    <h2 className="text-md leading-none text-neutral-800">MIN</h2>
                </div>
                <div className="col-span-8 md:col-span-7 flex justify-center flex-col text-left md:pr-10">
                    <p className="text-neutral-800">
                    Puolentoista tunnin hieronnan aikana hyödynnän klassisien ja mobilisoivien otteiden lisäksi erilaisia lihasvenytyksiä, sekä halutessasi lihashuoltovasaraa.Aika soveltuu kokovartalohierontaan, mutta etenkin perusteelliseen ylä- tai alavartalon hierontaan.
                    </p>
                </div>
				<div className="absolute -top-2 -right-2 bg-emerald-400 w-16 h-16 flex justify-center flex-col text-center rounded-full drop-shadow-[0_0_10px_rgba(0,0,0,0.45)]">
					<h2 className="text-neutral-800 text-xl font-bold">65€</h2>
				</div>
            </div>
            <div className="relative col-span-4 h-max grid grid-cols-8 gap-x-4 bg-neutral-200 justify-items-center items-center rounded-xl p-6 w-full">
                <div className="mb-6 md:mb-0 col-span-8 md:col-span-1 bg-neutral-200 w-20 h-20 flex justify-center flex-col text-center rounded-full drop-shadow-[0_0_10px_rgba(0,0,0,0.15)]">
                      <h1 className="text-3xl leading-none font-bold text-neutral-800">120</h1>
                      <h2 className="text-md leading-none text-neutral-800">MIN</h2>
                </div>
                <div className="col-span-8 md:col-span-7 flex justify-center flex-col text-left md:pr-10">
                    <p className="text-neutral-800">
                    Kahden tunnin hieronnan aikana hyödynnän klassisen ja mobilisoivien otteiden lisäksi erilaisia lihasvenytyksiä, sekä halutessasi lihashuoltovasaraa.Aika on tarkoitettu lähinnä kokovartalohierontaan, mutta voit halutessasi itse määrittää käsiteltävät alueet.
                    </p>
                </div>
				<div className="absolute -top-2 -right-2 bg-emerald-400 w-16 h-16 flex justify-center flex-col text-center rounded-full drop-shadow-[0_0_10px_rgba(0,0,0,0.45)]">
					<h2 className="text-neutral-800 text-xl font-bold">85€</h2>
				</div>
            </div>
            <div className="col-span-4 h-max bg-neutral-200 justify-items-center items-center rounded-xl p-6 w-full">
				<h1 className="text-neutral-800 text-left text-2xl font-bold mb-4">Koti- ja työpaikkakäynnit</h1>
                <div className="flex justify-center flex-col text-left">
                    <p className="text-neutral-800 mb-2">
					Tarjoan joustavasti hierontapalveluja myös suoraan kotiisi tai työpaikallesi Lahden keskustasta 15 kilometrin säteellä. Tämä palvelu on ihanteellinen sinulle, jos arvostat aikasi tehokasta käyttöä tai haluat nauttia hieronnan rentouttavista vaikutuksista omassa tutussa ympäristössäsi.
					</p>
					<p className="text-neutral-800 mb-2">
					Koti- ja työpaikkakäyntien hintaan lisätään 15 euron matkakustannuslisä.
					</p>
					<p className="text-neutral-800">
					Jos koti- tai työpaikkakäynnistä on kysyttävää tai haluat varata ajan, ota rohkeasti yhteyttä.
					</p>
                </div>
            </div>

            
        </div>
    </div>
    </div>
  )
}

export default Home