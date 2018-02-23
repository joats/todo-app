import React, { Component } from 'react';
import { Row, Col, Button, Input, Form } from 'reactstrap';
import List from './List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      items: [],
    }
  }

  onChange = (event) => {
    this.setState({text: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      text: '',
      items: [...this.state.items, this.state.text],
    });
  }

  onRemove(itemToBeDeleted) {
    var newItems = this.state.items.filter((_item) => {
      return _item !== itemToBeDeleted
    });

    this.setState({ items: newItems });
  }

  render() {
    return (
      <Row className="App">
        <Col className="p-4">
          <h1>Shit I gotta do</h1>
          <Form className="pb-4" onSubmit={this.onSubmit}>
            <Input className="mb-2" value={this.state.text} onChange={this.onChange} />
            <Button className="Btn">
              Add shit
            </Button>
          </Form>
            <List
              items={this.state.items}
              onRemove={this.onRemove.bind(this)}  />
        </Col>
      </Row>
    );
  }
}

export default App;
