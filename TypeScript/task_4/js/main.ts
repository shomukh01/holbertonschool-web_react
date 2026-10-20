import { Subjects as TeacherTypes } from './subjects/Teacher';
import { Subjects as CppTypes } from './subjects/Cpp';
import { Subjects as ReactTypes } from './subjects/React';
import { Subjects as JavaTypes } from './subjects/Java';

const teacher: TeacherTypes.Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
  experienceTeachingReact: 5,
  experienceTeachingJava: 8,
};

const cpp = new CppTypes.Cpp();
const react = new ReactTypes.React();
const java = new JavaTypes.Java();
const unassignedCpp = new CppTypes.Cpp();

cpp.setTeacher(teacher);
react.setTeacher(teacher);
java.setTeacher(teacher);
unassignedCpp.setTeacher({
  firstName: 'New',
  lastName: 'Teacher',
});

console.log(cpp.getRequirements(), cpp.getAvailableTeacher());
console.log(react.getRequirements(), react.getAvailableTeacher());
console.log(java.getRequirements(), java.getAvailableTeacher());
console.log(unassignedCpp.getAvailableTeacher());
