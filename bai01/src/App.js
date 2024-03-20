// import libs
import { useRef } from "react"

// import css
import "./App.css";

export default function App() {
  const point1Ele = useRef(null);
  const point2Ele = useRef(null);
  const pointAvgEle = useRef(null);
  const resultEle = useRef(null);
  const rankEle = useRef(null);

  const handleSubmit = () => {
    const point1 = Number(point1Ele.current.value);
    const point2 = Number(point2Ele.current.value);

    const avg = (point1 + point2 * 2) / 3;
    pointAvgEle.current.value = avg;

    const result = avg >= 5 ? "Được lên lớp" : "Ở lại lớp";
    resultEle.current.value = result;

    let rank;
    if (avg >= 8)
      rank = "Giỏi";
    else if (avg > 6.5)
      rank = "Khá";
    else if (avg >= 5)
      rank = "Trung bình";
    else
      rank = "Yếu";
    rankEle.current.value = rank;
  }

  return (
    <form action="/BTTH1" method="post" id="form">
      <div className="form__title">KẾT QUẢ HỌC TẬP</div>
      <div className="form__content">
        <div className="form__row">
          <div className="form__row-text">Điểm HK1:</div>
          <div className="form__row-text-field">
            <input type="number" ref={point1Ele} />
          </div>
        </div>
        <div className="form__row">
          <div className="form__row-text">Điểm HK2:</div>
          <div className="form__row-text-field">
            <input type="number" ref={point2Ele} />
          </div>
        </div>
        <div className="form__row">
          <div className="form__row-text">Điểm trung bình:</div>
          <div className="form__row-text-field">
            <input type="text" disabled ref={pointAvgEle} />
          </div>
        </div>
        <div className="form__row">
          <div className="form__row-text">Kết quả</div>
          <div className="form__row-text-field">
            <input type="text" disabled ref={resultEle} />
          </div>
        </div>
        <div className="form__row">
          <div className="form__row-text">Xếp loại học lực:</div>
          <div className="form__row-text-field">
            <input type="text" disabled ref={rankEle} />
          </div>
        </div>
        <div className="form__row form__submit">
          <button className="form__submit-btn" type="button" onClick={handleSubmit}>
            Xem kết quả
          </button>
        </div>
      </div>
    </form>
  );
}
