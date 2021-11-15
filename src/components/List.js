/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ExternalLink } from "react-external-link";
import moment from "moment";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "../App.css";

const List = (props) => {
  const { pulls } = props;
  if (!pulls || pulls.length === 0) return <p style={{textAlign: 'center', fontSize: '20px'}}>No Pull Request Sorry</p>;
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
  );
};
export default List;
