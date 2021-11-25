import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import toastr from 'toastr';
import App from './Components/App';
import store from './redux/store';
import 'toastr/build/toastr.min.css'; // import the styles for better experience

// config toastr only once on a higher level, e.g. in index.js
toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
