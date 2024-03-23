import React, { useState } from "react";
import { format } from "date-fns";

import "./App.css";

const partyTypes = [
  {
    id: 0,
    name: "Tiệc sáng",
  },
  {
    id: 1,
    name: "Tiệc trưa",
  },
  {
    id: 2,
    name: "Tiệc tối",
  },
];

const locationTypes = [
  {
    id: 0,
    name: "Trong nhà",
  },
  {
    id: 1,
    name: "Ngoài trời",
  },
];

const ages = [
  {
    id: 0,
    name: "Dưới 18 tuổi",
  },
  {
    id: 1,
    name: "Từ 19 đến 34 tuổi",
  },
  {
    id: 2,
    name: "Trên 35 tuổi",
  },
];

const genders = [
  {
    id: 0,
    name: "Nam",
  },
  {
    id: 1,
    name: "Nữ",
  },
];

const options = ["Báo chí", "Đài phát thanh", "Tivi"];

function App() {
  const [numberOfGuest, setNumberOfGuest] = useState("");
  const [startDate, setStartDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [selectedPartyTypes, setSelectedPartyTypes] = useState([]);
  const [selectedLocationType, setSelectedLocationType] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setGender] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [anotherReq, setAnotherReq] = useState("");
  const [display, setDisplay] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };


  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selectedOptions);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Cập nhật state với thông tin từ biểu mẫu
    setNumberOfGuest(event.target.querySelector("#participant").value);
    setStartDate(event.target.querySelector("#time").value);
    const selectedPartyTypes = Array.from(
      event.target.querySelectorAll('input[name="kindParty"]:checked'),
      (checkbox) => parseInt(checkbox.id.slice(-1))
    );
    setSelectedPartyTypes(selectedPartyTypes);

    const selectedLocationType = Array.from(
      event.target.querySelectorAll('input[name="typeLocation"]:checked'),
      (radio) => parseInt(radio.id.slice(-1))
    )[0];

    setSelectedLocationType(selectedLocationType);
    setName(event.target.querySelector("#name").value);
    setAddress(event.target.querySelector("#address").value);
    setSelectedAge(event.target.querySelector("#age").selectedOptions[0].value);
    setGender(
      event.target.querySelector('input[name="typeGender"]:checked').value
    );
    setDisplay(1); // Hiển thị kết quả
  };

  return (
    <div className="App">
      <div className="form_layout">
        <div className="title">
          <h1>THÔNG TIN ĐẶT CHỖ</h1>
        </div>
        <form
          action="booking"
          method="POST"
          className="form_body"
          onSubmit={onSubmitHandler}
        >
          <div className="form_first_content">
            <div className="flex_form_group">
              <label className="label--red" htmlFor="participant">
                Số khách tham dự bữa tiệc của quý khách:
              </label>
              <input
                className="form_control count"
                type="text"
                id="participant"
                value={numberOfGuest}
                onChange={(e) => setNumberOfGuest(e.target.value)}
              />
            </div>
            <div className="flex_form_group">
              <label className="label--red" htmlFor="time">
                Ngày
              </label>
              <input
                id="time"
                type="date"
                className="form_control"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>

          <div className="flex_form_group">
            <label htmlFor="kindParty">Loại tiệc: </label>
            {partyTypes.map((type) => (
              <div className="gap-5" key={type.id}>
                <input
                  type="checkbox"
                  id={"party" + type.id}
                  name="kindParty"
                />
                <label htmlFor={"party" + type.id}>{type.name}</label>
              </div>
            ))}
          </div>

          <div className="flex_form_group">
            <label htmlFor="typeLocation">Địa điểm: </label>

            {locationTypes.map((type) => (
              <div className="gap-5" key={type.id}>
                <input
                  type="radio"
                  id={"location" + type.id}
                  name="typeLocation"
                />
                <label htmlFor={"location" + type.id}>{type.name}</label>
              </div>
            ))}
          </div>

          <div className="form_group">
            <div className="flex_form_group">
              <label htmlFor="name">Tên quý khách: </label>
              <input className="form_control" type="text" id="name" placeholder="Nhập tên quý khách"/>
            </div>

            <div className="flex_form_group">
              <label htmlFor="address">Địa chỉ liên lạc: </label>
              <input className="form_control" type="text" id="address" placeholder="Nhập địa chỉ"/>
            </div>
          </div>

          <div className="form_group">
            <div className="flex_form_group">
              <label htmlFor="age">Độ tuổi: </label>
              <select id="age">
                {ages.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex_form_group">
              <p>Giới tính: </p>
              {genders.map((type) => (
                <div className="gap-5" key={type.id}>
                  <input
                    type="radio"
                    id={"gender" + type.id}
                    name="typeGender"
                    value={type.id}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <label htmlFor={"gender" + type.id}>{type.name}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex_form_group">
            <label htmlFor="source">
              Quý khách biết đến nhà hàng của chúng tôi qua: &nbsp;
            </label>
            <select
              id="source"
              multiple
              value={selectedOptions}
              onChange={handleSelectChange}
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="requirement">Các yêu cầu khác của quý khách:</label>
            <textarea
              id="requirement"
              cols="30"
              rows="10"
              spellCheck={false}
              onChange={(e) => {
                setAnotherReq(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="form_submit">
            <button className="btn" type="submit">
              Đặt chỗ
            </button>
          </div>
        </form>
      </div>

      {display === 1 ? (
        <div className="form_layout">
          <div className="title">
            <h1>THÔNG TIN ĐẶT CHỖ</h1>
          </div>
          <div className="form_result">
            <div>
              <h3>Thông tin khách hàng</h3>
              <p>
                Họ tên: {capitalizeFirstLetter(name)} - Độ tuổi: &nbsp;
                {ages.find((age) => age.id === parseInt(selectedAge))?.name} /
                Giới tính: &nbsp;
                {
                  genders.find(
                    (genderObj) => genderObj.id === parseInt(selectedGender)
                  )?.name
                }
              </p>
            </div>

            <p>Địa chỉ: {capitalizeFirstLetter(address)}</p>

            <h3>Thông tin đặt chỗ</h3>
            <p>
              Số khách hàng tham gia buổi tiệc: {numberOfGuest} - Ngày đặt tiệc:
              &nbsp; {format(startDate, "dd/MM/yyyy")}
            </p>

            <p>
              Loại tiệc: &nbsp;
              {selectedPartyTypes.map((partyTypeId, index) => (
                <span key={partyTypeId}>
                  {index > 0 && ", "}
                  {partyTypes.find((type) => type.id === partyTypeId)?.name}
                </span>
              ))}
              / Địa điểm: &nbsp;
              {
                locationTypes.find((type) => type.id === selectedLocationType)
                  ?.name
              }
            </p>

            <h3>Các yêu cầu kèm theo:</h3>
            <p style={{ whiteSpace: "pre-line" }}>{anotherReq}</p>

            <p style={{ textAlign: "center" }}>
              <i>Quý khách biết đến nhà hàng chúng tôi qua:</i> &nbsp;
              {selectedOptions.join(", ")}
            </p>
            <p style={{ textAlign: "center" }}>
              Chúng tôi đã nhận được thông tin đặt chỗ của quý khách vào lúc:
              &nbsp;
              <b>{format(new Date(), "HH:mm:ss - dd/MM/yyyy")}</b>
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
