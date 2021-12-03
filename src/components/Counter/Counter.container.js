import { connect } from 'react-redux';
import { increment } from '../../redux/counter';
import CounterButton from './Counter';

const mapStateToProps = state => ({
  clicks: state.counter.value,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterButton);
