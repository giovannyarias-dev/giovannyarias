import { ICompany } from "./company";
import { ITool } from "./tool";

export interface IProject {
  id: string;
  name: string;
  description?: string;
  tools?: ITool[];
  roles?: string[];
  customers?: ICompany[];
  startDate: Date;
  endDate?: Date;
}