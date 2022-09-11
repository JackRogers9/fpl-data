import superagent, { Response } from 'superagent';
import express from 'express';
import dotenv from 'dotenv';
import { createJwt } from '../helpers/createJwt';
import { headers } from '../helpers/headers';

const agent = superagent.agent();
const router = express.Router();
dotenv.config();

interface ILoginRequest {
    managerId: number;
    email: string;
    password: string;
}

router.post('', async (request, response) => {
    const { managerId, email, password }: ILoginRequest = request.body;

    const payload = {
        password,
        login: email,
        redirect_uri: 'https://fantasy.premierleague.com/',
        app: 'plfpl-web',
    };

    const resp = await agent
        .post('https://users.premierleague.com/accounts/login/')
        .set(headers)
        .type('form')
        .send(payload)
        .catch((error) => console.log(error)) as Response;

    const redirectUrl = resp.redirects[0];
    if (redirectUrl === undefined || redirectUrl.includes('state=fail')) return response.send();

    const jwtValue = createJwt(email, managerId);
    return response.send(jwtValue);
});

export { router as loginRouter };
export { agent };
