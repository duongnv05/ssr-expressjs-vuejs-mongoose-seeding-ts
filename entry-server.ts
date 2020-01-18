import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
// import cors from 'cors'
import * as createError from 'http-errors';
// import session from 'express-session';
// import bodyParser from "body-parser";
// import cookieParser from 'cookie-parser';

// import MongoStore from 'connect-mongo';

import controllers from './controllers';
// import { connectDb } from './models';

let app = express();
// let monStore = MongoStore(session);

// app.use(cors({origin: [
//   "http://localhost:5050"
// ], credentials: true}));
console.log("running entry!!");
app.use(require('morgan')('dev'));

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cookieParser('KGxFIYdPZphL5rN4Z72mbS9O1a7dwU0B'));

const {
    PORT = 4500
} = process.env;

// connectDb().then((res) => {
// 	console.log("#Connected database");
// 	app.use(session({
// 		secret: 'KGxFIYdPZphL5rN4Z72mbS9O1a7dwU0B',
// 		saveUninitialized: true,
// 		resave: false,
// 		cookie: { secure: true, maxAge: 3600 * 60 * 60 * 30 },
// 		store: new monStore({ mongooseConnection: res.connection })
// 	}));

app.use(controllers);

app.use((req: Request, res: Response, next: NextFunction) => {
	next(createError(createError));
});

if(require.main === module) {
	app.listen(PORT, () => {
		console.log('server started at http://localhost:' + PORT);
	})
}
// });

export default app;