import Link from 'next/link'
import React from 'react'

function Navigation() {
  return (
    <div className="sticky z-50 top-0 navbar bg-neutral-900 px-0">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-neutral-200 px-3 mr-4 hover:bg-neutral-800 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact font-semibold dropdown-content mt-2 p-2 shadow bg-neutral-900 rounded-b-lg w-52">
                <li><Link className='active:bg-neutral-600' href={"#palvelut"}>PALVELUT</Link></li>
                <li><Link className='active:bg-neutral-600' href={"/"}>HINNASTO</Link></li>
                <li><Link className='active:bg-neutral-600' href={"/"}>AJANVARAUS</Link></li>
                <li><Link className='active:bg-neutral-600' href={"/"}>YHTEYSTIEDOT</Link></li>
            </ul>
            </div>
            <Link href={"/"}><h1 className="tracking-widest font-['Jost'] text-neutral-200 text-xl">RELEVIUM</h1></Link>
        </div>
        <div className="navbar-center text-neutral-200 hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold">
            <li><Link scroll={false} href={"#palvelut"}>PALVELUT</Link></li>
            <li><Link scroll={true} href={"/"}>HINNASTO</Link></li>
            <li><Link scroll={true} href={"/"}>YHTEYSTIEDOT</Link></li>
            </ul>
        </div>
        <div className="navbar-end">
            <Link href={"/"} className="btn btn-sm bg-emerald-400 hover:bg-emerald-600 text-neutral-900 hover:text-neutral-200 font-bold">Varaa aika</Link>
        </div>
    </div>
  )
}

export default Navigation
