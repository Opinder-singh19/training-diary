import './NewProduct.css';
import ProductForm from './ProductForm';

function NewProduct(props){

    function saveProduct(product){
        console.log("Product saved!");
        // Here you would typically handle the product data, e.g., send it to a server
        // For now, we will just log it to the console
        console.log(product);
        //calling parent function to pass data to parent component
        props.Opinder(product);
        // This will call the function passed from the parent component (App.js) with the product
        // data as an argument, allowing the parent to handle it as needed
        // You can also reset the form fields here if needed
        // For example, you can clear the input fields after saving the product
        // setTitle(''); // Reset the title field
        
    }
    return(<div className='new-product'>
        <ProductForm onSaveProduct={saveProduct}></ProductForm>
    </div>)

}
export default NewProduct;