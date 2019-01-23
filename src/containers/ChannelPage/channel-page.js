import React,{Component} from 'react';

import loadFromServer from '../../utils/adapter'
import ChannelList from '../../components/channel-list';


class  ChannelPage extends Component{
  constructor(props) {
     super(props);
     this.state = {
       channelList: []
     };
   }

  componentDidMount(){
     loadFromServer(channelList=>{
       this.setState({channelList})
     })
   }

  render(){
    let {channelList}=this.state

    //conditional rendering check if the data is successfully loaded
    if(channelList.length===0){
      return <span className="loading">No Channel yet </span>
    }
    return (
        <div className="container">
         {channelList.map(list=><ChannelList key={list.date} list={list}/>)}
        </div>
    );
  }
}


export default ChannelPage;
