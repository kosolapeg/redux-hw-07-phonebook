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

// import Counter from './Counter';
// import { connect } from 'react-redux';
// import increment from '../../redux/counter';

// const mapStateToProps = state => {
//   console.log('STATESHHHIIIIIITTT', state);
//   return {
//     clicks: state.counter.value,
//   };
// };

// // const mapDispatchToProps = dispatch => ({
// //   onClick: () => dispatch(increment()),
// // });

// const mapDispatchToProps = dispatch => ({
//   onClick: () => dispatch(increment()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
