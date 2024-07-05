import { DataType } from './data-types.enum';

export interface Period {
  name: string;
  dataTypes: DataType[];
  tasks: number;
  dataTypesText?: string;
}
