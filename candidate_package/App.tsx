import React from 'react';
import ResultView from './components/ResultView';
import { data } from './mockData';

function App() {
  return <ResultView data={data} />;
}

export default App;