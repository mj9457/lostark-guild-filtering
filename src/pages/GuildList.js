/* eslint-disable */
import TitleContent from '../components/TitleContent';
import Table from 'react-bootstrap/Table';
import GuildListTableTr from '../components/GuildListTableTr';
import '../css/mainContainer.css';

function GuildList() {
  return (
    <div className="mainContainer">
      <TitleContent />
      <GuildListTable></GuildListTable>
    </div>
  );
}

function GuildListTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>서버</th>
          <th>길드명</th>
          <th>길드종류</th>
          <th>길드상점</th>
          <th>레벨제한</th>
          <th>나이제한</th>
          <th>디스코드</th>
          <th>오픈카톡</th>
          <th>길드컨텐츠</th>
          <th>문의링크</th>
        </tr>
      </thead>
      <tbody>
        <GuildListTableTr></GuildListTableTr>
        <GuildListTableTr></GuildListTableTr>
        <GuildListTableTr></GuildListTableTr>
        <GuildListTableTr></GuildListTableTr>
      </tbody>
    </Table>
  );
}

export default GuildList;
