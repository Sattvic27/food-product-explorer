function SortDropdown({ onSort }) {
  return (
    <select
      onChange={(e) => onSort(e.target.value)}
      style={{ padding: "10px" }}
    >
      <option value="">Sort</option>
      <option value="az">Name A-Z</option>
      <option value="za">Name Z-A</option>
      <option value="grade">Nutrition Grade</option>
    </select>
  );
}

export default SortDropdown;
