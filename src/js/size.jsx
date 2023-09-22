import products from "./products";

function Sizewrap({ id }) {
 const curProduct = products.find((item) => item.id === id);

 return (
  <div className="gridSize">
   <div>
    <p>{curProduct.size[0]}</p>
   </div>
   <div>
    <p>{curProduct.size[1]}</p>
   </div>
   <div>
    <p>{curProduct.size[2]}</p>
   </div>
   <div>
    <p>{curProduct.size[3]}</p>
   </div>
   <div>
    <p>{curProduct.size[4]}</p>
   </div>
   <div>
    <p>{curProduct.size[5]}</p>
   </div>
  </div>
 );
}

export default Sizewrap;
