import React, { useState } from "react";

import "./App.css";

export default function App() {
  const [semester1Score, setSemester1Score] = useState("");
  const [semester2Score, setSemester2Score] = useState("");
  const [averageScore, setAverageScore] = useState(null);
  const [result, setResult] = useState("");
  const [promotion, setPromotion] = useState("");

  const handleCalculateResult = (event) => {
    event.preventDefault();
    console.log("Calculate result");
    if (
      Number.isNaN(semester1Score) ||
      Number.isNaN(semester2Score) ||
      !semester1Score.trim() ||
      !semester2Score.trim()
    )
      return;

    var average = (Number(semester1Score) + Number(semester2Score) * 2) / 3;
    var result, promotion;
    result = average >= 5 ? "Được lên lớp" : "Ở lại lớp";

    if (average < 5) promotion = "Yếu";
    else if (average < 6.5) promotion = "Trung bình";
    else if (average < 8) promotion = "Khá";
    else promotion = "Giỏi";

    setAverageScore(average);
    setResult(result);
    setPromotion(promotion);
  };

  return (
    <main>
      <form className="form" method="POST" action="/">
        <div className="form__header">
          <h1 className="form__title">Kết quả học tập</h1>
        </div>
        <div className="form__content">
          <div className="form__group">
            <label className="form__label" htmlFor="semester1">
              Điểm HK1:
            </label>
            <input
              className="form__input"
              id="semester1"
              type="text"
              value={semester1Score}
              onChange={(e) => setSemester1Score(e.target.value)}
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="semester2">
              Điểm HK2:
            </label>
            <input
              className="form__input"
              id="semester2"
              type="text"
              value={semester2Score}
              onChange={(event) => setSemester2Score(event.target.value)}
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="average">
              Điểm trung bình:
            </label>
            <input
              className="form__input readOnly"
              id="average"
              readOnly
              type="text"
              value={averageScore}
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="result">
              Kết quả:
            </label>
            <input
              className="form__input readOnly"
              id="result"
              readOnly
              type="text"
              value={result}
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="promotion">
              Xếp loại học lực:
            </label>
            <input
              className="form__input readOnly"
              id="promotion"
              readOnly
              type="text"
              value={promotion}
            />
          </div>
          <div className="form__group">
            <button className="form__btn" onClick={handleCalculateResult}>
              Xem kết quả
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
