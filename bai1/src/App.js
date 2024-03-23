// import libs
import { useRef } from "react";

// import css
import "./App.css";

export default function App() {
  const mark1Ele = useRef(null);
  const mark2Ele = useRef(null);
  const avgMarkEle = useRef(null);
  const resultEle = useRef(null);
  const rankEle = useRef(null);

  const handleSubmit = () => {
    const mark1 = Number(mark1Ele.current.value);
    const mark2 = Number(mark2Ele.current.value);

    const avg = (mark1 + mark2 * 2) / 3;
    avgMarkEle.current.value = avg;

    const result = avg >= 5 ? "Được lên lớp" : "Ở lại lớp";
    resultEle.current.value = result;

    let rank;
    if (avg >= 8) rank = "Giỏi";
    else if (avg > 6.5) rank = "Khá";
    else if (avg >= 5) rank = "Trung bình";
    else rank = "Yếu";
    rankEle.current.value = rank;
  };

  return (
    <div className="App">
      <form action="/BTTH1" method="post" id="form">
        <div className="form_layout">
          <div className="title">
            <h1>KẾT QUẢ HỌC TẬP</h1>
          </div>
          <div className="form_group">
            <label htmlFor="">Điểm HK1:</label>

            <input
              className="form-control"
              type="number"
              name="mark1"
              ref={mark1Ele}
              placeholder="Nhập điểm học kỳ 1"
            />
          </div>
          <div className="form_group">
            <label htmlFor="">Điểm HK2:</label>
            <input
              className="form-control"
              type="number"
              name="mark2"
              ref={mark2Ele}
              placeholder="Nhập điểm học kỳ 2"
            />
          </div>
          <div className="form_group">
            <label htmlFor="">Điểm trung bình:</label>

            <input
              className="form-control"
              type="text"
              name="avgMark"
              disabled
              ref={avgMarkEle}
              placeholder="Kết quả điểm trung bình"
            />
          </div>
          <div className="form_group">
            <label htmlFor="">Kết quả</label>

            <input
              className="form-control"
              type="text"
              name="result"
              disabled
              ref={resultEle}
              placeholder="Kết quả"
            />
          </div>
          <div className="form_group">
            <label htmlFor="">Xếp loại học lực:</label>

            <input
              className="form-control"
              type="text"
              name="rank"
              disabled
              ref={rankEle}
              placeholder="Xếp loại học lực"
            />
          </div>
          <div className="form_group form_submit">
            <button className="btn" type="button" onClick={handleSubmit}>
            <b>Xem kết quả</b>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
