import { Router } from 'express';

import pipedrive from './pipedrive';


const app = Router();

app.use('/pipedrive', pipedrive);


export default app;
