import React from 'react';
import { Checkbox, Table, Loader, Dimmer } from 'semantic-ui-react';
import Layout from '../components/Layout';
import D_options from '../components/D_options';
import PaginationGroup from '../components/Pagination';
import axios from 'axios';
import url from '../src/api/url';
import Router from 'next/router';
class DM_result extends React.Component {
  state = {
    data: null,
    page: 1,
    limitCount: 20,
    option: '전체보기',
    total: 0
  };

  async componentDidMount() {
    try {
      await this.getList();
    } catch (err) {
      alert(err);
      Router.push('/');
    }
  }

  async getList() {
    const { page, limitCount, option } = this.state;
    this.setState({ page: 1 });
    const res = await axios.get(
      `${url}users/results/?option=${option}&page=${page -
        1}&limitCount=${limitCount}`
    );
    this.setState({ data: res.data.results, total: res.data.resultsCount });
  }

  getOption = e => {
    this.setState({ option: e });
  };
  getPage = e => {
    this.setState({ page: e });
  };
  getLimitCount = e => {
    this.setState({ limitCount: e });
  };

  TableRow(data, i) {
    return (
      <Table.Row textAlign="center" key={i}>
        <Table.Cell collapsing>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{i}</Table.Cell>
        <Table.Cell>{data.account_name}</Table.Cell>
        <Table.Cell>{data.send_message}</Table.Cell>
        <Table.Cell>{data.status}</Table.Cell>
        <Table.Cell>
          {data.send_date
            ? new Date(Number(data.send_date)).toLocaleString()
            : ''}
        </Table.Cell>
      </Table.Row>
    );
  }
  render() {
    const { data, total, limitCount } = this.state;
    if (data) {
      return (
        <Layout>
          <h1>Direct Message Results List</h1>
          <div style={{ marginTop: '15px' }}>
            <D_options
              onCreate={this.getLimitCount}
              handle={this.getList.bind(this)}
              getOption={this.getOption}
              secondRequest={this.getList.bind(this)}
              total={total}
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
                <Table.HeaderCell>Message</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>보낸 날짜</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {data.length !== 0
                ? data.map((el, i) =>
                    this.TableRow(
                      el,
                      i + 1 + this.state.limitCount * (this.state.page - 1)
                    )
                  )
                : null}
            </Table.Body>
          </Table>
          <div style={{ textAlign: 'center' }}>
            <PaginationGroup
              onCreate={this.getPage}
              handle={this.getList.bind(this)}
              dataCount={Math.ceil(total / limitCount)}
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

export default DM_result;
