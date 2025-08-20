function ProductRow({ name, price, stocked }) {
  const styleClass = stocked ? "" : "out-of-stock";
  return (
    <tr>
      <td className={styleClass}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
