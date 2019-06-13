import React from 'react';
//const React=require('react'); //同上，但上面那個比較有彈性
import ItemList from './ItemList';


export default class App extends React.Component {
  render() {
    let c=["1","2","3"];
    return <ItemList array={c}/>;
  }


}




/*  //同上，但上面那個比較有彈性
class App...{

}
module.exports=App;

*/