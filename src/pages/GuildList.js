/* eslint-disable */
import TitleContent from '../components/TitleContent';
import Table from 'react-bootstrap/Table';
import guildData from '../utils/guildData';
import filterStyleData from '../utils/filterStyleData';
import GuildListTableTr from '../components/GuildListTableTr';
import FilterKinds from '../components/FilterKinds';
import '../css/mainContainer.css';

function GuildList() {
  return (
    <>
      <div className="mainContainer">
        <TitleContent />
      </div>
      <div className="filter_box">
        {filterStyleData.map((a, index) => {
          return <FilterKinds index={index}></FilterKinds>;
        })}
      </div>
      <GuildListTable></GuildListTable>
    </>
  );
}

function GuildListTable() {
  return (
    <Table striped bordered hover className="guildListTable">
      <thead>
        <tr>
          <th>서버</th>
          <th>길드명</th>
          <th>길드종류</th>
          <th>길드상점</th>
          <th>레벨제한</th>
          <th>나이제한</th>
          <th>디스코드</th>
          <th>마이크</th>
          <th>오픈카톡</th>
          <th>길드컨텐츠</th>
          <th>컨텐츠범위</th>
          <th>토벌전</th>
          <th>점령전</th>
          <th>문의링크</th>
        </tr>
      </thead>
      <tbody>
        {guildData.map((a, index) => {
          return <GuildListTableTr index={index}></GuildListTableTr>;
        })}
      </tbody>
    </Table>
  );
}

export default GuildList;
