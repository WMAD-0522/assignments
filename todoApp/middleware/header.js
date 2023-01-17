const header = (req, res, next) => {
    res.setHeader("X-Powered-By", "kubilaycakmak");
    res.header("Access-Control-Allow-Origin", "*");

    next();
}

export default header;