import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductByBarcode } from "../services/api";

const loadProduct = async () => {
  const data = await fetchProductByBarcode(barcode);
  setProduct(data);
};
function ProductDetail() {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
  loadProduct();
}, [loadProduct]);


  if (!product) return <h2 style={{ padding: "20px" }}>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.product_name}</h2>

      <img
        src={product.image_front_url}
        width="200"
        alt=""
      />

      <h3>Ingredients</h3>
      <p>{product.ingredients_text || "No data"}</p>

      <h3>Nutrition</h3>
      <p>Energy: {product.nutriments?.energy}</p>
      <p>Fat: {product.nutriments?.fat}</p>
      <p>Carbs: {product.nutriments?.carbohydrates}</p>
      <p>Protein: {product.nutriments?.proteins}</p>

      <h3>Labels</h3>
      <p>{product.labels || "No labels"}</p>
    </div>
  );
}

export default ProductDetail;
