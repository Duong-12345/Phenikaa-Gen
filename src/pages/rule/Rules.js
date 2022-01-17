import { Button } from "antd";
import "antd/dist/antd.css";
import "./Rules.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import {
  LikeFilled,
  FacebookFilled,
  CalendarOutlined,
  RightSquareOutlined,
} from "@ant-design/icons";

export default function Rules() {
  return (
    <div className="content_block_rule">
        <div className="title_bound"><strong className="title">
        CUỘC THI PHENIKAA'S NEXTGEN 2022: SHOW & SHINE
      </strong></div>
      <br />
      <div className="up_line">
        <span className="up_left">
          <CalendarOutlined />
          14/12/2022
        </span>
        <span className="up_right">
          <Button className="up_button">
            <LikeFilled />
            Like
          </Button>
          <Button className="up_button">
            <FacebookFilled />
            Share
          </Button>
        </span>
      </div>
      <hr />
      <div className="down_line">
        <p className="bold_back_text">
          Thực hiện Kế hoạch tổ chức thực hiện cuộc thi “PHENIKAA's NextGen
          2022: Show & Shine”, Ban tổ chức (BTC) ban hành thể lệ chi tiết cuộc
          thi như sau:
        </p>
        <p className="text_title">1. ĐỐI TƯỢNG, TIÊU CHÍ LỰA CHỌN</p>
        <p className="text_title">Đối tượng tham gia:</p>
        <ul>
          <li>
            Tất cả sinh viên hiện đang theo học tại PHENIKAA đều có thể tham gia
            cuộc thi.
          </li>
          <li>
            Thí sinh có thể tham gia 1 hoặc cả 2 hạng mục: Gương mặt và Tài năng
          </li>
        </ul>
        <p className="text_title">Tiêu chí, hình thức, yêu cầu từng hạng mục</p>
        <p className="bold_back_text">
          <RightSquareOutlined />
          Hạng mục: Gương mặt
        </p>
        <ul>
          <li>
            Tìm kiếm các gương mặt có ngoại hình ưa nhìn, tự tin thể hiện cá
            tính trước công chúng. Các thí sinh có các tài năng đặc biệt sẽ được
            nhiều lợi thế trong quá trình đánh giá từ Hội đồng giám khảo chuyên
            môn.
          </li>
          <li>Đăng ký dự thi: cá nhân theo album hình ảnh</li>
          <li>Yêu cầu:</li>
          <li className="li_children">
            Các ảnh phải có nội dung phù hợp với chủ đề cuộc thi
          </li>
          <li className="li_children">
            Thí sinh được phép dùng các phần mềm chuyên dụng để chỉnh sửa màu
            sắc, kích thước nhưng không được chèn typo vào bức ảnh, không được
            cắt ghép, thêm bớt chi tiết làm thay đổi nội dung thật của bức ảnh.
          </li>
          <li className="li_children">
            Số lượng bức ảnh: tối thiểu 08 ảnh/album đủ các cảnh toàn – trung –
            cận, ảnh chân dung và ảnh tham gia các hoạt động…
          </li>
          <li className="li_children">Ảnh có định dạng .JPEG hoặc .JPG;</li>
          <li className="li_children">
            Thí sinh dự thi hạng mục Gương mặt nhưng có tài năng đặc biệt, có
            thể gửi kèm link dự thi khi đăng ký tham gia hạng mục Gương mặt (làm
            tiêu chí ưu tiên khi BGK chấm thi), thí sinh cũng có thể đăng ký dự
            thi thêm ở hạng mục Tài năng.
          </li>
        </ul>
        <p className="bold_back_text">
          <RightSquareOutlined />
          Hạng mục: Tài năng
        </p>
        <ul>
            <li>Tìm kiếm các gương mặt tài năng và tự tin thể hiện năng khiếu trong thể thao, văn hoá, nghệ thuật…và các hình thức biểu diễn, giải trí hợp pháp khác </li>
            <li>Đăng ký dự thi: Cá nhân/nhóm (mỗi thành viên chỉ được tham gia duy nhất một nhóm) dưới hình thức video </li>
            <li>- Yêu cầu:</li>
            <li className="li_children">Video phải thể hiện rõ được tài năng cá nhân nổi trội, phù hợp với chủ đề cuộc thi, về vũ đạo, ca hát, trình diễn thể thao hoặc thuyết trình...</li>
            <li className="li_children">Thời lượng tối đa 05 phút, dung lượng dưới 500MB,</li>
            <li className="li_children">Định dạng file: .mp4, .mov (Khuyến khích định dạng file MP4, format H.264)</li>
            <li className="li_children">Tỷ lệ (ngang:dọc): 16:09 hoặc 22:09.</li>
            <li className="li_children">Chất lượng hình ảnh: 720pHD trở lên; Chất lượng âm thanh: 128kbps trở lên.</li>
            <li className="li_children">Không giới hạn số lượng bài dự thi, một cá nhân có thể dự thi nhiều tài năng khác nhau.</li>
            <li className="li_children">Nếu tham gia hình thức nhóm: số thành viên vòng 1 và vòng 2 phải cố định, không được thay đổi người.</li>
        </ul>
        <div className="button_bound"><Button className ="button">
        <Link to="/register">
          ĐĂNG KÝ NGAY
          </Link>
          </Button></div>
        
        <p className="text_title">2. CÁCH THỨC TỔ CHỨC</p>
        <p className="text_title">Vòng Sơ khảo – SHOW (04/10– 02/11/2022)</p>
        <ul>
            <li>Thí sinh truy cập website<a href="#"> www.PHENIKAA.edu.vn/PHENIKAAnextgen</a>, lựa chọn đăng ký tham gia cuộc thi tại các hạng mục: Gương mặt và Tài năng, điền đầy đủ thông tin và đính kèm link bài dự thi (album ảnh hoặc video) theo yêu cầu trong khoảng thời gian từ ngày 04 – 24/10/2022</li>
            <li>Ban tổ chức sẽ tổng hợp, thông báo qua email <a href="#">cuocthi@PHENIKAA.edu.vn</a> đến các thí sinh có bài dự thi hợp lệ, chậm nhất 24 giờ sau khi hoàn tất đăng ký và đăng tải trên website tại các hạng mục tương ứng.</li>
            <li>Bình chọn trực tiếp tại website cuộc thi. Thời gian bình chọn chính thức:  26 – 31/10/2022</li>
            <li>Kết thúc thời gian bình chọn và chấm thi từ Hội đồng Ban giám khảo sẽ chọn ra 30 thí sinh/nhóm thí sinh xuất sắc nhất, cụ thể: 20 thí sinh từ hạng mục Gương mặt (10 nam, 10 nữ);  10 thí sinh/nhóm thí sinh từ hạng mục Tài năng. Trong đó:</li>
            <li className="li_children">Hạng mục Gương mặt: 14 thí sinh có lượt bình chọn cao nhất, 6 thí sinh nhận vé vàng từ Hội đồng Giám khảo chuyên môn.</li>
            <li className="li_children">Hạng mục Tài năng: 7 thí sinh/nhóm thí sinh có lượt bình chọn cao nhất, 3 thí sinh/nhóm thí sinh nhận vé vàng từ Hội đồng Giám khảo chuyên môn.</li>
            <li>Công bố các thí sinh vào vòng trong (dự kiến): 15h00, ngày 01/11/2022.</li>
        </ul>
        <p className="text_title">Vòng chung kết – SHINE (04-27/11/2022)</p>
        <p className="bold_back_text">
          <RightSquareOutlined />
          Hạng mục Gương mặt
        </p>
        <ul>
            <li>Dựa trên danh sách 20 gương mặt được chọn từ vòng 1, Ban tổ chức (BTC) xếp đôi các thí sinh thành 10 cặp đôi nam – nữ. Các cặp đôi sau khi nhận đề bài sáng tạo cách phối quần áo để tạo ra bộ outfit cho một hoạt động quen thuộc: đến trường, chơi thể thao, dạo phố, đồng phục trường, đồng phục khoa/viện/ngành…</li>
            <li>Các cặp đôi tự bàn bạc, thống nhất concept chung (chụp riêng) và tổng hợp hình ảnh, ý nghĩa album, bản mô tả…muốn truyền tải gửi về BTC để được hỗ trợ làm album dự thi. BTC tổng hợp bài dự thi và tiến hành đăng tải, bình chọn trên fanpage “PHENIKAA - Đại học Phenikaa”.</li>
            <li>Thời gian quan trọng của vòng thi:</li>
            <li className="li_children">04/11/2022: Họp mặt thí sinh, chia cặp thi đấu và chọn đề tài thực hiện album, hình thức trực tuyến.</li>
            <li className="li_children">06 - 14/11/2022: Thời gian thí sinh thực hiện album. (Hạn cuối các cặp thí sinh gửi album dự thi về BTC để thiết kế: 16/11/2022)</li>
            <li className="li_children">20 - 27/11/2022: Đăng tải bài thi trên fanpage chính thức của PHENIKAA, tiến hành bình chọn</li>
            <li>Điểm xếp hạng (tối đa 1.000 điểm) = Điểm bình chọn (tối đa 600 điểm) + Điểm đánh giá từ Hội đồng Giám khảo chuyên môn (tối đa 400 điểm). Trong đó:</li>
            <li className="li_children">Điểm bình chọn = Tổng reaction, comment, share trên post dự thi (mỗi action này được tính 01 điểm) + Tổng lượng tiếp cận (reach) trên post dự thi. Sau đó tính ra điểm quy đổi theo cách tính: cặp thí sinh có điểm bình chọn cao nhất quy đổi thành 600 điểm, điểm cao thứ 2 quy đổi thành 550 điểm, thứ 3 là 500 điểm, cho đến cặp thí sinh có điểm bình chọn thấp nhất (thứ 12) là 50 điểm. </li>
            <li className="li_children">Điểm chuyên môn: dựa trên các bộ tiêu chí riêng về sự kết hợp của cặp đôi và ngoại hình tổng thể, gương mặt, làn da, phong cách, tài năng…Hội đồng Giám khảo chuyên môn sẽ chấm điểm độc lập trên thang điểm 400.</li>
            <li className="li_children">(*) Lưu ý: Điểm chuyên môn, Ban giám khảo sẽ chấm ở cả hai phần: (1) sự kết hợp của cặp đôi và (2) sự thể hiện cá nhân, nên điểm chung cuộc của gương mặt nam và gương mặt nữ chung cặp có thể khác nhau. Hai gương mặt nam và nữ có điểm cao nhất chung cuộc sẽ giành chiến thắng. </li>
        </ul>
        <p className="bold_back_text">
          <RightSquareOutlined />
          Hạng mục Tài năng
        </p>
        <ul>
            <li>10 thí sinh/nhóm thí sinh được chọn từ vòng 1 sẽ có buổi gặp gỡ với các mentors là các Nghệ sĩ, Giảng viên của Trung tâm Văn hóa nghệ thuật PHENIKAA để trao đổi, hướng dẫn hoàn thiện bài dự thi (có thể sử dụng bài dự thi cũ hoặc sáng tạo bài dự thi mới phù hợp)</li>
            <li>Sau đó, các thí sinh/nhóm thí sinh tham gia trình diễn trực tiếp với Hội đồng Giám khảo chuyên môn qua hình thức trực tuyến Google Meet để chấm thi, xác định thứ hạng chung cuộc.</li>
            <li>Thời gian quan trọng của vòng thi:</li>
            <li className="li_children">06/11/2022: Họp mặt thí sinh với mentors và định hướng chuyên môn, hình thức trực tuyến.</li>
            <li className="li_children">12/11/2022 (dự kiến): tổ chức chấm chung khảo, hình thức trực tuyến và livestream.</li>
        </ul>
        <div className="footer_text_bound"><p className="text_title">BTC CUỘC THI PHENIKAA's NEXTGEN 2022</p></div>
      </div>
    </div>
  );
}
