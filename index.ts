import md5 from "md5";

interface HashPassOptions {
  salt?: number;
  rounds?: number;
}

export const hashPass = (
  rawPassword: string,
  { salt, rounds }: HashPassOptions = { salt: 20, rounds: 15 }
): string => {
  let hashed = md5(rawPassword + salt);
  for (let i = 0; i <= rounds; i++) {
    hashed = md5(hashed);
  }

  return `${salt}$${rounds}$${hashed}`;
};

export const compare = (
  rawPassword: string,
  hashedPassword: string
): boolean => {
  try {
    const [salt, rounds] = hashedPassword.split("$");

    const hashedRawPassword = hashPass(rawPassword, {
      salt: Number(salt),
      rounds: Number(rounds),
    });

    return hashedPassword === hashedRawPassword;
  } catch (error) {
    throw Error(error.message);
  }
};
