import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import { Input, FormBtn } from "./components/Form";
import { Col, Row, Container } from "./components/Grid";
import SaveBtn from "./components/SaveBtn";
import { List, ListItem } from "./components/List";
import API from "../"

class homepage extends Component {
    state = {
      articles: [],
      start_date: "",
      end_date: "",
      subject: ""
    };
    

loadArticles = () => {
    API.getArticles({
        start_date: this.state.start_date,
        end_date: this.state.end_date,
        subject: this.state.subject
    })
      .then(res =>
        this.setState({ Articles: res.data, title: "", })
      )
      .catch(err => console.log(err));
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.getArticles();
  };


  handleSavedArticle = id => {
    const article = this.state.articles.find(article => article._id===id)
    API.saveArticle(article)
    .then(res => this.loadArticles() )
  }
  render(){
      return(
        <div>
            <Form
             handleInputChange={this.handleInputChange}
             handleFormSubmit={this.handleFormSubmit}
             subject={this.state.subject}
             start_date={this.state.start_date}
             end_date={this.state.end_date}
             />
             List
              {this.state.articles.map(article => (
                <ListItem key={book._id}/>
              ))}
         </div>
        )
    };

};
