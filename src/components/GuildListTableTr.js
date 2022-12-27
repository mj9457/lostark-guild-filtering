/* eslint-disable */
import { Link } from 'react-router-dom';

let url = 'https://www.naver.com';

function GuildListTableTr() {
  return (
    <tr>
      <td>니나브</td>
      <td>모코코와친구들</td>
      <td>친목</td>
      <td>5레벨</td>
      <td>1475레벨 이상</td>
      <td>20세 이상</td>
      <td>필수</td>
      <td>자율</td>
      <td>점령전, 토벌전</td>
      <td>
        <button onClick={() => window.open(url, '_blank')}>✔️</button>
      </td>
    </tr>
  );
}

export default GuildListTableTr;
