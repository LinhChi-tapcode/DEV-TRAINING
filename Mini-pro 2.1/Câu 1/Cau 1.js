function evaluateConditions(condition1, condition2, condition3, condition4) {
   //In ra các giá trị để tiện theo dõi 
   // Ví dụ: condition 1: true..
    console.log(`condition1: ${condition1}, condition2: ${condition2}, condition3: ${condition3}, condition4: ${condition4}`);
    if (condition1 && condition2) {
        return "Cả hai đều đúng!"
    }else if (condition3 || condition4){
return "Một trong các điều kiện thứ ba hoặc thứ tư đúng!"
    }else {
        return "Không điều kiện nào đúng!"
    }

}
//Gọi hàm: Cả 2 điều kiện đều đúng!
console.log(evaluateConditions(true, true, false, false));
//Gọi hàm: Một trong các điều kiện thứ ba hoặc thứ tư đúng!
console.log(evaluateConditions(false, false, true, true));
console.log(evaluateConditions(false, false, false, true));
console.log(evaluateConditions(false, false, true, false));
//Gọi hàm: Không điều kiện nào đúng!
console.log(evaluateConditions(false, false, false, false));