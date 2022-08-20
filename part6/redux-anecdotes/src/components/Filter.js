import { connect } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const Filter = (props) => {
  const handleChange = (event) => {
    const val=event.target.value
    props.setFilter(val.toLowerCase());
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

const mapDispatchToProps = { setFilter}

// export default Filter;
export default connect(null,mapDispatchToProps)(Filter)
