import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../../actions/todosAction";
import TodoList from "../../components/TodoList";
import { getVisibleTodos } from "../../selectors";

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

const mapStateToProps = (state) => ({
  filtredTodos: getVisibleTodos(state),
  loading: state.todos.loading,
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
