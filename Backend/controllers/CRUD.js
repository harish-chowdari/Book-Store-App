const BookSchema = require("../model/Book")

const getAllBookS= async(req,res,next)=>{
    let books
    try{
      books = await BookSchema.find()        
    }
    catch(err){
        console.log(err)
    }
    if(!books){
        return res.json("no data found")
     }
        return res.json({books})
    
}

const addBook = async(req,res,next)=>{
    let book
    try{
        book = new BookSchema({
            name:req.body.name,
            author:req.body.author,
            description:req.body.description,
            price:req.body.price,
            available:req.body.available,
            image:req.body.image
        })
        const d = await book.save()
    }
    catch(err){
        console.log(err)
    }
    if(!book){
       return res.json("enter book details")
    }
       return res.status(201).json({book})
}


const getById = async(req,res,next)=>{
    let book
    try{
      book = await BookSchema.findById(req.params.id)        
    }
    catch(err){
        console.log(err)
    }
    if(!book){
        return res.json("no data found")
     }
        return res.json({book}) 
}


const updateBook = async(req,res,next)=>{
    let book
    try{
        
         book = await BookSchema.findByIdAndUpdate(req.params.id,{
            name:req.body.name,
            author:req.body.author,
            description:req.body.description,
            price:req.body.price,
            available:req.body.available,
            image:req.body.image
        })
         book = await book.save()
    }
    catch(err){
        console.log(err)
    }
    
    if(!book){
        return res.json("book not updated")
     }
        return res.json({book}) 
}


const deleteBook = async(req,res,next)=>{
    let books
    try{
      books = await BookSchema.findByIdAndDelete(req.params.id)        
    }
    catch(err){
        console.log(err)
    }
    if(!books){
        return res.json("book deleted")
     }
        return res.json({books}) 
}



module.exports={
    getAllBookS,
    addBook,
    getById,
    updateBook,
    deleteBook
}