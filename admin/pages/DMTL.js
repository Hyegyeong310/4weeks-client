import React from 'react';
import { Button, Checkbox, Table, Loader, Dimmer } from 'semantic-ui-react';
import Layout from '../components/Layout';
import PaginationGroup from '../components/Pagination';
import axios from 'axios';
import url from '../src/api/url';
import Router from 'next/router';

class DMTL extends React.Component {
  state = { data: null };
  async componentDidMount() {
    try {
      const res = await axios.get(`${url}users/template/`);
      this.setState({ data: res.data });
    } catch (err) {
      alert(err);
      Router.push('/');
    }
  }

  TableRow(data, i) {
    return (
      <Table.Row textAlign="center" key={i}>
        <Table.Cell collapsing>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{i}</Table.Cell>
        <Table.Cell>{data.title}</Table.Cell>
        <Table.Cell textAlign="center">{data.direct_message}</Table.Cell>
        <Table.Cell>{new Date(data.created_date).toLocaleString()}</Table.Cell>
      </Table.Row>
    );
  }
  render() {
    const { data } = this.state;
    if (data) {
      return (
        <Layout>
          <h1>Direct Message Template List</h1>
          <div
            style={{
              marginTop: '15px',
              marginRight: '70px',
              textAlign: 'right'
            }}
          >
            <Button color="green" size="huge" href="/edit-message">
              등록
            </Button>
          </div>
          <Table compact striped definition>
            <Table.Header>
              <Table.Row style={{ textAlign: 'center' }}>
                <Table.HeaderCell>
                  <Checkbox />
                </Table.HeaderCell>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Message</Table.HeaderCell>
                <Table.HeaderCell>생성 날짜</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data.map((el, i) => this.TableRow(el, i + 1))}
            </Table.Body>
          </Table>
          <div style={{ textAlign: 'center' }}>
            <PaginationGroup
              dataCount={Math.ceil(this.state.data.length / 20)}
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

export default DMTL;
