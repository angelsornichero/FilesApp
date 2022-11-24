const error = (err, res) => {
    console.log(err)
    res.status(err.statusCode || 500)
        .json({message: err.message,
                success: false})
}

module.exports = error;