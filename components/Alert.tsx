import Link from 'next/link'
import React from 'react'

function Alert() {
  return (
    <div className="my-4 alert rounded-md justify-center bg-emerald-400 text-xs md:text-sm text-neutral-800 shadow-lg">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Palvelen asiakkaitani tällä hetkellä On The Spotin kautta <Link target="_blank" className="font-semibold underline" href="https://avoinna24.fi/onthespot/reservation?branch_id=053549a0-72d0-11ec-9ed3-fa163ec26693&group_id=e2233564-e692-11e5-933a-fa163e644548&product_id=f45aa622-e692-11e5-8b9c-fa163e644548&user_id=c445ef5c-0932-11ea-8444-fa163ec26693">Salpausselkä Parkissa</Link>. <br/>Koti ja työpaikkakäynneissä olethan yhteydessä minuun <Link className="font-semibold underline" href="mailto: juho@relevium.fi">sähköpostitse</Link>.</span>
        </div>
    </div>
  )
}

export default Alert
