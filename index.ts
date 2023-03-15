import md5 from "md5";

interface HashPassOptions {
  salt?: number;
  rounds?: number;
}

class PasswordHasher {
  private salt: number;
  private rounds: number;

  constructor(options: HashPassOptions = { salt: 20, rounds: 15 }) {
    this.salt = options.salt || 20;
    this.rounds = options.rounds || 15;
  }

  hashPass(rawPassword: string): string {
    let hashed = md5(rawPassword + this.salt);
    for (let i = 0; i <= this.rounds; i++) {
      hashed = md5(hashed);
    }

    return `${this.salt}$${this.rounds}$${hashed}`;
  }

  compare(rawPassword: string, hashedPassword: string): boolean {
    try {
      const [expectedHashed] = hashedPassword.split("$");

      const hashedRawPassword = this.hashPass(rawPassword);

      return expectedHashed === hashedRawPassword;
    } catch (error) {
      throw Error(error.message);
    }
  }
}

export default PasswordHasher;
