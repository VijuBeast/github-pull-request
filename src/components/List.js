/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {ExternalLink} from 'react-external-link'
import '../App.css'

const List = (props) => {
  const { pulls } = props;
  if (!pulls || pulls.length === 0) return <p>No pull request, sorry</p>;
  return (
    <table style={{width: '100%'}}>
      <tr style={{lineHeight: '30px'}}>
        <th>URL</th>
        <th>Title</th>
        <th>Base Branch</th>
        <th>Author Branch</th>
        <th>Author</th>
        <th>Created On</th>
        <th>Reviewers</th>
        <th>Labels</th>
      </tr>
      {pulls.map((pull) => {
        return (
          <tr>
            <td><ExternalLink href={pull.html_url} /></td>
            <td>{pull.title}</td>
            <td>{pull.base.ref}</td>
            <td>{pull.author_association}</td>
            <td>{pull.user.login}</td>
            <td>{pull.created_at}</td>
            <td>{pull.requested_reviewers.map((reviewers) => {return (reviewers.login)})}</td>
            <td>{pull.labels.map((label) => {return (label.name)})}</td>
          </tr>
        );
      })}
    </table>
  );
};
export default List;
