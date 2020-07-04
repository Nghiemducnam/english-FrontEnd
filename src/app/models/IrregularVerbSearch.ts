import {BaseSearch} from './BaseSearch';

export interface IrregularVerbSearch extends BaseSearch{
  id?: number;
  verb?: string;
  verb1?: string;
  verb2?: string;
  meaning?: string;

  verbCategory?: number;
}
