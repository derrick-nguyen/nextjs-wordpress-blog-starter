'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Footer() {
    const pathname = usePathname()
    const year = new Date().getFullYear()

    return (
        <footer className="flex flex-col justify-center items-center">
            <Link href="/" className={`${pathname !== "/" ? "" : "hidden"} bg-dark-brand text-white fill-white px-3 py-2 mb-5 rounded-xl shadow`}>
                <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 rotate-180" version="1.1" id="Layer_1" viewBox="0 0 330 330">
                        <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z" />
                    </svg>
                    Quay lại trang chủ
                </div>
            </Link>
            <div className="w-56 h-[1px] bg-gray-200"></div>
            <div className="p-5 flex flex-col justify-center">
                <div className="flex items-center justify-center mt-1 space-x-8">
                    <Link href="mailto:tuan.nt@ready-agency.com" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6" viewBox="0 0 1920 1920">
                            <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" />
                        </svg>

                    </Link>
                    <Link target='_blank' href="https://www.facebook.com/tuan.readyagency/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                            <path
                                d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                            ></path>
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="w-56 h-[1px] bg-gray-200"></div>
            <div className="w-full text-center my-3 text-dark-gray dark:text-light-gray">
                © Copyright {year}.<br className="lg:hidden" /> Ready Agency Co.,Ltd all rights reserved.
            </div>
        </footer>
    )
}

export default Footer