import React from 'react';
import Header from './Header';
import ContentsList from './ContentsList';
import Search from './Search';

import './MoaView.css';

/**
 * 모아뷰 레이아웃 클래스
 * 
 * @author devy
 */
class MoaView extends React.Component {

    constructor() {
        super();
        this.clickBtnMenu = this.clickBtnMenu.bind(this);
        this.search = this.search.bind(this); 
        this.state = {
            title : '',
            contentsTypeNoList : [],
            isShow : false
        };
    }

    clickBtnMenu(isShow) {
        this.setState({
            isShow : isShow
        });
    }

    search(title, contentsTypeNoList) {
        this.setState({
            title : title,
            contentsTypeNoList : contentsTypeNoList
        });
    }

    render() {
        return (
            <div className="wrap">
                <Header clickBtnMenu={this.clickBtnMenu} />
                <div className="contents-wrap">
                    <ContentsList title={this.state.title} contentsTypeNoList={this.state.contentsTypeNoList} /> 
                    <Search isShow={this.state.isShow} search={this.search} />
                </div>
            </div>
        );
    }
}

export default MoaView;