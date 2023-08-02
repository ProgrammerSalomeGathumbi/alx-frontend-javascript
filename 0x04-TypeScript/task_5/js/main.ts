interface MajorCredits {
credits: number;
brand: "majors";	 
}
interface MinorCredits {
credits: number;
brand: "minors";
}
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
const totalCredits = subject1.credits +subject2.credits;
return totalCredits;
}
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number{
const totalC = subject1.credits +subject2.credits;
return totalC;
}
