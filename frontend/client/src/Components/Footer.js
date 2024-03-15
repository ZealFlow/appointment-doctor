import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              HealthHub
            </p>
            <p className="ft-description">
              Tham vấn bác sĩ trực tuyến và nhận tư vấn y tế, đơn thuốc điện tử,
              gia hạn đơn thuốc và hồ sơ bệnh án chỉ trong vài phút. Dịch vụ chăm sóc
              sức khỏe theo yêu cầu ngay trong tầm tay bạn.
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Dịch vụ</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Khám tổng quát</a>
            </li>
            <li>
              <a href="#services">Khám chuyển khoa</a>
            </li>
            <li>
              <a href="#services">Khám trực tuyến</a>
            </li>
            <li>
              <a href="#services">Tư vấn bằng trí tuệ nhân tạo</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Điều khoản</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>Thông tin cơ bản</Link>
            </li>
            <li>
              <Link to={"/legal"}>Chính sách bảo mật</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Liên hệ chúng tôi</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@healthhub.com">support@healthhub.com</a>
            </li>
            <li>
              <a href="mailto:appointment@healthhub.com">
                appointment@healthhub.com
              </a>
            </li>
            <li>
              <a href="tel:+022 5454 5252">+022 5454 5252</a>
            </li>
            <li>
              <a href="tel:+022 2326 6232">+022 2326 6232</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2013-2023 HealthHub</p>
      </div>
    </div>
  );
}

export default Footer;
