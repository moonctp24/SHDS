import type { NextPage } from "next";
import style from "./MainComp.module.css";

const MainComp: NextPage = () => {
  return (
    <>
      <div className="mainContentsLayout">
        <div className="mainPageContentsArea">
          <div className={style.mainPageButtonList}>
            <div className={style.buttonLayout}>
              <button className="btn_white">대시보드</button>
            </div>
            <div className={style.buttonLayout}>
              <button className="btn_white">회원관리</button>
            </div>
            <div className={style.buttonLayout}>
              <button className="btn_white">의약품관리</button>
            </div>
            <div className={style.buttonLayout}>
              <button className="btn_white">관리자설정</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComp;
