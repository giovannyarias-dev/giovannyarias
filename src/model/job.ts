import { ICompany } from "./company";
import { IProject } from "./project";

export interface IJob {
  id: string;
  name: string;
  startDate: Date;
  endDate?: Date;
  projects?: IProject[];
  company: ICompany;
}