// Khai báo mảng student chứa thông tin các sinh viên
const students = [
    { name: "Nguyễn A", grade: "A1", score: 9.9 },
    { name: "Phạm B", grade: "B1", score: 8.9 },
    { name: "Lê C", grade: "C1", score: 7.9 },
    { name: "Dương D", grade: "D1", score: 6.9 }
];

// In ra thông tin của mỗi sinh viên sử dụng vòng lặp for...of
console.log('for...of:');
for (let student of students) { 
   const name = student.name;
   const score = student.score;
   console.log(`Tên SV: ${name}, Điểm: ${score}`);
}