import Image from 'next/image'
import React from 'react'

export default function HeroImg() {
    return (
        <div className="hidden lg:block">
            <section className="w-full lg:w-2/3 absolute -left-1 lg:left-1/2 lg:-translate-x-1/2 flex gap-2 lg:gap-5 group hover:rotate-0 lg:mt-4 drop-shadow-lg">
                <Image className="w-1/3 rounded-2xl transition-transform duration-300 group-hover:rotate-0 -rotate-3"
                    src="https://cms.thanhtuan.name.vn/wp-content/uploads/2025/03/001.webp" width={600} height={400} alt="Image 1" />
                <Image className="w-1/3 rounded-2xl transition-transform duration-300 group-hover:rotate-0 rotate-2"
                    src="https://cms.thanhtuan.name.vn/wp-content/uploads/2025/03/002.webp" width={600} height={400} alt="Image 2" />
                <Image className="w-1/3 rounded-2xl transition-transform duration-300 group-hover:rotate-0 -rotate-2"
                    src="https://cms.thanhtuan.name.vn/wp-content/uploads/2025/03/004.webp" width={600} height={400} alt="Image 3" />
            </section>
        </div>
    );
}