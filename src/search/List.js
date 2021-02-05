import * as config from "../config.js";
import {Component} from 'react';
import axios from "axios";

function Test({title, year}){
    return(
        <li>
        <h1>{title}</h1>
        <h4>{year}</h4>
        </li>
    )  
}

class List extends Component{
    state = {
        isLoading: true,
        itemList: []
    }

    getItemList = async () => {
        console.log(config.API_SERVER)
        const {data: {data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json")
        this.setState({itemList:movies, isLoading: false})

    }
    componentDidMount(){
        this.getItemList();
    }

    render(){
        console.log(this.state.isLoading)
        return (
          <ul className="Search-List">
              {this.state.isLoading ?  "목록 불러오는 중" : this.state.itemList.map((item, index) => {
                  return <Test title={item.title} year={item.year} key={index} />
              })}
          </ul>
        );
      }
    
}

export default List;