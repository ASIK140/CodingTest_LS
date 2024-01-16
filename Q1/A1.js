const students = [
  { name: "Dhishan Debnath", Roll: 1 },
  { name: "Animesh Gupta", Roll: 2 },
  { name: "Tapas Sen", Roll: 3 },
  { name: "Misti Dutta", Roll: 4 },
  { name: "Chini Misra", Roll: 5 },
  {name:"Asik Sk",Roll:7}
];

const Details = [
  { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
  { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
  { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
  { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
  { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } },
  { Roll: 7, subjects: { math: 86, english: 100, computer: 70, chemistry: 60 }}
];
// Calculate total mark
const total_mark = (subjects) => {
  const val = Object.values(subjects);
  let total = 0;
  for (let index = 0; index < val.length; index++) {
    total = total + val[index];
  }
  return total;
};
//Generate Mark Sheet
const generateStudentMarkSheets = (Students, Details) => {
  const mark = [];
  for (let index = 0; index < Students.length; index++) {
    let subjects = Details.filter((item) => {
      return item.Roll === Students[index].Roll;
    });

    let total = total_mark(subjects[0].subjects);
    let ststus = total >= 200 ? "Pass" : "Fail";
    const element = Object.assign(
      Students[index],
      subjects[0].subjects,
      { total },
      { ststus }
    );
    mark.push(element);
  }
  return mark;
};

const mark = generateStudentMarkSheets(students, Details);
console.log(mark);
