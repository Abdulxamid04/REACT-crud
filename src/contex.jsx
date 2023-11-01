import { createContext, useContext,useState } from "react";
const getLocalStorage = () => {
    return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
  }

const AppContext = createContext();
const AppProvider = (children) => {
    const id = uid();
    const img = 'https://picsum.photos/id/1/200/300';

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [list, setList] = useState(getLocalStorage());

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { id: id, name: title, narx: price, image: img };
        setList([...list, newItem]);
        setTitle('')
        setPrice('')
      }

    
  const removeItem = (id) => {
    const newItem = list.filter((item) => item.id !== id)
    setList(newItem);
  }
  const handleLogin = (e) => {
    e.preventDefault()
    const newItem = {name: name}
    setUser(newItem)
  }

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(list));
  }, [list]);

    return(
        <AppContext.Provider value={{
            title,
            setTitle,
            price,
            setPrice,
            list,
            setList,
            removeItem, 
            handleSubmit
        }}>
               {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext , AppProvider};