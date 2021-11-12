/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ExternalLink } from "react-external-link";
import moment from "moment";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "../App.css";

// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";

const List = (props) => {
  const { pulls } = props;
  if (!pulls || pulls.length === 0) return <p>No Pull Request Sorry</p>;
  return (
    <Table className="table">
    <Thead>
      <Tr>
        <Th className="table-td-th" style={{background: 'black', color: 'white'}}>URL</Th>
        <Th className="table-td-th" style={{background: 'black', color: 'white'}}>Title</Th>
        <Th className="table-td-th" style={{background: 'black', color: 'white'}}>Base Branch</Th>
        <Th className="table-td-th" style={{background: 'black', color: 'white'}}>Author Branch</Th>
        <Th className="table-td-th" style={{background: 'black', color: 'white'}}>Author</Th>
        <Th className="table-td-th" style={{background: 'black', color: 'white'}}>Created On</Th>
        <Th className="table-td-th" style={{background: 'black', color: 'white'}}>Reviewers</Th>
        <Th className="table-td-th" style={{background: 'black', color: 'white'}}>Labels</Th>
      </Tr>
    </Thead>
    <Tbody>
      {pulls.map((pull) => {
        return (
          <Tr key={pull.title}>
          <Td className="table-td-th"><ExternalLink className="external-link"href={pull.html_url}/></Td>
          <Td className="table-td-th">{pull.title}</Td>
          <Td className="table-td-th">{pull.base.ref}</Td>
          <Td className="table-td-th">{pull.author_association}</Td>
          <Td className="table-td-th">{pull.user.login}</Td>
          <Td className="table-td-th">{moment(pull.created_at).format("DD/MM/YYYY")}</Td>
          <Td className="table-td-th">{pull.requested_reviewers.map((reviewers) => {return reviewers.login})}</Td>
          <Td className="table-td-th">{pull.labels.map((label) => {return label.name})}</Td>
        </Tr>
        )
      })}
    </Tbody>
  </Table>
    // <Grid container direction="row" justifyContent="center" alignItems="center" >
    //   <TableContainer component={Paper}>
    //     <Table sx={{minWidth: 650}} size="large" aria-label="simple table">
    //       <TableHead>
    //         <TableRow>
    //           <StyledTableCell align="center">URL</StyledTableCell>
    //           <StyledTableCell align="center">Title</StyledTableCell>
    //           <StyledTableCell align="center">Base Branch</StyledTableCell>
    //           <StyledTableCell align="center">Author Branch</StyledTableCell>
    //           <StyledTableCell align="center">Author</StyledTableCell>
    //           <StyledTableCell align="center">Created On</StyledTableCell>
    //           <StyledTableCell align="center">Reviewers</StyledTableCell>
    //           <StyledTableCell align="center">Labels</StyledTableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {pulls.map((pull) => {
    //           return (
    //             <StyledTableRow
    //               key={pull.title}
    //               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //             >
    //               <StyledTableCell>
    //                 <ExternalLink
    //                   className="external-link"
    //                   href={pull.html_url}
    //                 />
    //               </StyledTableCell>
    //               <StyledTableCell align="center">{pull.title}</StyledTableCell>
    //               <StyledTableCell align="center">
    //                 {pull.base.ref}
    //               </StyledTableCell>
    //               <StyledTableCell align="center">
    //                 {pull.author_association}
    //               </StyledTableCell>
    //               <StyledTableCell align="center">
    //                 {pull.user.login}
    //               </StyledTableCell>
    //               <StyledTableCell align="center">
    //                 {moment(pull.created_at).format("DD/MM/YYYY")}
    //               </StyledTableCell>
    //               <StyledTableCell align="center">
    //                 {pull.requested_reviewers.map((reviewers) => {
    //                   return reviewers.login;
    //                 })}
    //               </StyledTableCell>
    //               <StyledTableCell align="center">
    //                 {pull.labels.map((label) => {
    //                   return label.name;
    //                 })}
    //               </StyledTableCell>
    //             </StyledTableRow>
    //           );
    //         })}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // </Grid>
  );
};
export default List;
