class ErrorHandle extends Error{
    constructor(message,statusCode){
       super(message)

       this.statusCode = statusCode;

       Error.captureStackTrace(this,this.constructor)  /* error is parant class of nodejs  tesko child ho er--- */
    }

}


export default ErrorHandle;

