import React from "react";
import PropTypes from "prop-types";
import { addAnce, createAnce } from "../reducers/anceReducer";
import { connect } from "react-redux";

function AncedoteForm(props) {
  return (
    <>
      <h2>create new</h2>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          props.createAnce(e.target.ance.value);
          e.target.ance.value = "";
        }}
      >
        <div>
          <input name="ance" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
}

const mapDispatchToProps = { createAnce };

AncedoteForm.propTypes = {};

// export default AncedoteForm;
export default connect(null, mapDispatchToProps)(AncedoteForm);
