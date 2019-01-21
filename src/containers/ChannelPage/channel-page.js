import React,{Component} from 'react';

import convertData from '../../utils/convert-data'
import ChannelList from '../../components/channel-list';
// import './style.scss';


class  ChannelPage extends Component{
  constructor(props) {
     super(props);
     this.state = {
       channelList: []
     };
   }

  componentDidMount(){
     fetch('http://localhost:3001/data')
     .then(res=>res.json())
     .then(data=>{
       this.setState({channelList:convertData(data)})
     })
   }
  render(){
    let {channelList}=this.state
    return (
        <div className="container">
         {channelList.map(list=><ChannelList key={list.date} list={list}/>)}
        </div>
    );
  }

}



export default ChannelPage;
