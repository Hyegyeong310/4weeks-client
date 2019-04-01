import React from 'react';
import {
  Button,
  Checkbox,
  Table,
  Dropdown,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import Layout from '../components/Layout';
import PaginationGroup from '../components/Pagination';
import axios from 'axios';
import url from '../src/api/url';
import Router from 'next/router';

class DMTL extends React.Component {
  state = { data: null, title: null, post: [] };
  async componentDidMount() {
    try {
      let arr = [];
      const res = await axios.get(`${url}users/condition/list`);
      const { list, title } = res.data;

      for (let val of title) {
        let temp = { key: val.title, text: val.title, value: val.title };
        arr.push(temp);
      }

      this.setState({ data: list, title: arr });
    } catch (err) {
      alert(err);
      Router.push('/');
    }
  }
  select(data, data2) {
    return data.title ? data.title : '';
  }

  updateCondition(condition, target) {
    let { post } = this.state;
    let [obj, flag] = [{}, true];
    obj = { condition };
    obj.title = target;

    for (let i = 0; i < post.length; i++) {
      if (post[i].condition === condition) {
        post[i].title = target;
        flag = false;
      }
    }

    if (flag) {
      post.push(obj);
    }

    this.setState({ post });
  }

  async updatePost(data) {
    const a = await axios.put(`${url}users/condition`, {
      arr: data
    });
    if (this.state.post.length > 0) {
      window.location.reload();
      this.setState({ post: [] });
    }
  }

  TableRow(data, i, data2) {
    return (
      <Table.Row textAlign="center" key={i}>
        <Table.Cell collapsing>
          <Checkbox />
        </Table.Cell>
        <Table.Cell>{i}</Table.Cell>
        <Table.Cell>{data.condition}</Table.Cell>
        <Table.Cell>
          <Dropdown
            defaultValue={this.select(data)}
            name="condition"
            options={this.state.title}
            selection
            search
            textAlign="center"
            onChange={e => {
              this.updateCondition(data.condition, e.target.innerText);
            }}
          />
        </Table.Cell>
        <Table.Cell>
          {new Date(data.last_modify_date).toLocaleString()}
        </Table.Cell>
      </Table.Row>
    );
  }
  render() {
    const { data, title, post } = this.state;
    if (data) {
      return (
        <Layout>
          <h1>Direct Message Condition List</h1>
          <div style={{ marginTop: '15px', textAlign: 'right' }}>
            <Button
              color="green"
              size="huge"
              onClick={() => this.updatePost(post)}
            >
              저장
            </Button>
          </div>
          <Table compact striped definition>
            <Table.Header>
              <Table.Row style={{ textAlign: 'center' }}>
                <Table.HeaderCell>
                  <Checkbox />
                </Table.HeaderCell>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>조건</Table.HeaderCell>
                <Table.HeaderCell>Template Title</Table.HeaderCell>
                <Table.HeaderCell>수정 날짜</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data.map((el, i) => this.TableRow(el, i + 1, title))}
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
