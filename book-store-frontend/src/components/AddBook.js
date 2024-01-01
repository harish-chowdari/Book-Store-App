import {FormControlLabel,Checkbox, Button, FormLabel, TextField } from '@mui/material'
import React from 'react'
import {Box} from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddBook = () => {

  const history = useNavigate()

  const [inputs,setInputs]=React.useState({
    name:"",
    description:"",
    price:"",
    author:"",
    image:""

  })

  function handleChange(e){
    setInputs((prevState) => ({
      ...prevState, 
      [e.target.name]:e.target.value
    }))
  }

  const [checked, setChecked]=React.useState(false)

  const sendRequest= async()=>{
    return await axios.post("http://localhost:6007/books/addbook",{
    name:String(inputs.name),
    author:String(inputs.author),
    description:String(inputs.description),
    price:String(inputs.price),
    image:String(inputs.image),
    available:Boolean(checked)

    })
    .then(res => res.data)
  }


  function handleSubmit(e){
    e.preventDefault()
    sendRequest().then(()=>history("/books"))
  }

  return (
    
    <form onSubmit={handleSubmit} >
    <Box display="flex" 
    flexDirection="column" 
    justifyContent={'center'}
    maxWidth={700}
    alignContent={'center'}
    alignSelf={'center'}
    marginLeft={"auto"}
    marginRight={"auto"}
    marginTop={15}
    
    > 
      <FormLabel>Name</FormLabel>
      <TextField required={true}
      value={inputs.name}
      onChange={handleChange}
       margin='normal' fullWidth variant='outlined' name="name" />
      <FormLabel>Author</FormLabel>
      <TextField required={true}
      value={inputs.author}
      onChange={handleChange}
      margin='normal' fullWidth variant='outlined' name="author" />
      <FormLabel>Description</FormLabel>
      <TextField required={true}
      value={inputs.description}
      onChange={handleChange}
       margin='normal' fullWidth variant='outlined' name="description" />
      <FormLabel>Price</FormLabel>
      <TextField required={true}
      value={inputs.price}
      onChange={handleChange}
      type='number' margin='normal' fullWidth variant='outlined' name="price" />  
      <FormLabel>Image</FormLabel>
      <TextField required={true}
      value={inputs.image}
      onChange={handleChange}
      margin='normal' fullWidth variant='outlined' name="image" />
      

      <FormControlLabel
          control=
            {<Checkbox checked={checked}/>} 
            onChange={()=>setChecked(!checked)}
            label="Available"  />

<Button variant='contained' type='submit'>Add Book</Button>
      </Box>
      
    </form>

  )
}

export default AddBook