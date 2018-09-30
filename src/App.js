import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import { Input, FormBtn } from "./components/Form";
import { Col, Row, Container } from "./components/Grid";
import SaveBtn from "./components/SaveBtn";
import { List, ListItem } from "./components/List";
import API from "./utils/API"

class App extends Component {
  state = {
    articles: [],
    startDate: "", 
    endDate: "", 
    topic: ""
  }

  // change handlers for input components
  handleInputChange = event => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadArticles();
  };

  loadArticles = () => {
    API.getArticles({
        start_date: this.state.startDate,
        end_date: this.state.endDate,
        q: this.state.topic
    })
      .then(res =>
        this.setState({ articles: res.data, title: "", })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
          <h1 className="App">NYT Article Scrubber</h1>
          </Jumbotron>
          <form className="bordered">
            <Input name="topic" placeholder="Topic (required)" onChange={this.handleInputChange}/>
            <Input name="startDate" placeholder="Start Date (required)" onChange={this.handleInputChange}  />
            <Input name="endDate" placeholder="End Date (required)" onChange={this.handleInputChange}/>
            <FormBtn onClick={this.handleFormSubmit}>Search Articles</FormBtn>
          </form>
        </Col>
	
        <Col size="md-12">
            <Jumbotron>
              <h1 className="sarticle">Saved Articles</h1>
            </Jumbotron>
              <List className="list-group">
               {/* Retrieve list of articles from NYT and display them here. Each list item will be a different article */}
                  <ListItem>
                    <a> {/* This should be an href tag that holds a link to the article on the NYT website */}
                      <p>
                        Article title goes here
                      </p>
                    </a>
                    <SaveBtn />
                  </ListItem>
                  <ListItem >
                    <a> {/* This should be an href tag that holds a link to the article on the NYT website */}
                      <p>
                        Second Article title goes here
                      </p>
                    </a>
                    <SaveBtn />
                  </ListItem>
              </List>
          </Col>
      </Row>
    </Container>
    );
  }
}

export default App;
