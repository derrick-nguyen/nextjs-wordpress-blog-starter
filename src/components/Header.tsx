// import Image from 'next/image'
// import Link from 'next/link'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header className="flex flex-col justify-center items-center w-full my-7">
            <Link href="/">
                <Image className="w-56 h-auto dark:hidden" src="/img/logo/thanhtuan-logo-color-300px.png" width={300} height={100} alt="Logo Thanh Tuấn" />
                <Image className="w-56 h-auto hidden dark:block" src="/img/logo/thanhtuan-logo-black-300px.png" width={300} height={100} alt="Logo Thanh Tuấn" />
            </Link>
            <h1 className="hidden">Thanh Tuấn - Fullstack Developer</h1>
            <h2 className="mt-5 text-dark-gray mx-auto text-center dark:text-white">Full-stack developer and <br className="lg:hidden" /> community builder from Vietnam 🇻🇳</h2>
            <div className="flex gap-3 mt-2">
                <Link href="https://www.ready-agency.com/" target="_blank"><div className="px-3 py-1 bg-slate-100 rounded-2xl text-dark-brand">@Ready_Agency</div></Link>
                <Link href="https://aivi.ai.vn/vi" target="_blank"></Link><div className="px-3 py-1 bg-slate-100 rounded-2xl text-dark-brand">@AIVI</div>
            </div>
        </header>
    )
}

export default Header