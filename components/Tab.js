import React from 'react';
import './tab.css';
export default class Tab extends React.Component {
    constructor(props) {
        super(props)
    }
    onCut(value) {
        this.props.onCut(value)
    }
    componentDidMount() {
        var myTab = document.getElementById("tab");   
        var myUl = myTab.getElementsByTagName("ul")[0];
        var myLi = myUl.getElementsByTagName("li");
        var _this = this;
        for(var i = 0; i<myLi.length;i++){
            myLi[i].index = i;
            myLi[i].onclick = function(){
                for(var j = 0; j < myLi.length; j++){
                    myLi[j].className="";
                }
                _this.onCut(this.innerHTML)
                this.className = "active";
                
            }
        }
    }
    render() {
        return (
          <div className="tab" id="tab">
            <ul>
              <li>7天</li>
              <li className="active">31天</li>
              <li>91天</li>
            </ul>
          </div>
        )
    }
}