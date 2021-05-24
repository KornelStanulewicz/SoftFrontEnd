import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

import Home from './views/home/Home';
import Movie from './views/movie/Movie';
import Page404 from './views/404page/Page404';
import TodoPanel from './views/todoPanel/TodoPanel';
import store from './store';

import './App.css';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route path="/movie/:id" component={Movie} />
            <Route path="/" component={Home} exact />
            <Route path="/todos" component={TodoPanel} />
            <Route path="*" component={Page404} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;


// import Counter from './components/Counter';
// import CustomHeader, { addNumber } from './components/CustomHeader';


// const App = () => {
//   const addedNumber = addNumber(1, 2);
//   const [changeNumber, setChangedNumber] = React.useState(0);

//   const handleNumberChange = ( newNumber: number ) => {
//     setChangedNumber(newNumber);
//   }

//   const liczbaMniejszaOdZera = (liczba: number) => {
//     if (liczba < 0){
//       return (<div>liczba jest mniejsza od 0</div>)
//     }
//   }

//   return (
//     <div className="App">
//       <CustomHeader>`
//         {/* <Counter onNumberChange={(newNumber)=> { console.log(newNumber)}}/> */}
//         <Counter onNumberChange={handleNumberChange}/>
//         {
//           changeNumber > 0 && (<div> Liczba jest wieszka od 0</div>)
//         }
//         {liczbaMniejszaOdZera(changeNumber)}
//       </CustomHeader>   

//     </div>
//   );
// }

// export default App;