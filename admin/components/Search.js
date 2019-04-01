import { Component } from 'react';
import { Input, Select, Button, Icon, Form } from 'semantic-ui-react';

const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'name', text: 'name', value: 'name' }
];

const Search = props => {
  return (
    <Input
      type="text"
      placeholder="Search..."
      action
      style={{ marginTop: '20px', width: '50%', maxWidth: '450px' }}
      onChange={e => props.onCreate[1](e.target.value)}
    >
      <Select
        compact
        options={options}
        defaultValue="name"
        onChange={e => props.onCreate[0](e.target.innerText)}
      />
      <input />
      <Button
        type="submit"
        onClick={e => {
          props.handle();
          if (e.target.parentElement.children[1] !== undefined) {
            e.target.parentElement.children[1].value = '';
          }
        }}
      >
        <Icon name="search" />
      </Button>
    </Input>
  );
};

export default Search;
