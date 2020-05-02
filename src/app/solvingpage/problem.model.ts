export class ProblemModel {
  title: string;
  description: string;
  approach: string
  problemLink: string;
  codeLink: any;

  constructor(title: string, description: string, approach: string, problemLink: string, codeLink: any) {
    this.title = title;
    this.description = description;
    this.approach = approach;
    this.problemLink = problemLink;
    this.codeLink = codeLink;
  }
}
