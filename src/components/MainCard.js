/* eslint-disable */
import { Card, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../css/utils.css';

function MainCard() {
  return (
    <>
      <Card
        bg="light"
        key="light"
        text="dark"
        style={{ width: '18rem' }}
        className="mb-2"
      >
        <Card.Header>서버</Card.Header>
        <Card.Body>
          <Card.Title> 길드명 </Card.Title>
          <Card.Text>
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">혈석냠냠</Tooltip>}
            >
              <Badge bg="dark" className={'mgR-5'}>
                혈석길드
              </Badge>
            </OverlayTrigger>
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">문의 가능</Tooltip>}
            >
              <Badge bg="dark" className={'mgR-5'}>
                1475레벨~
              </Badge>
            </OverlayTrigger>
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">문의 가능</Tooltip>}
            >
              <Badge bg="dark" className={'mgR-5'}>
                20~30대
              </Badge>
            </OverlayTrigger>
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">마이크 자유</Tooltip>}
            >
              <Badge bg="dark" className={'mgR-5'}>
                디스코드 필수
              </Badge>
            </OverlayTrigger>
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">자유 참여</Tooltip>}
            >
              <Badge bg="dark" className={'mgR-5'}>
                오픈카톡 선택
              </Badge>
            </OverlayTrigger>
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-bottom">발탄 하드~ 일리아칸 하드</Tooltip>
              }
            >
              <Badge bg="dark" className={'mgR-5'}>
                학원팟
              </Badge>
            </OverlayTrigger>
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">만렙!</Tooltip>}
            >
              <Badge bg="dark" className={'mgR-5'}>
                5렙 상점
              </Badge>
            </OverlayTrigger>
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">필수!</Tooltip>}
            >
              <Badge bg="dark" className={'mgR-5'}>
                토벌전
              </Badge>
            </OverlayTrigger>
            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">선택</Tooltip>}
            >
              <Badge bg="dark" className={'mgR-5'}>
                점령전
              </Badge>
            </OverlayTrigger>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default MainCard;
