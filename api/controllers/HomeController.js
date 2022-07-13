let data = require(`${__basedir}/data/index.js`);

module.exports = {
  all: async (req, res) => {
    try {
      let result = data.home;

      res.status(200).json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: { status: error.status, message: error.message },
      });
    }
  },
};
