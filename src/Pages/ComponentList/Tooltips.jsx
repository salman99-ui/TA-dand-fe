import { Tooltip, Button, Divider, Card } from 'antd';

const text = <span>Title</span>;

const buttonWidth = 70;

const Tooltips = () => (
  <>
    <Divider orientation="left"> Tooltips </Divider>
    <Card className="flex justify-center">
      <div className="demo">
        <div style={{ marginLeft: buttonWidth + 30, whiteSpace: 'nowrap' }}>
          <Tooltip placement="topLeft" title={text}>
            <Button style={{ width: buttonWidth }}>TL</Button>
          </Tooltip>
          <Tooltip placement="top" title={text}>
            <Button style={{ width: buttonWidth }}>Top</Button>
          </Tooltip>
          <Tooltip placement="topRight" title={text}>
            <Button style={{ width: buttonWidth }}>TR</Button>
          </Tooltip>
        </div>
        <div style={{ width: buttonWidth, float: 'left' }}>
          <Tooltip placement="leftTop" title={text}>
            <Button style={{ width: buttonWidth }}>LT</Button>
          </Tooltip>
          <Tooltip placement="left" title={text}>
            <Button style={{ width: buttonWidth }}>Left</Button>
          </Tooltip>
          <Tooltip placement="leftBottom" title={text}>
            <Button style={{ width: buttonWidth }}>LB</Button>
          </Tooltip>
        </div>
        <div style={{ width: buttonWidth, marginLeft: (buttonWidth + 10) * 4 + 24 }}>
          <Tooltip placement="rightTop" title={text}>
            <Button style={{ width: buttonWidth }}>RT</Button>
          </Tooltip>
          <Tooltip placement="right" title={text}>
            <Button style={{ width: buttonWidth }}>Right</Button>
          </Tooltip>
          <Tooltip placement="rightBottom" title={text}>
            <Button style={{ width: buttonWidth }}>RB</Button>
          </Tooltip>
        </div>
        <div
          style={{ marginLeft: buttonWidth + 30, clear: 'both', whiteSpace: 'nowrap' }}
        >
          <Tooltip placement="bottomLeft" title={text}>
            <Button style={{ width: buttonWidth }}>BL</Button>
          </Tooltip>
          <Tooltip placement="bottom" title={text}>
            <Button style={{ width: buttonWidth }}>Bottom</Button>
          </Tooltip>
          <Tooltip placement="bottomRight" title={text}>
            <Button style={{ width: buttonWidth }}>BR</Button>
          </Tooltip>
        </div>
      </div>
    </Card>
  </>
);

export default Tooltips;