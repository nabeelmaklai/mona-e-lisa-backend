const Art = require('../models/art')

const createArt = async (req, res) => {
  try {
    const post = await Art.create({ ...req.body })
    res.send(post)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { createArt }
