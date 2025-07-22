import logo from './logo.svg';
import './App.css';
import Products from './Components/Products';
import NewProduct from './Components/NewProduct';

function App() {
  const products=[
    {
      id: 1,
      name: "Product 1",
      title:'Nirma',
      price: 100,
      date: new Date(2021,8,1),
    },
    {
      id: 2,
      name: "Product 2",
       title:'Sirf Excel',
      price: 200,
      date: new Date(2021,5,1),
    },
    {
      id: 3,
      name: "Product 3",
       title:'Tide',
      price: 300,
      date: new Date(2021,6,1),
    },
    {
      id: 4,
      name: "Product 4",
       title:'maggi',
      price: 400,
      date: new Date(2021,4,1),
    }
  ];

// communication between child and parent component
// step 1: Create a function in the parent component (App.js) that will handle the data from the child component
function printProductData(productData) {
  console.log("Received product data from child component:");
    console.log(" data");
}
// step 2: Pass this function as a prop to the child component (ProductForm.js)
// This allows the child component to call this function and send data back to the parent component
// In the child component, you can call this function with the data you want to send back
//<NewProduct Opinder={printProductData}/>



// This is a functional component that returns the main application structure
  // It includes a list of products and a form to add new products
  return(
    <div>
      
      <NewProduct Opinder={printProductData}/>
      <Products items={products}/>
    </div>
  );
}

export default App;
