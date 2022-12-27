/* eslint-disable */
import '../css/title.css';
import { Link } from 'react-router-dom';

function TitleContent() {
  return (
    <div className="content">
      <div className="title_main-box">
        <h2 className="title_main-title">
          🗓<span className="title_main-title_strong">길드구직리스트</span>
        </h2>
        <Link to="/list" className="view-more">
          전체보기<i class="ri-arrow-right-circle-fill"></i>
        </Link>
      </div>
      <div className="title_box">
        <span className="title_title">지금 나에게 맞는 길드는?</span>
        <span className="title_description">
          편하게 보시라고 개발자가 한땀한땀 분류했어요!
        </span>
      </div>
    </div>
  );
}

export default TitleContent;
