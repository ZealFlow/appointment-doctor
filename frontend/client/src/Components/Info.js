import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Sứ mệnh của chúng tôi</span>
        </h3>
        <p className="info-description">
          Chúng tôi mang đến dịch vụ chăm sóc sức khỏe tiện lợi, cung cấp đầy đủ các dịch vụ y tế theo yêu cầu, phù hợp với nhu cầu của bạn.
          Nền tảng của chúng tôi cho phép bạn kết nối với các bác sĩ trực tuyến giàu kinh nghiệm, những người sẽ tư vấn y tế chuyên môn,
          kê đơn thuốc điện tử nhanh chóng bất cứ khi nào bạn cần.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Hỗ trợ y tế khẩn cấp"
          description="Dịch vụ Chăm sóc Khẩn cấp của chúng tôi được thiết kế để trở thành sự hỗ trợ đáng tin cậy của bạn trong những tình huống nguy cấp. 
          Cho dù đó là bệnh đột ngột, chấn thương, hoặc bất kỳ vấn đề y tế nào cần được chăm sóc ngay lập tức, 
          đội ngũ các chuyên gia y tế tận tâm của chúng tôi luôn sẵn sàng 24/7 để cung cấp dịch vụ chăm sóc nhanh chóng và hiệu quả."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Bệnh tim mạch"
          description="Đội ngũ bác sĩ tim mạch giàu kinh nghiệm và chuyên gia y tế của chúng tôi sử dụng công nghệ tiên tiến nhất để đánh giá sức khỏe tim mạch của bạn và xây dựng các phác đồ điều trị cá nhân hóa. 
          Bắt đầu từ việc tầm soát toàn diện cho đến các can thiệp chuyên sâu, chúng tôi cam kết giúp bạn duy trì một trái tim khỏe mạnh và tận hưởng cuộc sống trọn vẹn."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Chăm sóc răng"
          description="Tỏa sáng nụ cười rạng rỡ với dịch vụ Chăm sóc Răng miệng của chúng tôi, đáp ứng mọi nhu cầu về sức khỏe răng miệng của bạn. 
          Đội ngũ nha sĩ giàu kinh nghiệm của chúng tôi cung cấp nhiều phương pháp điều trị, từ kiểm tra và vệ sinh răng miệng định kỳ đến các thủ 
          thuật thẩm mỹ và phục hồi răng."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
