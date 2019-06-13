import React from 'react';

export default class Item extends React.Component{
    show(value){
        alert(value);
    }
    //用{}區分指令，非輸出
    render(){
        //this.prop.value       //在React.Component已宣告
        return <li>
            {this.props.value}
            {/* <button onClick={(e)=>{alert(this.props.value);}}> */}
                {/* e是event物件 (註解可用ctl+/)*/}
            <button onClick={(e)=>{this.show(this.props.value)}}>
                show
            </button>
        </li>;
    }
}

/*
<ItemList>
    <Item value="a"/>
    <Item value="b"/>
    <Item value="c"/>
</ItemList>

<ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
</ul>
*/



