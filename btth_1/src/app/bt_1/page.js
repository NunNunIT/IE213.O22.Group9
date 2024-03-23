"use client";

// import libs
import { useState } from "react";

// import css
import "./page.css";

export default function BT1Page() {
  const [inputs, setInputs] = useState({
    "avg-mark": "",
    result: "",
    ability: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(inputs => ({ ...inputs, [name]: value }))
  }

  const handelInputCheckBox = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      if (!inputs[name]) {
        setInputs(inputs => ({ ...inputs, [name]: [value] }))
      } else {
        setInputs(inputs => ({ ...inputs, [name]: [...inputs[name], value] }))
      }
    } else {
      setInputs(inputs => ({ ...inputs, [name]: inputs[name]?.filter(v => v !== value) }))
    }
  }

  const handleSelectMulti = (e) => {
    const name = e.target.name;
    const values = Array.from(e.target.selectedOptions, option => option.value);
    setInputs(inputs => ({ ...inputs, [name]: values }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs(inputs => ({
      ...inputs,
      ["avg-mark"]: (parseFloat(inputs["first-semester-mark"] ?? 0) + parseFloat(inputs["second-semester-mark"] ?? 0)) / 2
    }));
    setInputs(inputs => ({
      ...inputs,
      ["result"]: inputs["avg-mark"] >= 5 ? "Được lên lớp" : "Ở lại lớp"
    }));

    setInputs(inputs => {
      let temp = "";
      if (inputs["avg-mark"] < 5) {
        temp = "Kém";
      } else if (inputs["avg-mark"] < 7) {
        temp = "Trung bình";
      } else if (inputs["avg-mark"] < 9) {
        temp = "Giỏi";
      } else {
        temp = "Xuất sắc";
      }

      return {
        ...inputs,
        ability: temp,
      }
    })
  }

  return (
    <>
      <header>
        <h1 className="">Kết quả học tập</h1>
      </header>
      <main className="">
        <form className="" onSubmit={handleSubmit}>
          <section className="form--reservation">
            <h2 className="">Nhập thông tin điểm:</h2>
            <div className="form__row">
              <label htmlFor="form__input--first-semester-mark">Điểm học kỳ 1: </label>
              <br />
              <input
                type="text"
                id="form__input--first-semester-mark"
                name="first-semester-mark"
                placeholder="Nhập điểm học kỳ 1"
                className="form__input--first-semester-mark"
                onChange={handleInput}
              />
            </div>
            <div className="form__row">
              <label htmlFor="form__input--second-semester-mark">Điểm học kỳ 2: </label>
              <br />
              <input
                type="text"
                id="form__input--second-semester-mark"
                name="second-semester-mark"
                placeholder="Nhập điểm học kỳ 2"
                className="form__input--second-semester-mark"
                onChange={handleInput}
              />
            </div>
          </section>
          <section className="">
            <h2 className="">Kết quả hiển thị</h2>
            <div>
              <label htmlFor="form__input--avg-mark">Điểm trung bình: </label>
              <br />
              <input id="form__input--avg-mark" disabled value={inputs["avg-mark"]} />
            </div>
            <div>
              <label htmlFor="form__input--result">Kết quả: </label>
              <br />
              <input id="form__input--result" disabled value={inputs["result"]} />
            </div>
            <div>
              <label htmlFor="form__input--ability">Xếp loại học lực: </label>
              <br />
              <input id="form__input--ability" disabled value={inputs["ability"]} />
            </div>
          </section>
          <input
            type="submit"
            id="form__submit"
            value="Xem kết quả"
            className=""
          />
        </form>
      </main>
      <footer className=""></footer>
    </>
  )
}