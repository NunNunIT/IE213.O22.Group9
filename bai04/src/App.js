import "./App.css";

import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    student: "",
    teacher: "",
    class: "",
    date: "",
    homework: "",
    completionMethod: ""
  });

  const { student, teacher, class: className, date, homework, completionMethod } = formData;

  const onSubmitHandler = (event) => {
    const checkboxes = event.target.querySelectorAll('input[type="checkbox"]:checked');
    const selectedTypes = Array.from(checkboxes).map(checkbox => {
      if (checkbox.value === "TYPE1") {
        return "Tại lớp";
      } else if (checkbox.value === "TYPE2") {
        return "Tại nhà";
      }
      return "";
    });

    const completionMethod = selectedTypes.join(" - ");
    event.preventDefault();
    const updatedFormData = {
      student: event.target.student.value,
      teacher: event.target.teacher.value,
      class: event.target.class.value,
      date: event.target.date.value,
      homework: event.target.homework.value,
      completionMethod: completionMethod

    };
    setFormData(updatedFormData);
  };

  return (
    <div className="app">
      <div className="form_layout">
        <div className="title">
          <h1 className="center-item">THEO DÕI HỌC TẬP</h1>
        </div>
        <form onSubmit={onSubmitHandler}>
          <div className="form_layout--top">
            <div className="form_layout--left">
              <div className="form-group">
                <label htmlFor="student" className="form-label">
                  Họ tên học sinh
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="student"
                  placeholder="Nhập tên học sinh"
                />
              </div>
              <div className="form-group">
                <label htmlFor="teacher" className="form-label">
                  Giáo viên phụ trách
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="teacher"
                  placeholder="Nhập tên giáo viên phụ trách"
                />
              </div>
              <div className="form-group flex-form-group">
                <div>
                  <label htmlFor="class" className="form-label">
                    Lớp
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="class"
                    placeholder="Nhập tên lớp"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="form-label">
                    Ngày
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    placeholder="Nhập ngày"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="teacher" className="form-label">
                  Những việc phân công chưa làm:
                </label>
                <textarea
                  type="textarea"
                  className="form-control"
                  name="homework"
                  placeholder="Nhập tên công việc"
                  rows="4"
                  cols="150"
                >
                </textarea>
              </div>
            </div>
            <div className="form_layout--right">
              <img src={require("./assets/notebook.png")} alt="notebook" />
            </div>
          </div>
          <div className="form_layout--bottom">
            <div className="form-group">
              <label htmlFor="completionMethod" className="form-label">
                Hình thức hoàn thành
              </label>
              <div>
                <div>
                  <input type="checkbox" name="completionMethod" value="TYPE1" />
                  <label htmlFor="TYPE1">
                    Những việc chưa làm sẽ được hoàn thành ngay tại lớp
                  </label>
                </div>
                <div>
                  <input type="checkbox" name="completionMethod" value="TYPE2" />
                  <label htmlFor="TYPE2">
                    Sẽ hoàn thành những việc chưa làm tại nhà và nộp lại cho
                    giáo viên vào ngày hôm sau
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group center-item">
            <button className="btn" type="submit">
              Ghi nhận
            </button>
          </div>
        </form>
      </div>
      <div className="introduction-text center-item">
        <p>
          Kết quả sau khi nhấn <b>Ghi nhận</b>
        </p>
      </div>
      <div className="result_layout">
        <div className="title">
          <h1 className="center-item">THÔNG TIN PHIẾU THEO DÕI</h1>
        </div>
        <div className="info_layout">
          <div className="info_flex">
            <p><b>Tên học sinh:</b>&nbsp;</p>
            <p>{student}</p>
            <p>&nbsp; - &nbsp; <b>Lớp:</b>&nbsp;</p>
            <p>{className}</p>
          </div>
          <div className="info_flex">
            <p><b>Ngày đăng ký:</b>&nbsp;</p>
            <p>{date}</p>
            <p>&nbsp; - &nbsp; <b>Giáo viên phụ trách:  </b>&nbsp;</p>
            <p>{teacher}</p>
          </div>
          <p><b>Những công việc đã được phân công nhưng chưa hoàn thành:</b></p>
          <div className="info_flex">
            <p>{homework}</p>
          </div>
          <div className="info_flex">
            <p><b>Cam kết sẽ hoàn thành tại : &nbsp;</b></p>
            <p>{completionMethod}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;