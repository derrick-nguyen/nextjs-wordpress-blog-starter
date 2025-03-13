import React from 'react'

function Introduce() {
    return (
        <div className="relative px-5 space-y-2 pb-5">
            <input type="checkbox" id="readMoreToggle" className="hidden peer" />
            <div className="max-h-20 overflow-hidden peer-checked:max-h-full transition-all duration-300 ease-in-out relative pb-7 space-y-3">
                <p><strong>Nguyễn Thanh Tuấn - Hành Trình Từ Cậu Học Sinh Đến Doanh Nhân Trẻ Tài Năng</strong></p>
                <p>Sinh năm 1999 tại Đồng Nai, Nguyễn Thanh Tuấn là một trong những thanh niên nhiệt huyết hoà vào làn sóng khởi nghiệp trẻ tại Việt Nam. Những năm 2019, khi đa phần các bạn đồng trang lứa luc này chỉ mới 20 tuổi, còn đang tận hưởng vui chơi trong những ngày tháng tuổi trẻ hoặc tìm kiếm các công việc làm thêm, Tuấn đã tự tay thành lập doanh nghiệp riêng từ khi còn là sinh viên năm nhất.</p>
                <p>Mất cha từ nhỏ, Tuấn chứng kiến mẹ của mình vất vả lo từng bữa cơm. Câu chuyện đời sống không chỉ trở thành ký ức mà còn là động lực thúc đẩy anh lao vào con đường kinh doanh như một phương pháp duy nhất để thoát khỏi khó khăn, tạo dựng cuộc sống tốt đẹp hơn.</p>
                <h3><strong>Hành Trình Tự Học, Tự Lực</strong></h3>
                <p>Tuấn xuất phát là một sinh viên ngành Truyền thông của trường Đại học Văn hoá Thành phố Hồ Chí Minh.</p>
                <p>Ngay từ những ngày đầu đại học, thay vì lựa chọn các công việc làm thêm như bán hàng hay phục vụ nhà hàng như nhiều bạn bè, Tuấn quyết tâm tìm những công việc văn phòng dù lương thấp nhưng liên quan tới chuyên môn anh đang học. Chính nhờ sự quyết tâm và tinh thần học hỏi không ngừng mà Tuấn nhanh chóng trở thành một người đi xa trong lĩnh vực Digital Performance Marketing.</p>
                <p>Tuấn bắt đầu sự nghiệp với Truyền thông, sáng lập và giữ vai trò CEO tại Ready Agency - một trong những agency Digital Marketing & Production House uy tín. Dưới sự dẫn dắt của Tuấn, Ready Agency nhanh chóng khẳng định vị thế trong ngành, cung cấp những dịch vụ tiên phong về truyền thông và quảng cáo số.</p>
                <h3><strong>Chuyển Hướng Sang Lập Tr&igrave;nh - Định Hướng Mới</strong></h3>
                <p>Sau 5 năm làm việc trong lĩnh vực Digital Marketing, Tuấn bắt đầu có một đam mê khác - đó là lập trình. Nhận thấy sự quan trọng của công nghệ và lập trình trong việc đổi mới doanh nghiệp, tối ưu hóa hiệu suất, trải nghiệm khách hàng và quản lý dữ liệu, Tuấn quyết định dành toàn bộ thời gian để học hỏi và nghiên cứu lĩnh vực này.</p>
                <p>Trong lĩnh vực lập trình mục tiêu của Tuấn là phải nhanh và mượt, hiệu suất tốt và khả năng mở rộng. Tuấn không ngại học hỏi những kiến thức, công cụ mới trong lập trình. Tinh thần không ngừng đổi mới đã giúp Tuấn nhanh chóng bắt kịp và tự nâng cấp bản thân mình trong một lĩnh vực hoàn toàn mới.</p>
                <h3><strong>Chia sẻ cùng các bạn</strong></h3>
                <p>Dù là nghèo khó hay sung sướng, dù là Digital Marketing hay Lập Trình, Tuấn nghĩ răng chính sự nỗ lực và tinh thần tự học chính là chìa khóa để đi đến thành công. Hoàn cảnh sống, ngành học hay bất cứ yếu tố bất lợi nào cũng không thể ngăn cản bạn với đam mê, chỉ cần bạn quyết tâm thì cả vũ trụ sẽ hợp lực hỗ trợ bạn.</p>
                <p>Cuối cùng, website https://thanhtuan.name.vn này là một trang blog đơn giản Tuấn dựng bằng NextJS và WordPress Headless CMS, Tuấn muốn ghi lại những kiến thức và trải nghiệm của mình như một lưu bút trong quá trình học và tìm hiểu về công nghệ.</p>
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/70 to-transparent peer-checked:hidden peer-checked:"></div>
            </div>

            <label
                htmlFor="readMoreToggle"
                className="block text-blue-600 font-semibold cursor-pointer mt-2 text-center peer-checked:hidden"
            >
                Xem thêm
            </label>

            <label
                htmlFor="readMoreToggle"
                className="hidden text-blue-600 font-semibold cursor-pointer mt-2 text-center peer-checked:block"
            >
                Thu gọn
            </label>
        </div>
    )
}

export default Introduce