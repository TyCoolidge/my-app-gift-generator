import React from "react";
import { Link } from "react-router-dom";
import actions from "../../store/actions";
import { connect } from "react-redux";

class Header extends React.Component {
  //if user clicks on logo it will remove stored state
  removeEditableGift() {
    this.props.dispatch({
      type: actions.STORE_EDITABLE_GIFT,
      payload: {},
    });
  }
  render() {
    return (
      <div className="col-xl-6 offset-xl-3 col-8 offset-2">
        <Link to="/">
          <h2
            className="text-center titleSize"
            onClick={() => {
              this.removeEditableGift();
            }}
          >
            {/* TODO add logo */}
            Gift Finder
          </h2>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    editableGift: state.editableGift,
  };
}
export default connect(mapStateToProps)(Header);
