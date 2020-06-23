import { connect } from "react-redux";
import { setVisibilityFilter } from "../../actions/todosAction";
import Link from "../../components/Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.setVisibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
