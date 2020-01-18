import  * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';

let router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
  res.send('get / success!!');
});

export default router;