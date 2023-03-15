import PasswordHasher from './index';

const Pass = new PasswordHasher({salt: 20, rounds: 15})

const hashedPass: string = Pass.hashPass('password');

console.log(hashedPass);

const isEqualPass: boolean = Pass.compare('password', hashedPass);

console.log(isEqualPass);
