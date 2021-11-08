import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import {Virtuoso} from 'react-virtuoso';
import withListLoading from './components/withListLoading';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    pulls: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    // const apiUrl = 'https://api.github.com/repos/VijuBeast/node-chat-app/pulls'
    // const apiUrl = 'https://api.github.com/repos/octocat/hello-world/pulls'
    const apiUrl = 'https://api.github.com/repos/neovim/neovim/pulls?per_page=100'
    console.log(apiUrl);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((pulls) => {
        setAppState({ loading: false, pulls: pulls });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      {/* <Virtuoso style={{  width: '1000px', height: '100px'}} totalCount={10} item={index => <div>Item {index}</div>} /> */}
      <div className=''>
        <h1>Neovim Pull Request</h1>
      </div>
      <div className='pull-container'>
        <ListLoading isLoading={appState.loading} pulls={appState.pulls} />
      </div>
    </div>
  );
}
export default App;
