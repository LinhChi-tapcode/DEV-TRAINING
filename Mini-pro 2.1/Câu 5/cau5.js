//Hàm tính
function complexExpression(x) {
console.log(`x Ban đầu là: ${x}`)

//Tính biểu thức 
let output = ++x * 3 - x-- * 2 + --x;

//Ghi kết quả

console.log(`x Lúc sau là: ${x}`);
console.log(`kết quả của biểu thức là: ${output}`);

return output;
}
complexExpression(5);

