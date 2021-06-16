// add new language as first in array
import { ILanguage } from './types';

type ILanguages = Array<ILanguage>;

const languages: ILanguages = [
  {
    name: 'Angielski',
    level: 'B2'
  },
  {
    name: 'Polski',
    level: 'C2'
  }
];

export default languages;
