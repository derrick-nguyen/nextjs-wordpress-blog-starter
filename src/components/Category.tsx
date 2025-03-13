import { CategoryProps } from '@/interfaces/post'
import Link from 'next/link'
import React from 'react'

function Category({ cate }: CategoryProps) {
    return (
        <div className="flex gap-3 justify-center mb-4">
            <Link href="/"><h3 className={`${!cate || cate === "1" ? "text-dark-brand underline" : "text-light-gray"} text-center font-black uppercase text-lg lg:text-2xl`}>Tất cả</h3></Link>
            <Link href="/?category=5"><h3 className={`${cate === "5" ? "text-dark-brand underline" : "text-light-gray"} text-center font-black uppercase text-lg lg:text-2xl`}>Công nghệ</h3></Link>
            <Link href="/?category=6"><h3 className={`${cate === "6" ? "text-dark-brand underline" : "text-light-gray"} text-center font-black uppercase text-lg lg:text-2xl`}>Kinh doanh</h3></Link>
        </div>
    )
}

export default Category