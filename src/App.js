import React, { useEffect, useState } from "react";
import List from "./components/List";
import withListLoading from "./components/withListLoading";
import { styled } from "@mui/material/styles";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.h2,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  textAlign: "center",
  textDecoration: "underline",
}));

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    pulls: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    setAppState({ loading: true });
    // const apiUrl = 'https://api.github.com/repos/VijuBeast/node-chat-app/pulls'
    // const apiUrl = 'https://api.github.com/repos/octocat/hello-world/pulls'
    const apiUrl = "https://api.github.com/repos/neovim/neovim/pulls";
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could Not Fetch The Data From The Resource!!!");
        }
        return res.json();
      })
      .then((pulls) => {
        setAppState({ loading: false, pulls: pulls });
      })
      .catch((err) => {
        setAppState({ loading: false });
        setError(err.message);
      });
  }, [setAppState]);
  return (
    <div>
      <Div>{"NEOVIM PULL REQUEST"}</Div>
      {error && <Div className="error">{error}</Div>}
      <ListLoading isLoading={appState.loading} pulls={appState.pulls} />
    </div>
  );
}
export default App;
