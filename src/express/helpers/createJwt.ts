import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const createJwt = (email: string, managerId: number) => {
    const jwtSecretKey = process.env.JWT_SECRET_KEY;

    return jwt.sign({ email, managerId, time: Date() }, jwtSecretKey!);
};
