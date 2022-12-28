/* eslint-disable */
import filterStyleData from '../utils/filterStyleData';

function FilterKinds(props) {
  return (
    <span
      style={{
        margin: '4px',
        padding: '4px',
        border: '0',
        fontSize: '14px',
        borderRadius: '4px',
        color: filterStyleData[props.index].color,
        background: filterStyleData[props.index].background,
      }}
    >
      {filterStyleData[props.index].name}
    </span>
  );
}

export default FilterKinds;
