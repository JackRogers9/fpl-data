import express from 'express';
import { verifyJwtRouter } from './routes/verifyJwt';
import { myTeamRouter } from './routes/myTeam';
import { loginRouter } from './routes/login';

const app = express();
const port = 5000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Express server is running at https://localhost:${port}`);
});

app.use('/login', loginRouter);
app.use('/verify-jwt', verifyJwtRouter);
app.use('/my-team', myTeamRouter);

export {};
