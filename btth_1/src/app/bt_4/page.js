'use client';

// import libs
import { useState } from "react";

// import css
import "./page.css";

export default function BT4Page() {
  const [inputs, setInputs] = useState({});

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`${JSON.stringify(inputs)}`);
  // }

  return (
    <>
      <header>
        <h1 className="">Theo dõi học tập</h1>
      </header>
      <main className="">
        <form className="" action="/bt_4/result">
          <section className="form--reservation">
            <h2 className="">Thông tin chung:</h2>
            <div className="form__row">
              <label htmlFor="form__input--student-name">Họ tên học sinh: </label>
              <br />
              <input
                type="text"
                id="form__input--student-name"
                name="student-name"
                placeholder="Nhập tên học sinh"
                className="form__input--student-name"
                onChange={handleInput}
              />
            </div>
            <div className="form__row">
              <label htmlFor="form__input--teacher-name">Giáo viên phụ trách: </label>
              <br />
              <input
                type="text"
                id="form__input--teacher-name"
                name="teacher-name"
                placeholder="Nhập tên giáo viên"
                className="form__input--teacher-name"
                onChange={handleInput}
              />
            </div>
            <div className="form__row">
              <label htmlFor="form__input--class">Lớp: </label>
              <br />
              <input
                type="text"
                id="form__input--class"
                name="class"
                placeholder="Nhập tên lớp"
                className="form__input--class"
                onChange={handleInput}
              />
            </div>
            <div className="form__row">
              <label htmlFor="form__input--date">Ngày: </label>
              <br />
              <input
                type="date"
                id="form__input--date"
                name="date"
                placeholder="Nhập tên giáo viên"
                className="form__input--date"
                onChange={handleInput}
              />
            </div>
          </section>
          <section className="">
            <h2 className="">Nội dung phân công</h2>
            <div className="form__row">
              <label htmlFor="form__input--note">Những việc chưa phân công:</label>
              <br />
              <textarea id="form__input--note" name="note" rows="3" col="300"
                onChange={handleInput}
              />
            </div>
            <div className="form__row">
              <span className="">Chọn hình thức hoàn thành:</span>
              <br />
              <input
                type="checkbox"
                id="form__input--is-must-done-right-now"
                name="type"
                value="Tại lớp"
                onChange={handelInputCheckBox}
              />{" "}
              <label for="form__input--is-must-done-right-now">Những việc chưa làm sẽ được hoàn thành ngay tại lớp.</label>
              <br />
              <input
                type="checkbox"
                id="form__input--is-must-done-in-next-time"
                name="type_1"
                value="Tại nhà"
                onChange={handelInputCheckBox}
              />{" "}
              <label for="form__input--is-must-done-in-next-time">Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho giáo viên vào ngày hôm sau.</label>
            </div>
          </section>
          <input
            type="submit"
            id="form__submit"
            value="Ghi nhận"
            className=""
          />
        </form>
      </main>
      <footer className=""></footer>
    </>
  )
}