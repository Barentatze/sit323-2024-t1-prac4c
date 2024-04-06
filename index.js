const express= require("express");
const res = require("express/lib/response");
const app= express();
const fs = require('fs');
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculate-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}
const add= (n1,n2) => {
    return n1+n2;
}
const sub= (n1,n2) => {
    return n1-n2;
}
const div= (n1,n2) => {
    return n1/n2;
}
const mul= (n1,n2) => {
    return n1*n2;
}
const exp = (base, exponent) => {
    return Math.pow(base, exponent)
};
const sqrt = (num) => {
    return Math.sqrt(num)
};
const mod = (n1,n2) => {
    return n1 % n2;
};

//add
app.get("/add", (req,res)=>{
    try{
        const n1= parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        if(isNaN(n1)) {
            logger.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            logger.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }

        logger.info('Parameters '+n1+' and '+n2+' received for addition');
        const result = add(n1,n2);
        res.status(200).json({statuscocde:200, data: result });
    } catch(error) {
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});

//subtraction
app.get("/subtraction", (req,res)=>{
    try{
        const n1= parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        if(isNaN(n1)) {
            logger.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            logger.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }

        logger.info('Parameters '+n1+' and '+n2+' received for substraction');
        const result = sub(n1,n2);
        res.status(200).json({statuscocde:200, data: result });
    } catch(error) {
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});

//multiplication
app.get("/multiplication", (req,res)=>{
    try{
        const n1= parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        if(isNaN(n1)) {
            logger.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            logger.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }

        logger.info('Parameters '+n1+' and '+n2+' received for multiplication');
        const result = mul(n1,n2);
        res.status(200).json({statuscocde:200, data: result });
    } catch(error) {
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});

//division
app.get("/division", (req,res)=>{
    try{
        const n1= parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        if(isNaN(n1)) {
            logger.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            logger.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }

        logger.info('Parameters '+n1+' and '+n2+' received for division');
        const result = div(n1,n2);
        res.status(200).json({statuscocde:200, data: result });
    } catch(error) {
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});

//exponentiation
app.get("/exponentiation", (req,res)=>{
    try{
        const n1= parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        if(isNaN(n1)) {
            logger.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            logger.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }

        logger.info('Parameters '+n1+' and '+n2+' received for exponentiation');
        const result = exp(n1,n2);
        res.status(200).json({statuscocde:200, data: result });
    } catch(error) {
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});

//square root
app.get("/sqrt", (req,res)=>{
    try{
        const n1= parseFloat(req.query.n1);
        if(isNaN(n1)) {
            logger.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }

        logger.info('Parameters '+n1+' received for square root');
        const result = sqrt(n1);
        res.status(200).json({statuscocde:200, data: result });
    } catch(error) {
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});

//modulo
app.get("/modulo", (req,res)=>{
    try{
        const n1= parseFloat(req.query.n1);
        const n2=parseFloat(req.query.n2);
        if(isNaN(n1)) {
            logger.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if(isNaN(n2)) {
            logger.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }

        logger.info('Parameters '+n1+' and '+n2+' received for modulo');
        const result = mod(n1,n2);
        res.status(200).json({statuscocde:200, data: result });
    } catch(error) {
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
    }
});


const port=3040;
app.listen(port,()=> {
    console.log("hello i'm listening to port"+port);
})

