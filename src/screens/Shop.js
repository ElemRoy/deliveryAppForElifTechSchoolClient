import './Shop.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts as listProducts } from "../redux/actions/productActions";
import { addToCart } from '../redux/actions/cartActions';

function Shop(props) {
  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const addToCartHandler = (event) => {
    dispatch(addToCart(event.currentTarget.id));
    //history.push("/cart");
  }

  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => { dispatch(listProducts()); }, [dispatch]);

  function getCompanies (products){
    let companies = [];
  
    products.map((product) => {
        if(companies.includes(product.company) == false) {
          companies.push(product.company);
        }
    });
  
    return companies;
  }

  const [selectedCompany, setSelectedCompany] = useState(null);
  
  const selectCompany = (event) => {
    if(cartItems.length === 0){
      setSelectedCompany(event.currentTarget.textContent);
    } 
  };
  
  useEffect(() => {
    if(cartItems.length !== 0) {
      setSelectedCompany(getCompanies(cartItems)[0]);
    } else {
      setSelectedCompany(getCompanies(products)[0]);
    } 
  }, [products])

  return (
    <div class='container'>
      <div class='navBar childContainer'>
        <h1>Shops:</h1>
        
        {getCompanies(products).map((company) => {
          if(cartItems.length === 0){
            if(company === selectedCompany){
              return(
                <div class='activated companySlot' onClick={selectCompany}>{company}</div>
              )
            }
            else{
              return(
                <div class='companySlot' onClick={selectCompany}>{company}</div>
              )
            }
          }
          else {
            if(company === selectedCompany){
              return(
                <div class='activated companySlot' onClick={selectCompany}>{company}</div>
              )
            }
            else{
              return(
                <div class='closed companySlot' onClick={selectCompany}>{company}</div>
              )
            }
          }
        })}
      </div>

      <div class='productList childContainer'> 
        <h1>Products:</h1>

        <div class='products'>
          {products.map((product) => {
            if(selectedCompany != null){
              if(selectedCompany == product.company){
                return(
                  <div class='product'>
                    <img src={product.image}></img>
                    <p>{product.name}: {product.price}$</p>
                    <div id={product._id} onClick={addToCartHandler}>Add to cart</div>
                  </div>)
              }
            }
            else{
              return(
                <div class='product'>
                  <img src={product.image}></img>
                  <p>{product.name}: {product.price}$</p>
                  <div id={product._id} onClick={addToCartHandler}>Add to cart</div>
                </div>)
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
