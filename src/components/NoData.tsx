import Link from "next/link";

export default function NoData() {
    return (
        <div className="flex flex-col justify-center items-center my-20">
            <h1 className="text-4xl font-medium text-gray-800 dark:text-light-gray">Không có dữ liệu</h1>
            <Link href="/" className="bg-dark-brand text-white fill-white px-3 py-2 my-5 rounded-xl shadow">
                <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 rotate-180" version="1.1" id="Layer_1" viewBox="0 0 330 330">
                        <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z" />
                    </svg>
                    Quay lại trang chủ
                </div>
            </Link>
        </div>
    )
}