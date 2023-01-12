import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token.01010";
const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const isValidJWT = verify(jwt, JWT_SECRET);
  console.log(JWT_SECRET);
  return isValidJWT;
};

export { generateToken, verifyToken };
