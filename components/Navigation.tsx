import Link from 'next/link'
import React from 'react'
import Ajanvaraus from './Ajanvaraus'

function Navigation() {
  return (
    <div className="sticky z-50 top-0 navbar bg-neutral-900 px-0">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-neutral-200 px-3 mr-4 hover:bg-neutral-800 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact font-semibold dropdown-content mt-2 p-2 shadow bg-neutral-900 rounded-b-lg w-52">
                <li><Link className='active:bg-neutral-600' href={"/palvelut"}>PALVELUT</Link></li>
                <li><Link className='active:bg-neutral-600' href={"/yhteystiedot"}>OTA YHTEYTTÄ</Link></li>
            </ul>
            </div>
            <Link href={"/"}><h1 className="tracking-widest font-['Jost'] text-neutral-200 text-xl">RELEVIUM</h1></Link>
        </div>
        <div className="navbar-center text-neutral-200 hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2 font-semibold">
            <li><Link className="active:bg-neutral-600" scroll={false} href={"/palvelut"}>PALVELUT</Link></li>
            <li><Link className="active:bg-neutral-600" scroll={false} href={"/yhteystiedot"}>OTA YHTEYTTÄ</Link></li>
            </ul>
        </div>
        <div className="navbar-end">
            <Ajanvaraus />
        </div>
    </div>
  )
}

export default Navigation
