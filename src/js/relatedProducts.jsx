import styles from "../css/style";
import RecomendProducts from "./recomendProducts";

function RelatedProd({ handleSetSelectId }) {
 const handleClick = (id) => {
  handleSetSelectId(id);
 };

 return (
  <div style={styles.relProd}>
   <div>
    <h3 style={styles.title}>Related Products</h3>
   </div>
   <div style={styles.flexAlignJustRow}>
    <RecomendProducts id={0} onClick={() => handleClick(0)} />
    <RecomendProducts id={1} onClick={() => handleClick(1)} />
    <RecomendProducts id={2} onClick={() => handleClick(2)} />
    <RecomendProducts id={0} onClick={() => handleClick(0)} />
   </div>
  </div>
 );
}
export default RelatedProd;
