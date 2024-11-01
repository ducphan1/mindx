// 4
// Sử dụng
// + Arrow function để nhân đôi giá trị của các phần tử trong một mảng số
// + (Buổi sau) map để nhân đôi giá trị của các phần tử trong một mảng số
// - Input: [1, 2, 3, 4]
// - Output: [2, 4, 6, 8]

const doubleValues = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
};

console.log("EX4:", doubleValues([1, 2, 3, 4]));

// 7
// Tìm nhân viên có mức lương cao nhất và trả về thông tin của họ
// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
// ];
// - Output: { id: 3, name: "Mark", salary: 3000 }

const employees = [
  { id: 1, name: "John", salary: 2000 },
  { id: 2, name: "Jane", salary: 2500 },
  { id: 3, name: "Mark", salary: 3000 },
];

const highestPaidEmployee = employees.sort((a, b) => b.salary - a.salary)[0];

console.log("EX7:", highestPaidEmployee);

// 8
// Tìm nhân viên làm việc chăm chỉ nhất (công cao nhất)
// công = (workingDays - lateDays)
// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2 },
//     { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//     { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
// ];
// - Output: { id: 3, name: "Mark", workingDays: 25, lateDays: 1 }

const employes = [
  { id: 1, name: "John", workingDays: 22, lateDays: 2 },
  { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
  { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
];

const mostDiligentEmploye = employes.sort(
  (a, b) => b.workingDays - b.lateDays - (a.workingDays - a.lateDays)
)[0];

console.log("EX8:", mostDiligentEmploye);

// 9
// Tạo một hàm để nhóm các nhân viên theo tên và trả về một object với tên của nhân viên là key và danh sách các nhân viên có cùng tên đó là value
// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
//     { id: 4, name: "John", salary: 2200 },
// ];
// - Output: {
//     "John": [
//         { id: 1, name: "John", salary: 2000 },
//         { id: 4, name: "John", salary: 2200 },
//     ],
//     "Jane": [{ id: 2, name: "Jane", salary: 2500 }],
//     "Mark": [{ id: 3, name: "Mark", salary: 3000 }],
// }

const employes1 = [
  { id: 1, name: "John", salary: 2000 },
  { id: 2, name: "Jane", salary: 2500 },
  { id: 3, name: "Mark", salary: 3000 },
  { id: 4, name: "John", salary: 2200 },
];

const groupByName = employes1.reduce((result, emp) => {
  result[emp.name] = result[emp.name] || [];
  result[emp.name].push(emp);
  return result;
}, {});

console.log("EX9:", groupByName);

// 10
// Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công làm việc, số công đi làm muộn và mức lương của nhân viên.
// Tính hiệu suất của mỗi nhân viên bằng cách chia số ngày làm việc cho mức lương, sau đó tìm nhân viên có hiệu suất cao nhất và trả về thông tin của họ.
// hiệu suất = workingDays / salary
// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
// ];
// - Output: { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 }

const employes2 = [
  { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
  { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
  { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
];

const highestEfficiencyEmployee = employes2.reduce((max, emp) => {
  const empEfficiency = emp.workingDays / emp.salary;
  const maxEfficiency = max.workingDays / max.salary;
  return empEfficiency > maxEfficiency ? emp : max;
});

console.log("EX10:", highestEfficiencyEmployee);

// 11
// Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công làm việc của nhân viên. Tạo một biểu đồ phân bố số công làm việc (histogram) trong đó mỗi mốc là số công làm việc, và số lượng nhân viên nằm trong mốc đó.
// const employees = [
//     { id: 1, name: "John", workingDays: 20 },
//     { id: 2, name: "Jane", workingDays: 22 },
//     { id: 3, name: "Mark", workingDays: 20 },
//     { id: 4, name: "Sam", workingDays: 24 },
//     { id: 5, name: "Lucy", workingDays: 22 },
// ];
// - Output: {
//     "20": 2,
//     "22": 2,
//     "24": 1
// }

const employes3 = [
  { id: 1, name: "John", workingDays: 20 },
  { id: 2, name: "Jane", workingDays: 22 },
  { id: 3, name: "Mark", workingDays: 20 },
  { id: 4, name: "Sam", workingDays: 24 },
  { id: 5, name: "Lucy", workingDays: 22 },
];

const histogram = employes3.reduce((result, emp) => {
  result[emp.workingDays] = (result[emp.workingDays] || 0) + 1;
  return result;
}, {});

console.log("EX11:", histogram);

// 13
// Quản lý danh sách công việc

// Yêu cầu:
// 1. Viết hàm thực thi thêm một công việc mới
// 2. Viết hàm đánh dấu một hoặc nhiều công việc hoàn thành
// 3. Viết hàm sắp xếp các công việc theo alphabet của tên công việc theo hai chiều A -> Z, Z -> A
// let tasks = [
//     { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
//     { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
//     { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
// ];

let tasks = [
  {
    name: "Hoàn thành bài tập JavaScript",
    description: "Làm xong bài tập về Array và Object",
    completed: false,
  },
  { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
  {
    name: "Đi mua hàng",
    description: "Mua thêm thức ăn cho tuần",
    completed: false,
  },
];

const addTask = (task) => tasks.push(task);

const markTasksAsCompleted = (taskNames) => {
  tasks.forEach((task) => {
    if (taskNames.includes(task.name)) {
      task.completed = true;
    }
  });
};

const sortTasksByName = (order = "asc") => {
  return tasks.sort((a, b) => {
    if (a.name > b.name) return order === "asc" ? 1 : -1;
    if (a.name < b.name) return order === "asc" ? -1 : 1;
    return 0;
  });
};

addTask({
  name: "Tập thể dục",
  description: "30 phút cardio",
  completed: false,
});
markTasksAsCompleted(["Hoàn thành bài tập JavaScript", "Đi mua hàng"]);
console.log(sortTasksByName("asc"));
console.log(sortTasksByName("desc"));
