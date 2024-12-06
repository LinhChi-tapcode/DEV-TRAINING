// Hàm validateUser: kiểm tra người dùng có hợp lệ không
function validateUser(user){

    if (user.isActive === true && user.isAdmin === true) {
        return true
    } else {
        return false
    }
};

//Kiểm tra
const user1 = {
    isActive: true,
    isAdmin: true,
    username: "admin",
};

const user2 = {
    isActive: false,
    isAdmin: true,
    username: "guest",
};

// In ra kết quả
console.log(validateUser(user1), `isActive: ${user1.isActive}, isAdmin: ${user1.isAdmin}, username: ${user1.username}`);
console.log(validateUser(user2), `isActive: ${user2.isActive}, isAdmin: ${user2.isAdmin}, username: ${user2.username}`);