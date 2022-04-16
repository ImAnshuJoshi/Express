const logger=(req,res,next)=>{
    console.log("I run before every req!!!!!!");
    next();
}
const secondlogger=(req,res,next)=>{
    console.log("I run before every req Second logger!!!!!!");
    next();
}
module.exports={logger,secondlogger};

