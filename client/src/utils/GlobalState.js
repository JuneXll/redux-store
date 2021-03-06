import React from "react";
import { Provider } from 'react-redux';
import store from './store';


// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: '',
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

const StoreProvider = ({...props})=>{
  return<Provider store={store} {...props}/>
};

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

export { StoreProvider};
