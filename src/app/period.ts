import { DataType } from './data-types.enum';

export interface Period {
  id: number;
  name: string;
  dataTypes: DataType[];
  tasks: number;
  dataTypesText?: string;
}
