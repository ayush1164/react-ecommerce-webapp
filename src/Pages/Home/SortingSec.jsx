import './Sorting.css';

const SortingSec = (props) => {
  const { setSortOption } = props;
  return (
    <div className="sorting">
      <label htmlFor="sorting">↕ Sort By</label>
      <select
        name="sort"
        id="sorting"
        onChange={(e) => setSortOption(e.target.value)} 
        className='sort-select'
      >
        <option className='sort-select-options' value="default">Default</option>
        <option className='sort-select-options' value="low_to_high">Price: Low &gt; High</option>
        <option className='sort-select-options' value="high_to_low">Price: High &gt; Low</option>
      </select>
    </div>
  );
};

export default SortingSec;
