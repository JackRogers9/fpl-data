import express from 'express';
import dotenv from 'dotenv';
import { headers } from '../helpers/headers';
import { agent } from './login';

const router = express.Router();
dotenv.config();

router.get('', async (request, response) => {
    const { managerId } = request.query;

    const resp = await agent
        .get(`https://fantasy.premierleague.com/api/my-team/${managerId}/`)
        .set(headers)
        .catch((error) => console.log(error));

    response.send(resp);
});

export { router as myTeamRouter };
