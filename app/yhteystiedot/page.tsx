import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import k1 from '@images/k1.png'
import k2 from '@images/k2.png'
import k3 from '@images/k3.png'
import k4 from '@images/k4.png'
import k5 from '@images/k5.png'
import k6 from '@images/k6.png'
import k7 from '@images/k7.png'
import k8 from '@images/k8.png'

function Home() {
  return (
    <div className="bg-neutral-800 py-4 px-4 lg:px-8 rounded">
    <div className="text-center lg:text-left">

        <div className="max-w-full grid justify-items-center gap-y-6 items-center">
            <h1 className="text-4xl text-neutral-200 font-semibold lg:col-span-4">Ota yhteyttä</h1>

            <div className="text-left text-neutral-200 lg:col-span-2">
                <h2 className="font-semibold">RELEVIUM</h2>
                <p>
                  Y-tunnus: 3193558-9 <br />
                  Koulutettu hieroja Juho Heikkilä
                </p>
                <h2 className="font-semibold mt-3">Osoite</h2>
                <p>
                Proomukatu 8 A25 15140 LAHTI
                </p>
                <h2 className="font-semibold mt-3">Puhelin & WhatsApp</h2>
                <p>
                  <Link target="_blank" className="underline" href={"https://wa.me/358408472461"}>040 847 2461</Link>
                </p>
                <h2 className="font-semibold mt-3">Sähköposti</h2>
                <p>
                  <Link target="_blank" className="underline" href={"mailto: juho@relevium.fi"}>juho@relevium.fi</Link>
                </p>
            </div>

            <div className="lg:grid-cols-2">
            <div className="carousel carousel-center max-w-lg p-4 space-x-4 rounded-box">
              <div className="carousel-item">
                <Image src={k1} alt="relevium" height={300} className="rounded-lg shadow-2xl" />
              </div> 
              <div className="carousel-item">
                <Image src={k2} alt="relevium" height={300} className="rounded-lg shadow-2xl" />
              </div> 
              <div className="carousel-item">
                <Image src={k3} alt="relevium" height={300} className="rounded-lg shadow-2xl" />
              </div> 
              <div className="carousel-item">
                <Image src={k4} alt="relevium" height={300} className="rounded-lg shadow-2xl" />
              </div> 
              <div className="carousel-item">
                <Image src={k5} alt="relevium" height={300} className="rounded-lg shadow-2xl" />
              </div> 
              <div className="carousel-item">
                <Image src={k6} alt="relevium" height={300} className="rounded-lg shadow-2xl" />
              </div> 
              <div className="carousel-item">
                <Image src={k7} alt="relevium" height={300} className="rounded-lg shadow-2xl" />
              </div>
              <div className="carousel-item">
                <Image src={k8} alt="relevium" height={300} className="rounded-lg shadow-2xl" />
              </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home