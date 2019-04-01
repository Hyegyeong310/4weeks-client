import { Grid, Dropdown } from 'semantic-ui-react';

const count = [
  { key: 20, text: '20', value: 20 },
  { key: 50, text: '50', value: 50 },
  { key: 100, text: '100', value: 100 }
];
const status = [
  { key: '전체보기', text: '전체보기', value: '전체보기' },
  { key: 'DM 발송완료', text: 'DM 발송완료', value: 'DM 발송완료' },
  { key: 'DM 발송실패', text: 'DM 발송실패', value: 'DM 발송실패' },
  { key: '제휴완료', text: '제휴완료', value: '제휴완료' }
];

const Options = props => {
  return (
    <Grid>
      <Grid.Column width={3}>
        <label style={{ marginRight: '15px' }}>총 {props.total}개</label>
        <Dropdown
          defaultValue={20}
          options={count}
          name="count"
          compact
          selection
          onChange={e => {
            props.onCreate(Number(e.target.innerText));
          }}
          onBlur={() => props.handle()}
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <label style={{ marginRight: '15px' }}>처리상태</label>
        <Dropdown
          defaultValue={status[0].key}
          name="status"
          options={status}
          selection
          onChange={e => {
            props.getOption(e.target.innerText);
          }}
          onBlur={() => props.handle()}
        />
      </Grid.Column>
    </Grid>
  );
};

export default Options;
