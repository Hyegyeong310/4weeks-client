import React from 'react';
import { Grid, Dropdown, Button } from 'semantic-ui-react';
const count = [
  { key: 20, text: '20', value: 20 },
  { key: 50, text: '50', value: 50 },
  { key: 100, text: '100', value: 100 }
];
const status = [
  { key: '전체', text: '전체', value: '전체' },
  { key: '미확인', text: '미확인', value: '미확인' },
  { key: 'DM 발송완료', text: 'DM 발송완료', value: 'DM 발송완료' },
  { key: 'DM 발송실패', text: 'DM 발송실패', value: 'DM 발송실패' },
  { key: 'DM 발송요청', text: 'DM 발송요청', value: 'DM 발송요청' },
  { key: '제휴완료', text: '제휴완료', value: '제휴완료' },
  { key: '삭제', text: '삭제', value: '삭제' }
];

const action = [
  { key: 'DM 발송요청', text: 'DM 발송요청', value: 'DM 발송요청' },
  { key: '삭제', text: '삭제', value: '삭제' }
];
const Options = props => {
  return (
    <Grid>
      <Grid.Column width={3}>
        <label style={{ marginRight: '15px' }}>총 {props.count}개</label>
        <Dropdown
          defaultValue={20}
          options={count}
          name="count"
          compact
          selection
          onChange={e => props.onCreate[0](Number(e.target.innerText))}
          onBlur={props.handle}
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <label style={{ marginRight: '15px' }}>처리상태</label>
        <Dropdown
          defaultValue="전체"
          name="status"
          options={status}
          selection
          search
          onChange={e => {
            props.onCreate[1](e.target.innerText);
            setTimeout(props.handle, 0);
          }}
        />
      </Grid.Column>
      <Grid.Column floated="right" width={4}>
        <Dropdown
          defaultValue="DM 발송요청"
          placeholder="Status"
          name="action"
          options={action}
          selection
          search
          onChange={e => props.option(e.target.innerText)}
          style={{ marginRight: '15px' }}
        />
        <Button
          color="green"
          size="huge"
          onClick={() => {
            props.postHandle();
            alert('전송되었습니다!');
          }}
        >
          적용
        </Button>
      </Grid.Column>
    </Grid>
  );
};

export default Options;
