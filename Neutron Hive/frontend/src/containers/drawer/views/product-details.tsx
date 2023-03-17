import React, { useState, useContext ,useEffect} from 'react';
import { Scrollbar } from 'components/scrollbar';
import Button from 'components/button';
import { CURRENCY } from 'helpers/constants';
import { useCart } from 'contexts/cart/cart.provider';
import { DrawerContext } from 'contexts/drawer/drawer.provider';
import ArrowLeft from 'assets/icons/arrow-left';
import Counter from 'components/counter';
import axios from 'axios';

export default function ProductDetails() {
  const [visibility, setVisibility] = useState(false);
  const { addItem, getItem, removeItem } = useCart();
  const { state, dispatch } = useContext(DrawerContext);
  const [rakshavalue,setrakshavalue]=useState(0);
  const count = getItem(state.item.id)?.quantity;
  const [role,setRole] = useState('');
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  const fetchData2 = async (URL2) => {
    try {

      await axios({
        method: 'GET',
        url: URL2,
      }).then((res) => {
   
        setRole(res.data.finalRole)
    
      //   setRole(res.data.finalRole);
          // console.log(role);
      });
    } 
    catch (err){
      console.log(err)
    }
  }
  useEffect(()=>{
    const URL2 = "https://medirole-api-production.up.railway.app/api/v1/users/getrole";
    fetchData2(URL2);
  },[])
  const hideDetails = () => {
    dispatch({
      type: 'TOGGLE_PRODUCT_DETAIL',
      payload: {
        showDetails: false,
      },
    });

    dispatch({
      type: 'SLIDE_CART',
      payload: {
        open: false,
      },
    });
  };
  const vote=async()=>{
    console.log(rakshavalue);
    
  }
  const addToCart = () => {
    addItem(state.item);
    dispatch({
      type: 'TOGGLE_CART_VIEW',
      payload: {
        showCart: true,
      },
    });
  };
  
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full flex justify-center relative px-30px py-20px">
        <button
          className="w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half -mt-20px left-30px transition duration-300 focus:outline-none hover:text-gray-900"
          onClick={hideDetails}
          aria-label="close"
        >
          <ArrowLeft />
        </button>

        <h2 className="font-bold text-24px m-0">Details</h2>
      </div>

      <Scrollbar className="details-scrollbar flex-grow">
        <div className="flex flex-col p-30px pt-0">
          <div className="flex items-center justify-center w-full h-360px overflow-hidden rounded mb-30px">
            <img src={state.item.image} alt={`${state.item.name}-img`} />
          </div>
          <div className="flex flex-col items-start mb-4">
            <span className="mb-3" style={{fontSize:"2rem"}}>{state.item.name}</span> 
            <span className="text-gray-900 text-30px mb-2 font-semibold" >

              {CURRENCY}
              {state.item.price}
            </span>
            <p className=" items-center mb-5  flex flex-col">
              <div className='flex'>
              <span className=" text-gray-500 text-11px capitalize">
                {state.item.type}
              </span>
              <span className="flex bg-gray-500 mt-2 w-3px h-3px rounded mx-3" />
              <span className=" text-gray-500 text-11px">
                {state.item.quantity}{' '}
                {state.item.quantity > 1 ? 'pieces' : 'piece'}
              </span>
              </div>
              <div>
            <p className='font-extrabold mt-6'>Raksha Value ✅</p>  
            <span className="mb-3" style={{fontSize:"2rem"}} >{state.item.raksha_value}</span>

              </div>
            </p>

            {visibility === true ? (
              <p className="my-5">{state.item.description}</p>
            ) : (
              ''
            )}

            {state.item.description && (
              <button
                className="font-semibold text-11px text-gray-800 mt-2 focus:outline-none"
                onClick={toggleVisibility}
                aria-label="details"
              >
                {visibility === true ? 'Less Details' : 'More Details'}
              </button>
            )}
          </div>
          {/* <div className="flex flex-col items-start mb-4">
            <span className="text-gray-900 font-semibold mb-2">
              {CURRENCY}
              {state.item.price}
            </span>
            <p className="flex items-center mb-5">
              <span className=" text-gray-500 text-11px capitalize">
                {state.item.type}
              </span>
              <span className="flex bg-gray-500 w-3px h-3px rounded mx-3" />
              <span className=" text-gray-500 text-11px">
                {state.item.quantity}{' '}
                {state.item.quantity > 1 ? 'pieces' : 'piece'}
              </span>
              <div>
            <p>Raksha Value ✅</p>  
            <span className="mb-3" style={{fontSize:"2rem"}} >{state.item.raksha_value}</span>

              </div>
            </p>

            {visibility === true ? (
              <p className="my-5">{state.item.description}</p>
            ) : (
              ''
            )}

            {state.item.description && (
              <button
                className="font-semibold text-11px text-gray-800 mt-2 focus:outline-none"
                onClick={toggleVisibility}
                aria-label="details"
              >
                {visibility === true ? 'Less Details' : 'More Details'}
              </button>
            )}
          </div> */}

          <div className="flex w-full flex-col">
            <div className="flex flex-col justify-start full mt-10 pr-30px even:pr-0">
              <span className="text-gray-500 text-11px mb-2">Dosages Form</span>
              <span className="font-normal text-13px text-gray-900 capitalize">
                {state.item.type}
              </span>
            </div>

            <div className="flex flex-col justify-start full mt-10 pr-30px even:pr-0">
              <span className="text-gray-500 text-11px mb-2">Dosages</span>
              <span className="font-normal text-13px text-gray-900 capitalize">
                {state.item.dosage}
              </span>
            </div>

            <div className="flex flex-col justify-start full mt-10 pr-30px even:pr-0">
              <span className="text-gray-500 text-11px mb-2">
                Active Substance
              </span>
              <span className="font-normal text-13px text-gray-900 capitalize">
                {state.item.substance}
              </span>
            </div>

            <div className="flex flex-col justify-start full mt-10 pr-30px even:pr-0">
              <span className="text-gray-500 text-11px mb-2">Manufacturer</span>
              <span className="font-normal text-13px text-gray-900 capitalize">
                {state.item.manufacturer}
              </span>
            </div>
          </div>
        </div>
      </Scrollbar>
      {role !='oracle'?<div className="flex flex-col p-30px">
        {count > 0 ? (
          <Counter
            value={count}
            className="ml-auto w-full big"
            size="big"
            onIncrement={() => {
              addItem(state.item);
            }}
            onDecrement={() => removeItem(state.item)}
          />
        ) : (
          <Button className="w-full big" onClick={addToCart}>
            Add To Cart
          </Button>
        )}
      </div>:<div className="flex flex-col p-30px">
          <input type='number' placeholder='Raksha Value' value={rakshavalue} onChange={(e)=>{setrakshavalue(e.target.value)}}/>
          <Button className="w-full big" onClick={vote}>
            Vote
          </Button>
      </div>}
      
      
   </div>
 );
}
