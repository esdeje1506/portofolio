import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const students = [
    { id: 1, name: 'John Doe', age: 20, grade: 'A', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', age: 21, grade: 'B', address: '456 Elm St' },
    { id: 3, name: 'Mike Johnson', age: 22, grade: 'C', address: '789 Oak St' },
    { id: 4, name: 'Emily Davis', age: 19, grade: 'A', address: '567 Pine Ave' },
    { id: 5, name: 'Michael Brown', age: 20, grade: 'B', address: '890 Cedar Ln' },
    { id: 6, name: 'Jessica Lee', age: 21, grade: 'C', address: '234 Birch Rd' },
    { id: 7, name: 'David Wilson', age: 22, grade: 'B', address: '678 Maple St' },
    { id: 8, name: 'Sarah Moore', age: 19, grade: 'A', address: '901 Elm Ave' },
    { id: 9, name: 'Matthew Taylor', age: 20, grade: 'A', address: '345 Oak Rd' },
    { id: 10, name: 'Olivia Anderson', age: 21, grade: 'C', address: '789 Cedar St' },
    { id: 11, name: 'Daniel Martinez', age: 22, grade: 'B', address: '456 Pine Ave' },
    { id: 12, name: 'Sophia Garcia', age: 19, grade: 'A', address: '890 Maple Ln' },
    { id: 13, name: 'James Hernandez', age: 20, grade: 'A', address: '123 Birch Rd' },
    { id: 14, name: 'Isabella Wilson', age: 21, grade: 'B', address: '567 Cedar St' },
    { id: 15, name: 'Ethan Lopez', age: 22, grade: 'C', address: '901 Elm Ave' },
    { id: 16, name: 'Mia Gonzalez', age: 19, grade: 'A', address: '234 Oak Rd' },
    { id: 17, name: 'Alexander Miller', age: 20, grade: 'B', address: '678 Pine Ave' },
    { id: 18, name: 'Ava Moore', age: 21, grade: 'C', address: '345 Maple Ln' },
    { id: 19, name: 'William Brown', age: 22, grade: 'B', address: '890 Cedar St' },
    { id: 20, name: 'Charlotte Martin', age: 19, grade: 'A', address: '456 Elm Ave' },
    { id: 21, name: 'Amelia Thompson', age: 20, grade: 'A', address: '789 Oak Rd' },
    { id: 22, name: 'Benjamin White', age: 21, grade: 'C', address: '123 Main St' },
    { id: 23, name: 'Chloe Hall', age: 22, grade: 'B', address: '567 Birch Rd' },
    { id: 24, name: 'Daniel Scott', age: 19, grade: 'A', address: '890 Cedar St' },
    { id: 25, name: 'Grace Allen', age: 20, grade: 'A', address: '234 Elm Ave' },
    { id: 26, name: 'Jack Young', age: 21, grade: 'C', address: '678 Oak Rd' },
    { id: 27, name: 'Lily King', age: 22, grade: 'B', address: '901 Pine Ave' },
    { id: 28, name: 'Luke Harris', age: 19, grade: 'A', address: '456 Maple Ln' },
    { id: 29, name: 'Natalie Lewis', age: 20, grade: 'A', address: '789 Cedar St' },
    { id: 30, name: 'Owen Robinson', age: 21, grade: 'C', address: '123 Main St' }
  ];

const StudentDetail = () => {
  const { id } = useParams();
  const student = students.find(student => student.id === parseInt(id? id : 1));
  
   if (!student) return <div>Student not found</div>;
  
  return (
    
    <div>
      <h2>Detail Siswa</h2>
      <p><strong>Id:</strong> {student.id}</p>
      <p><strong>Nama:</strong> {student.name}</p>
      <p><strong>Umur:</strong> {student.age}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
      <p><strong>Alamat:</strong> {student.address}</p>
    </div>
  );
};

export default StudentDetail;
