import {addTitle, styleBody, email} from './dom';
import artists, { getProcrastinators } from './data';


const procrastinators = getProcrastinators(artists);
console.log(artists, procrastinators);