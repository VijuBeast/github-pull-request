import React, { useEffect, useState } from "react";
import List from "./components/List";
import withListLoading from "./components/withListLoading";
import { styled } from "@mui/material/styles";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./App.css";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.h5,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  textAlign: "center",
  textDecoration: "underline",
  fontWeight: 'bold'
}));

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    pulls: null,
  });
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [,  setPull] = useState([]);

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://api.github.com/repos/neovim/neovim/pulls?page=${page}&per_page=5`;
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could Not Fetch The Data From The Resource!!!");
        }
        return res.json();
      })
      .then((pulls) => {
        setAppState({ loading: false, pulls: pulls });
        setPull(...pulls);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [setAppState, page]);

  // const scrollToEnd = () => {
  //   setPage(page + 1);
  // };

  // window.onscroll = function () {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //     document.documentElement.offsetHeight
  //   ) {
  //     scrollToEnd()
  //   }};

  return (
    <div>
      <Div>{"NEOVIM PULL REQUEST"}</Div>
      {error && <Div className="error">{error}</Div>}
      <ListLoading isLoading={appState.loading} pulls={appState.pulls} />
      <Stack spacing={10} direction="row" className="material-button">
        <Button color="secondary" variant="outlined" onClick={() => setPage(page + 1)}>
          NEXT
        </Button>
        <Button color="secondary" variant="outlined" onClick={() => setPage(page - 1)}>
          PREVIOUS
        </Button>
      </Stack>
    </div>
  );
}
export default App;

// const apiUrl = 'https://api.github.com/repos/VijuBeast/node-chat-app/pulls'
// const apiUrl = 'https://api.github.com/repos/octocat/hello-world/pulls'
