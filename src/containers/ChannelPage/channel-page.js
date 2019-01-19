import React,{Component} from 'react';

import convertData from '../../utils/convert-data'

import ChannelGroup from '../../components/channel-group';


class  ChannelPage extends Component{
  constructor(props) {
     super(props);
     this.state = {
       channelGroups: []
     };
   }

  componentDidMount(){
     fetch('http://localhost:3001/data')
     .then(res=>res.json())
     .then(data=>{
       this.setState({channelGroups:convertData(data)})
     })
   }
  render(){
    return (
        <div>
         {this.state.channelGroups.map(group=><ChannelGroup key={group.date} group={group}/>)}
        </div>
    );
  }

}



export default ChannelPage;
