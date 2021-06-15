import { ISchool } from './types';

type IEducation = Array<ISchool>;

const education: IEducation = [
  {
    duringTime: 'październik 2017 - marzec 2021',
    faculty: 'Informatyka inżynierska',
    schoolName: 'Uniwersytet Mikołaja Kopernika w Toruniu'
  },
  {
    duringTime: 'wrzesień 2013 - czerwiec 2017',
    faculty: 'Technikum informatyczne',
    schoolName: 'Zespół Szkół nr 1 w Działdowie'
  }
];

export default education;
