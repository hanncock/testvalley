import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ProductCard from './components/ProductCard';
import ImageSlider from './components/Slider'
import {useState, useEffect} from 'react';
import ProdCategoryCard from './components/ProdCategories';
import ProdCatDisp from './components/ProdsCatDisp';
// import ProdCatDisp from './components/ProdsCatDisp';
import search from './search.svg'

const API_1 = "https://api.testvalley.kr/main-banner/all"
const API_2 = "https://api.testvalley.kr/main-shortcut/all"
const API_3 = "https://api.testvalley.kr/collections?prearrangedDiscount"

// const products1 = {
//   "mainBannerId":97,
//   "title":1,
//   "sort":1,
//   "pcImageUrl":"https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1707875671502-메인배너_PC_센터_음향기기빅세일.png",
//   "mobileImageUrl":"https://dvd6ljcj7w3pj.cloudfront.net/static/main_banner/1707875658252-메인배너_MO_센터_음향기기빅세일.png",
//   "linkUrl":"https://www.testvalley.kr/collections/2424",
//   "startDate":"2024-01-23T08:09:38.000Z",
//   "endDate":"2024-03-01T01:52:00.000Z",
//   "creator":"c0335dba-772b-4e5e-b71c-05b426e69a92",
//   "updater":"c0335dba-772b-4e5e-b71c-05b426e69a92",
//   "deleter":null,
//   "createdAt":"2024-01-23T08:10:19.000Z",
//   "updatedAt":"2024-02-14T01:54:39.000Z",
//   "deletedAt":null
// }

// const prodcategories = {
//   "mainShortcutId": 1,
//   "title":1,
//   "sort":1,
//   "imageurl":"https://dvd6ljcj7w3pj.cloudfront.net/static/main_shortcut/1705641890698-갤럭시모음2.jpg",
//   "linkUrl":"https://www.testvalley.kr/collections/2350",
// }

const prods = {
  "title":"soke",
  "name":"sokoeoeo"
}

const App = () => {
  //display all banner products
  const [slideData, setSlides] = useState([]);


  //display in slider
  const [slides, setSlider] = useState([]);

  const getbanner = async () => {
    const response = await fetch(`${API_1}`);
    const data = await response.json();
    setSlider(data);
  }


  //read from API 2
  const [categories, setCategories] = useState([]);

  const getApi2 = async () => {
    const response = await fetch(`${API_2}`);
    const data = await response.json();
    setCategories(data);
  }

  //read from API 3
  const [productsDisp, setProducts] = useState([]);
  
  const getApi3 = async () => {
    const response = await fetch(`${API_3}`);
    const data = await response.json();
    setProducts(data['items']);

    // productsDisp.length > 0 ? 
    //   productsDisp.reduce((prods, {title, description}) => {
    //     if(!prods[title]) prods[title] = [];
    //     prods[title].push(description);
    //     <ProdCatDisp prodscatdisp={prods} />
    //   })
    //   : console.log("no products")

  }

  

  useEffect(() =>{
    getbanner();
    getApi2();
    getApi3();
  }, []);

  const imager = {
    padding: "15px"
  }

  return (
    <div className="App">
      <div className="header">
          <img 
            src={logo} 
            alt="React Image" 
            style={imager}
          /> 
        
        <div className="search">
        <img 
            src={search} 
            alt="React Image" 
            style={imager}
          /> 
          <input type='text'
              placeholder="Search products"
              value="Search"
              onChange={()=>{}}
          />
        </div>
      </div>

      <div className="banner">
        {slides.length == 0 ?
          (<p>welcome</p>) : 
          (<ImageSlider slides={slides} />)
        }
        {/* {
          slideData.length > 0 ?
          (
            <div className="container">
              {slideData.map((slideProd)=> (
                  <ProductCard slideProd={slideProd}/>

              ))}
            </div>
          ) : (
            <div className='empty'></div>
          ) 
        } */}
      </div>
      <div className="productsCat">
        {
          categories.length > 0 ?
          (
            <div>
              {
                categories.map((categories)=>(
                  <ProdCategoryCard prods={categories}/>
                ))
              }
            </div>

          ):( <h1>...</h1> )
        }
      </div>

      <div className="cats">
          
            {
      // productsDisp.length > 0 ? 
      // productsDisp.reduce((prods, {title, description}) => {
      //   if(!prods[title]) prods[title] = [];
      //   prods[title].push(description);
      //   <ProdCatDisp prodscatdisp={prods} />
      // })
      // : <div>no prod</div>

            productsDisp.map((productsDisp)=>(
            <ProdCatDisp prodscatdisp={productsDisp} />
           ))
          
          }
          
      </div>

      

    </div>
    
  );
  
 
}

export default App;
