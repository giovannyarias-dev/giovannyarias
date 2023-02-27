import { ICompany } from "./company";
import { IProject } from "./Project";

export interface IJob {
  id: string;
  name: string;
  startDate: Date;
  endDate?: Date;
  projects?: IProject[];
  company: ICompany;
}