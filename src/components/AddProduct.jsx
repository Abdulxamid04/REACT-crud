import { useGlobalContext } from "../contex"

export default function AddProduct() {


    const {title, setTitle, price, setPrice, handleSubmit} = useGlobalContext();
    

  return (
      <div>
          <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">title</label>
              <br />
              <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
              />
              <br />
              <label htmlFor="">price</label>
              <br />
              <input
                  type="text"
                  name=""
                  id=""
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
              />
              <br />
              <button>add</button>
          </form>
    </div>
  )
}
