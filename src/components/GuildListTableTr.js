/* eslint-disable */
import filterStyleData from '../utils/filterStyleData';
import guildData from '../utils/guildData';

function GuildListTableTr(props) {
  return (
    <tr>
      <td>
        {(() => {
          switch (guildData[props.index].guildServer) {
            case '니나브':
              return (
                <div
                  style={{
                    margin: '4px',
                    padding: '4px',
                    border: '0',
                    fontSize: '14px',
                    borderRadius: '4px',
                    color: filterStyleData[0].color,
                    background: filterStyleData[0].background,
                  }}
                >
                  {filterStyleData[0].name}
                </div>
              );
            case '루페온':
              return (
                <div
                  style={{
                    margin: '4px',
                    padding: '4px',
                    border: '0',
                    fontSize: '14px',
                    borderRadius: '4px',
                    color: filterStyleData[1].color,
                    background: filterStyleData[1].background,
                  }}
                >
                  {filterStyleData[1].name}
                </div>
              );
            case '실리안':
              return (
                <div
                  style={{
                    margin: '4px',
                    padding: '4px',
                    border: '0',
                    fontSize: '14px',
                    borderRadius: '4px',
                    color: filterStyleData[2].color,
                    background: filterStyleData[2].background,
                  }}
                >
                  {filterStyleData[2].name}
                </div>
              );
            case '아만':
              return (
                <div
                  style={{
                    margin: '4px',
                    padding: '4px',
                    border: '0',
                    fontSize: '14px',
                    borderRadius: '4px',
                    color: filterStyleData[3].color,
                    background: filterStyleData[3].background,
                  }}
                >
                  {filterStyleData[3].name}
                </div>
              );
            case '아브렐슈드':
              return (
                <div
                  style={{
                    margin: '4px',
                    padding: '4px',
                    border: '0',
                    fontSize: '14px',
                    borderRadius: '4px',
                    color: filterStyleData[4].color,
                    background: filterStyleData[4].background,
                  }}
                >
                  {filterStyleData[4].name}
                </div>
              );
            case '카단':
              return (
                <div
                  style={{
                    margin: '4px',
                    padding: '4px',
                    border: '0',
                    fontSize: '14px',
                    borderRadius: '4px',
                    color: filterStyleData[5].color,
                    background: filterStyleData[5].background,
                  }}
                >
                  {filterStyleData[5].name}
                </div>
              );
            case '카마인':
              return (
                <div
                  style={{
                    margin: '4px',
                    padding: '4px',
                    border: '0',
                    fontSize: '14px',
                    borderRadius: '4px',
                    color: filterStyleData[6].color,
                    background: filterStyleData[6].background,
                  }}
                >
                  {filterStyleData[6].name}
                </div>
              );
            case '카제로스':
              return (
                <div
                  style={{
                    margin: '4px',
                    padding: '4px',
                    border: '0',
                    fontSize: '14px',
                    borderRadius: '4px',
                    color: filterStyleData[7].color,
                    background: filterStyleData[7].background,
                  }}
                >
                  {filterStyleData[7].name}
                </div>
              );
          }
        })()}
      </td>
      <td>{guildData[props.index].guildName}</td>
      <td>{guildData[props.index].guildKinds}</td>
      <td>{guildData[props.index].guildShopLevel + '레벨'}</td>
      <td>{guildData[props.index].guildLevelLimit + '🔼'}</td>
      <td>{guildData[props.index].guildAgeLimit + '🔼'}</td>
      <td>{guildData[props.index].guildDiscord}</td>
      <td>{guildData[props.index].guildDiscordMike}</td>
      <td>{guildData[props.index].guildKakaoTalk}</td>
      <td>{guildData[props.index].guildContent}</td>
      <td>{guildData[props.index].guildContentRagne}</td>
      <td>{guildData[props.index].guildSubjugation}</td>
      <td>{guildData[props.index].guildOccupationWar}</td>
      <td>
        <button
          onClick={() => window.open(guildData[0].guildContactLink, '_blank')}
        >
          ✔️
        </button>
        {/* <OverlayTrigger
        key={'bottom'}
        placement={'bottom'}
        overlay={
          <Tooltip id={`tooltip-${'bottom'}`}>
            Tooltip on <strong>{'bottom'}</strong>.
          </Tooltip>
        }
      >
        <Button variant="secondary"></Button>
      </OverlayTrigger> */}
      </td>
    </tr>
  );
}

export default GuildListTableTr;
