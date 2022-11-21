const error = (err, res) => {
    console.log(err)
    res.status(err.statusCode || 500)
        .json({message: err.message,
                succes: false})
}

module.exports = error;