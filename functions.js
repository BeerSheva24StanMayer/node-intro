export function myBind(thisArg, ...otherArgs) {
    //TODO
    //write method myBind fully running standard "bind" method functionality
    //no using standard call / apply methods
    const fieldTime = new Date().getDate() + "";
    thisArg[fieldTime] = this;
    return (...args) => {
        const res = thisArg(...args, ...bindArgs);
        delete thisArg[fieldTime];
        return res;
    }
}