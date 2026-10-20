import { Subjects as TeacherTypes } from './Teacher';

export namespace Subjects {
  export class Subject {
    teacher: TeacherTypes.Teacher = {
      firstName: '',
      lastName: '',
    };

    setTeacher(teacher: TeacherTypes.Teacher): void {
      this.teacher = teacher;
    }
  }
}
