const Collections = require('../models/collection')

const showCollections = async (req,res)=>{
  try {
    const collectionId=await req.params.id
    const collection= await Collections.findById(collectionId).populate("artIds")
    const collectionArt= await collection.artIds
    res.send(collectionArt)
  } catch (error) {
    
  }
}

const createCollection = async (req,res)=>{
  try {
    const newCollection= await Collections.create(req.body)
    const userId= await req.user._id
    const currentUser= await findById(userId)
    currentUser.push(newCollection._id)
    await currentUser.save()


    
  } catch (error) {
    
  }
}
