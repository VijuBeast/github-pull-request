/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ExternalLink } from "react-external-link";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import "../App.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const List = (props) => {
  const { pulls } = props;
  if (!pulls || pulls.length === 0) return <p>No Pull Request Sorry</p>;
  return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="large" aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">URL</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Base Branch</StyledTableCell>
              <StyledTableCell align="center">Author Branch</StyledTableCell>
              <StyledTableCell align="center">Author</StyledTableCell>
              <StyledTableCell align="center">Created On</StyledTableCell>
              <StyledTableCell align="center">Reviewers</StyledTableCell>
              <StyledTableCell align="center">Labels</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pulls.map((pull) => {
              return (
                <StyledTableRow
                  key={pull.title}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell>
                    <ExternalLink
                      className="external-link"
                      href={pull.html_url}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">{pull.title}</StyledTableCell>
                  <StyledTableCell align="center">
                    {pull.base.ref}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {pull.author_association}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {pull.user.login}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {moment(pull.created_at).format("DD/MM/YYYY")}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {pull.requested_reviewers.map((reviewers) => {
                      return reviewers.login;
                    })}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {pull.labels.map((label) => {
                      return label.name;
                    })}
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
  );
};
export default List;
