import { Subjects as ParentSubjects } from './Subject';

declare module './Teacher' {
  namespace Subjects {
    interface Teacher {
      experienceTeachingReact?: number;
    }
  }
}

export namespace Subjects {
  export class React extends ParentSubjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingReact) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
