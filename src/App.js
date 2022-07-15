import React from "react";

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import MainCard from './components/MainCard';


function App() {
  return (
    <>
    <div className="App">
        <Layout>
          <MainCard/>
        </Layout>
    </div>
    <GlobalStyles />
    </>
  );
}

export default App;
