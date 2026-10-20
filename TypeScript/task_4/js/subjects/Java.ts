import { Subjects as ParentSubjects } from './Subject';

declare module './Teacher' {
  namespace Subjects {
    interface Teacher {
      experienceTeachingJava?: number;
    }
  }
}

export namespace Subjects {
  export class Java extends ParentSubjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingJava) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
