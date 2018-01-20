exports.get = (req, res) => {
    res.status(200).jsonp({
        message: 'Welcome to the API!',
    });
};
