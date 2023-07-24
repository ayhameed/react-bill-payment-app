const helloHandler = (req, res) => {
    res.status(200).json({ message: 'Hello from the server' });
};

module.exports = helloHandler;
  