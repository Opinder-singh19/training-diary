

import React,{useState} from 'react';
import './ProductForm.css';
function ProductForm(props){
    const[newTitle,setTitle] = useState('');
    const[newDate,setDate] = useState('');

    function datechangeHandler(event){
        setDate(event.target.value);
        console.log(event.target.value);
    }
    function titlechangeHandler( event){
        setTitle(event.target.value);
        console.log(event.target.value);
    }


    function submithandler(event){
        event.preventDefault();

        const productData = {
            title: newTitle,
            date: newDate,
        };

        props.onSaveProduct(productData);
        //console.log(productData);
        // Here you would typically send the productData to a server or update the state in a parent component
        // For now, we will just log it to the console

        setTitle('');
        setDate(''); // Reset the form fields after submission
    }




//onChange={datechangeHandler}  UI pr change hone par value ko update krne ke liye use hota hai
//onChange={titlechangeHandler}  UI pr change hone par value ko update krne ke liye use hota hai
//onSubmit={submithandler}  Form submit hone par function ko call krne ke liye use hota hai
//type="date"
//type="text"  Input field ka type set krne ke liye use hota hai
//min='2025-1-1'  Input field ka minimum date set krne ke liye use hota hai
//max='2025-12-31'
//type="submit"  Button ka type set krne ke liye use hota hai
//className='new-product__control'  CSS class set krne ke liye use hota hai
//className='new-product__button'  CSS class set krne ke liye use hota hai
//className='new-product'  CSS class set krne ke liye use hota hai
//onSubmit={submithandler}  Form submit hone par function ko call krne ke liye use hota hai
//value={newTitle}  UI pr set krne ke liye use hota hai
//onChange={titlechangeHandler}  UI pr change hone par value ko update krne ke liye use hota hai
//value={ newDate}  UI pr set krne ke liye use hota hai
  return(<form onSubmit={submithandler}>
    

    <div className='new-product__control'>
        <div className='new-product__control'>
        <label>Title</label>
        <input type="text" value={newTitle} onChange={titlechangeHandler}/>
    </div>
    <div className='new-product__control'>
        <label>Date</label>  
        <input type="date"  value={ newDate}onChange={datechangeHandler} min='2025-1-1' max='2025-12-31'/>
     
    </div>
    <div className='new-product__button'>
        <button type="submit">Add product</button>
    </div>
    </div>
  </form>)
}
export default ProductForm;