import { hashPass, compare } from './index';


const hashedPass: string = hashPass('password', {salt: 20});

console.log(hashedPass);

const isEqualPass: boolean = compare('password', hashedPass);

console.log(isEqualPass);
