const Product=require('../models/product.model.js');

const getProducts =  async (req,res) =>{
    try{
      const product = await Product.find({});
      res.status(200).json(product);
  
    }catch(error){
      res.status(500).json({message:error.message});
    }
};

const getSingleProduct =  async (req,res) =>{
  try{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);

  }catch(error){
    res.status(500).json({message:error.message});
  }
};

const createProduct=async (req,res) => {
  try{
    const product=await Product.create(req.body);
    res.status(200).json(product);

  }catch(error){
    res.status(500).json({message:error.message});
  }
};

const updateProduct=async (req,res) =>{
  try{
    const {id} = req.params;
    const product=await Product.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!product){
      return res.status(404).json({message:"Product Not Found"});
    }

    const updatedProduct=await Product.findById(id);
    res.status(200).json(updatedProduct);

  }catch(error){
    res.status(500).json({message:error.message});
  }
};

const deleteProduct=async (req,res) =>{
  try{
    const {id} =req.params;
    const deletedProduct=await Product.findByIdAndDelete(id);

    if (!deletedProduct){
      return res.status(404).json({message:"Product Not Found"});
    }

    res.status(200).json({message:"Product deleted successfully"});

  }catch(error){
    res.status(500).json({message:error.message});
  }
};

module.exports={
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
};