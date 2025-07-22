import React,{ useState }  from "react";
import "./ProductItem.css";
import ProductDate from "./ProductDate";
import Card from "./Card";



const ProductItem = (props) => {
  // Using useState to manage the title state
  // Initially, the title is set to the title prop passed to ProductItem
  // You can change the title by clicking the button
  // This demonstrates how to use state in a functional component
  // The useState hook returns an array with the current state and a function to update it
  // Here, we initialize the title with props.title, but you can change it later
  // For example, you can set it to "Popcorn" when the button is clicked
  // The setTitle function is used to update the title state when the button is clicked
  // This is a simple example of how to use state in a functional component
  // The title will be displayed in the component, and it will change when the button is
   const[title,setTitle]=useState(props.title)


  function clickHandler() {
    setTitle("Popcorn");
    console.log("Clicked!");
  }
  return (
    <Card className="product-item">
      <ProductDate date={props.date} />
      <div className='product-item_discription'>
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>
        Add to cart
      </button>
    </Card>
  );
};

export default ProductItem;
