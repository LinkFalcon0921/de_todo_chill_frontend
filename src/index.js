
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { FiltersProvider } from './components/context/filters';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FiltersProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </FiltersProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
