interface Teacher {
   readonly firstName: string;
   readonly lastName: string;
    fulllTimeEmployee: boolean;
   yearsOfExperience?: number;
    [anyName: string] : any
}
interface Directors extends Teacher {
  numberOfReports: number;
}
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
export function printTeacher(firstName: string, lastName: string): string {
 const firstInitial = firstName.charAt(0);
  const fullName = `${firstInitial}. ${lastName}`;
   return fullName;
}

interface StudentConstructor {
(firstName: string, lastName: string): StudentClassInterface;	   
}
interface StudentClassInterface {
 workOnHomework(): string;
 displayName(): string;
}
export class StudentClass implements StudentClassInterface {
 firstName: string;
 lastName: string;
constructor (firstName: string, lastName: string ){
this.firstName = firstName;
this.lastName = lastName;
}
workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }

} 
