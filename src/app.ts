import express from "express";

// import middlewares  
import cors from "cors";
import errorHandler, { error404Handler } from "./application/middleware/errors";

// import router
import actionRouter from "./application/router/action.routes";
import userActionRouter from "./application/router/user-action.routes";

// create app
const app = express();


// middlewares
app.use(cors({maxAge: 3600})); 
app.use(express.urlencoded({extended: true,}));
app.use(express.json()); 


// apply routes
app.use("/api/v0/actions", actionRouter);
app.use("/api/v0/user-actions", userActionRouter) 


// Error handling
app.use(errorHandler); 
app.use(error404Handler); // 404 route



export default app;
