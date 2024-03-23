'use client';

import { useSearchParams } from 'next/navigation'

import './page.css';

export default function BT4ResultPage() {
  const searchParams = useSearchParams();

  const student_name = searchParams.get('student-name');
  const className = searchParams.get('class');
  const teacher_name = searchParams.get('teacher-name');
  const date = searchParams.get('date');
  const note = searchParams.get('note');
  const type = searchParams.get('type');
  const type1 = searchParams.get('type1');

  return (
    <>
      <header>
        <h1 className="">Thông tin phiếu theo dõi</h1>
      </header>
      <main className="">
        <b className="">Tên học sinh: </b>
        <span>{student_name}</span>
        <span>{" - "}</span>
        <b>{"Lớp: "}</b>
        <span>{className}</span>
        <br />

        <b className="">Ngày đăng ký: </b>
        <span>{date}</span>
        <span> - </span>
        <b>Giáo viên phụ trách: </b>
        <span>{teacher_name}</span>
        <br />

        <b className="">Những công việc đã được phân công nhưng chưa hoàn thành: </b>
        <br />
        <span>{note}</span>
        <br />

        <b className="">Cam kết sẽ hoàn thành: </b>
        <span>{[type, type1].join(' - ')}</span>
      </main>
    </>
  )
}