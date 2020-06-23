import { connect } from "react-redux";
import * as TodoActions from "../../actions/todosAction";
import MainSection from "../../components/MainSection";
import { bindActionCreators } from "redux";
import { getCompletedTodoCount } from "../../selectors";

const mapStateToProps = (state) => ({
  todosCount: state.todos.todos.length,
  completedCount: getCompletedTodoCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
