import React, { useState, useCallback } from "react";
// import NewsList from './components/NewsList';
// import Categories from "./components/Categories";
import {Route} from 'react-router-dom';
import NewsPage from "./Pages/NewsPage";

const App = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);

  return (
    // <>
    //   <Categories category={category} onSelect={onSelect} />
    //   <NewsList category={category} />
    // </>
    <Route path="/:category?" component={NewsPage} />
  );
}

export default App;