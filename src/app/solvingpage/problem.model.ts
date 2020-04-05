export class ProblemModel {
  title: string;
  description: string;
  approach: string
  codeDisplay: string;
  codeToRun: any;

  constructor(title: string, description: string, approach: string, codeDisplay: string, codeToRun: any) {
    this.title = title;
    this.description = description;
    this.approach = approach;
    this.codeDisplay = codeDisplay;
    this.codeToRun = codeToRun;
  }
}
