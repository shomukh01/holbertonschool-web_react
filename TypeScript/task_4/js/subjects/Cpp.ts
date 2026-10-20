import { Subjects as ParentSubjects } from './Subject';

declare module './Teacher' {
  namespace Subjects {
    interface Teacher {
      experienceTeachingC?: number;
    }
  }
}

export namespace Subjects {
  export class Cpp extends ParentSubjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingC) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
