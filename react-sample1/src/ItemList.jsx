import React from 'react';
import Item from './Item';

export default
class ItemList extends React.Component{
    //JS只能有一個建構子，名為constructor
    //成員變數必須寫在constructor，且只能為private
    //成員函式只能為public
    constructor(){
        super();        //呼叫父類別的建構子
        //this.a=123;
    }
    toString(){
    }

    //////////////////////////////////////////////////////
    render(){       //可畫在網頁上
        let list=this.props.array.map(
            (c)=><Item value={c} key={c}/>  //key類似id
            //=>左邊，傳進的參數，c是陣列裡的每個元件
            //=>右邊，回傳的值

            /*
            function(c){
                return <Item value={c}/>;
            }
            */
        );

        /*
        let a=this.props.array;
        let list=[];
        for(let c of a){
            let item=<Item value={c}/>;
            list.push(item);
        }
        */
        return(
            <ul>
                {list}
            </ul>
        );
    }


    /*
    <ItemList array="xxxxx"/>
    */
}

