function CategoryFilter({ onChange }) {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: "10px",
        marginRight: "10px",
      }}
    >
      <option value="snacks">Snacks</option>
      <option value="beverages">Beverages</option>
      <option value="dairy">Dairy</option>
      <option value="biscuits">Biscuits</option>
      <option value="chocolates">Chocolates</option>
    </select>
  );
}

export default CategoryFilter;
