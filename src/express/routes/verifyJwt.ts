import jwt from 'jsonwebtoken';
import express from 'express';
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config();

router.get('', (request, response) => {
    const { token } = request.query;

    if (token === undefined) return response.status(401);

    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const isValid = jwt.verify(token.toString(), jwtSecretKey!);

    if (isValid) return response.send('Successfully Verified');

    return response.status(401);
});

export { router as verifyJwtRouter };
