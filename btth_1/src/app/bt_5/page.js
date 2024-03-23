'use client';

import { useState } from "react";

import "./page.css"

export default function BT5Page() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`${JSON.stringify(inputs)}`);
  }

  return (
    <>
      <header>
        <h1 className="">Thông tin đặt chỗ</h1>
      </header>
      <main className="">
        <form className="" action="/" method="get" onSubmit={handleSubmit}>
          <section className="form--reservation">
            <h2 className="">Thông tin cần thiết:</h2>
            <div className="form__row">
              <label htmlFor="form__input--number-quest">Số lượng khách: </label>
              <br />
              <input
                type="text"
                id="form__input--number-quest"
                name="number-quest"
                placeholder="Nhập số lượng khách"
                className="form__input--number-quest"
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
                placeholder="Nhập ngày của bữa tiệc diễn ra"
                className="form__input--date"
                onChange={handleInput}
              />
            </div>
            <div className="form__row">
              <span className="form__group-label--type">Loại tiệc:</span>
              <br />
              <span className="form__group-input--type"
                onChange={handelInputCheckBox}
              >
                <input
                  type="checkbox"
                  id="form__input--type-sang"
                  name="type"
                  value="sang"
                  className=""
                />{" "}
                <label htmlFor="form__input--type-sang">Tiệc sáng</label>
                <br />
                <input
                  type="checkbox"
                  id="form__input--type-chieu"
                  name="type"
                  value="chieu"
                  className=""
                />{" "}
                <label htmlFor="form__input--type-chieu">Tiệc chiều</label>
                <br />
                <input
                  type="checkbox"
                  id="form__input--type-toi"
                  name="type"
                  value="toi"
                  className=""
                />{" "}
                <label htmlFor="form__input--type-toi">Tiệc tối</label>
              </span>
            </div>
            <div className="form__row">
              <span className="form__group-label--location">Địa điểm:</span>
              <br />
              <span className="form__group-input--location">
                <input
                  type="radio"
                  id="form__input--location-inside"
                  name="location"
                  value="in"
                  onChange={handleInput}
                  className=""
                />{" "}
                <label htmlFor="form__input--location-inside">Trong nhà</label>
                <br />
                <input
                  type="radio"
                  id="form__input--location-outside"
                  name="location"
                  value="out"
                  onChange={handleInput}
                  className=""
                />{" "}
                <label htmlFor="form__input--location-outside">Ngoài nhà</label>
              </span>
            </div>
          </section>
          <section className="">
            <h2 className="">Thông tin người đặt</h2>
            <div>
              <label htmlFor="form__input--name">Nhập tên của quý khách: </label>
              <input
                type="text"
                id="form__input--name"
                name="name"
                placeholder="Nhập tên của quý khách"
                className=""
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="form__input--address">Địa chỉ liên lạc: </label>
              <input
                type="text"
                id="form__input--address"
                name="address"
                placeholder="Nhập địa chỉ liên lạc của bạn"
                className=""
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="form__input--range-age">Độ tuổi: </label>
              <input
                list="form__data-list--range-age"
                id="form__input--range-age"
                name="range-age"
                placeholder="Chọn độ tuổi của khách hàng"
                onChange={handleInput}
                className=""
              />
              <datalist id="form__data-list--range-age">
                <option value="Dưới 18 tuổi" />
                <option value="Từ 19 đến 34 tuổi" />
                <option value="Từ 35 đến 49 tuổi" />
                <option value="Từ 50 đến 69 tuổi" />
                <option value="Từ 70 tuổi trở lên" />
              </datalist>
            </div>
            <div>
              <span className="form__group-label--gender">Giới tính: </span>
              <br />
              <span className="form__group-input--gender"
                onChange={handleInput}
              >
                <input
                  type="radio"
                  id="form__input--gender-nam"
                  name="gender"
                  value="nam"
                  className=""
                />
                <label htmlFor="form__input--gender-nam">Nam</label>
                <br />
                <input
                  type="radio"
                  id="form__input--gender-nu"
                  name="gender"
                  value="nu"
                  className=""
                />
                <label htmlFor="form__input--gender-nu">Nữ</label>
              </span>
            </div>
          </section>
          <section className="">
            <h2 className="">Thông tin khác: </h2>
            <div>
              <label htmlFor="form__label--hear-from">
                Quý khách biết đến nhà hàng của chúng tôi qua:
                <select multiple size={3} id="form__label--hear-from"
                  name="hear-form"
                  onChange={handleSelectMulti}
                >
                  <option value="newspaper">Báo chí</option>
                  <option value="caster">Đài phát thành</option>
                  <option value="tivi">Tivi</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="form__label--note">Các yêu cầu của quý khách:</label>
              <textarea id="form__label--note" name="note" rows="3" col="30"
                onChange={handleInput}
              />
            </div>
            <div>
              <input
                type="submit"
                id="form__submit"
                value="Ghi nhận"
                className=""
              />
            </div>
          </section>
        </form >
      </main >
      <footer className=""></footer>
    </>
  )
}