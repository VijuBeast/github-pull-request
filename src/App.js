import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    pulls: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://api.github.com/repos/VijuBeast/node-chat-app/pulls'
    // const apiUrl = 'https://api.github.com/repos/octocat/hello-world/pulls'
    console.log(apiUrl);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((pulls) => {
        setAppState({ loading: false, pulls: pulls });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className=''>
        <h1>Github Pull Request</h1>
      </div>
      <div className='pull-container'>
        <ListLoading isLoading={appState.loading} pulls={appState.pulls} />
      </div>
    </div>
  );
}
export default App;
