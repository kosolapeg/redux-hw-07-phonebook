import { connect } from 'react-redux';
import { increment, decrement } from '../../redux/counter-slice';
import CounterButton from './Counter';

const mapStateToProps = state => ({
  clicks: state.counter.value,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(increment()),
  onContextMenu: e => {
    e.preventDefault();
    return dispatch(decrement());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterButton);
