import ProductCategoryRow from './ProductCategoryRow.jsx';
import ProductRow from './ProductRow.jsx';

export default function ProductTable(props) {
  const rows = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        key={product.name}
        name={product.name}
        price={product.price}
        stocked={product.stocked}
      />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr><th>Name</th><th>Price</th></tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
