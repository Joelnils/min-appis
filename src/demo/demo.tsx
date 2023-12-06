interface FilterProps {
  setFilter: (filter: string) => void;
}

export const FilterComponent: React.FC<FilterProps> = ({ setFilter }) => {
  return (
    <select onChange={(e) => setFilter(e.target.value)}>
      <option value="">Alla Kategorier</option>
      <option value="men's clothing">Herrkläder</option>
      <option value="women's clothing">Damkläder</option>
      <option value="jewelery">Smycken</option>
      <option value="electronics">Elektronik</option>
    </select>
  );
};
