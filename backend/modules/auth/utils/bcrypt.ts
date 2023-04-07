import * as bcrypt from 'bcrypt';

const SALT = bcrypt.genSaltSync(15);
export const hashPassword = (rawPass: string) => bcrypt.hashSync(rawPass, SALT);

export const comparePasswords = (rawPass: string, hash: string) =>
  bcrypt.compareSync(rawPass, hash);
