import React from 'react';
import { Checkbox, Table, Loader, Dimmer } from 'semantic-ui-react';
import Layout from '../components/Layout';
import Search from '../components/Search';
import Options from '../components/Options';
import PaginationGroup from '../components/Pagination';
import axios from 'axios';
import url from '../src/api/url';
import cookie from 'js-cookie';
import Router from 'next/router';
class ShopList extends React.Component {
  state = {
    data: null,
    page: 0,
    limitCount: 20,
    text: undefined,
    checkArray: {},
    select: 'account_name',
    totalCount: null,
    dataCount: null,
    status: '%EC%A0%84%EC%B2%B4',
    option: 'DM 발송요청'
  };
  async componentDidMount() {
    await this.getList();
  }
  async getList(token) {
    try {
      let { page, limitCount, text, select, status } = this.state;
      if (text === '') text = undefined;

      if (text !== undefined) {
        page = 0;
        this.setState({ page: 0 });
      }
      let getUrl = `${url}shopList/?page=${page}&limitCount=${limitCount}&text=${text}&search=${select}`;
      if (status !== '%EC%A0%84%EC%B2%B4') {
        getUrl += `&status=${status}`;
        page = 0;
        this.setState({ page: 0 });
      }
      console.log(getUrl);
      let res = await axios.get(getUrl, {});
      if (res.status === 200 || res.status === 304) {
        let { data, dataCount } = res.data;
        let totalCount = dataCount;
        dataCount = Math.ceil(dataCount / this.state.limitCount);

        this.setState({ data, totalCount, dataCount, text: undefined });
      }
    } catch (err) {
      /401/.test(err) ? alert('데이터가 존재하지 않습니다.') : alert(err);
      console.log(err.message);
      if (err.message !== 'Request failed with status code 401') {
        Router.push('/');
      }
    }
  }
  getPage = e => {
    this.setState({ page: e - 1 });
  };
  getLimitCount = e => {
    this.setState({ limitCount: e });
  };
  getText = e => {
    this.setState({ text: encodeURI(e) });
  };
  getStatus = e => {
    this.setState({ status: encodeURI(e) });
  };
  getOption = e => {
    this.setState({ option: e });
  };
  getSelect = e => {
    if (e === 'name') {
      this.setState({ select: 'account_name' });
    } else {
      this.setState({ select: 'All' });
    }
  };
  setCheckList(name, status) {
    let { checkArray } = this.state;
    checkArray[name] ? delete checkArray[name] : (checkArray[name] = status);
    this.setState({ checkArray });
  }
  goLink(user) {
    window.open(`https://www.instagram.com/${user}`);
  }

  async postman() {
    await axios.post(`${url}users/send`, {
      users: this.state.checkArray,
      option: this.state.option
    });
    this.setState({ checkArray: {} });
    window.location.reload();
  }

  TableRow(data, i) {
    return (
      <Table.Row textAlign="center" key={i}>
        <Table.Cell collapsing>
          <Checkbox
            onChange={() => this.setCheckList(data.account_name, data.status)}
          />
        </Table.Cell>
        <Table.Cell>{i}</Table.Cell>
        <Table.Cell>
          <a onClick={this.goLink.bind(this, data.account_name)}>
            {data.account_name}
          </a>
        </Table.Cell>
        <Table.Cell>{data.account_full_name}</Table.Cell>
        <Table.Cell textAlign="left">
          {data.account_tag.slice(0, 80) + '.....'}
        </Table.Cell>
        <Table.Cell>{data.status}</Table.Cell>
        <Table.Cell>{new Date(data.send_date).toLocaleString()}</Table.Cell>
      </Table.Row>
    );
  }
  render() {
    const { data, dataCount } = this.state;
    {
      console.log(this.state);
    }
    if (data) {
      return (
        <Layout>
          <Search
            onCreate={[this.getSelect, this.getText]}
            handle={this.getList.bind(this)}
          />
          <div style={{ marginTop: '15px' }}>
            <Options
              postHandle={this.postman.bind(this)}
              status={this.state.status}
              count={this.state.totalCount}
              onCreate={[this.getLimitCount, this.getStatus]}
              option={this.getOption}
              handle={this.getList.bind(this)}
            />
          </div>
          <Table compact striped definition>
            <Table.Header>
              <Table.Row textAlign="center">
                <Table.HeaderCell>
                  <Checkbox />
                </Table.HeaderCell>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Account Name</Table.HeaderCell>
                <Table.HeaderCell>Account Full Name</Table.HeaderCell>
                <Table.HeaderCell>Text</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>최근 날짜</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {data.map((el, i) =>
                this.TableRow(
                  el,
                  i + 1 + this.state.limitCount * this.state.page
                )
              )}
            </Table.Body>
          </Table>
          <div style={{ textAlign: 'center' }}>
            <PaginationGroup
              dataCount={dataCount}
              onCreate={this.getPage}
              handle={this.getList.bind(this)}
            />
          </div>
        </Layout>
      );
    } else {
      return (
        <Dimmer active inverted>
          <Loader children="loading" size="massive" />
        </Dimmer>
      );
    }
  }
}

export default ShopList;
