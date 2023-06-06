'use-client'
import React from 'react'
import Script from 'next/script'


function Home() {
  return (
    <div className="bg-neutral-800 py-4 px-4 lg:px-8 rounded">
      <div className="text-center lg:text-left">
      <Script
        id='vello-wizard'
        src="/vello.js"
        strategy="lazyOnload" />
      </div>
      <div id="vello-wizard"></div>
    </div>
  )
}

export default Home