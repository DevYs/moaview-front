import React from 'react';
import ContentsListRequest from '../request/ContentsListRequest';
import CardView from './CardView';
import NextButton from './NextButton';
import './ContentsList.css';

/**
 * 콘텐츠 목록
 * 
 * @author devy
 */
class CardViewList extends React.Component {

    constructor(props) {
        super();
        this.clickBtnNext = this.clickBtnNext.bind(this);
        this.contentsListRequestCallback = this.contentsListRequestCallback.bind(this);
        this.clickBtnNextCallback = this.clickBtnNextCallback.bind(this);
        this.state = {
            title : props.title,
            contentsTypeNoList : props.contentsTypeNoList,
            pageNo : 1,
            responseContents : {
                contentsTypeMap : {},
                siteMap : {},
                contentsList : []
            } 
        };
    }

    componentDidMount() {
        var param = {};
        param.title = this.state.title;
        param.contentsTypeNoList = this.state.contentsTypeNoList;
        param.pageNo = this.state.pageNo;

        const req = new ContentsListRequest();
        req.request(param, this.contentsListRequestCallback);
    }

    clickBtnNext(e) {
        e.preventDefault();

        var param = {};
        param.title = this.state.title;
        param.contentsTypeNoList = this.state.contentsTypeNoList;
        param.pageNo = this.state.pageNo + 1;

        const req = new ContentsListRequest();
        req.request(param, this.clickBtnNextCallback);
    }

    contentsListRequestCallback(json, param) {
        const result = JSON.parse(json);
        this.setState({
            pageNo : param.pageNo,
            responseContents : result
        });
    }

    clickBtnNextCallback(json, param) {
        const result = JSON.parse(json);
        result.contentsList.map( contents => this.state.responseContents.contentsList.push(contents) ); 
        this.setState({
            pageNo : param.pageNo,
            responseContents : {
                contentsTypeMap : result.contentsTypeMap,
                siteMap : result.siteMap,
                contentsList : this.state.responseContents.contentsList
            }
        });
    }

    render() {
        const contentsList = this.state.responseContents.contentsList;
        let cardViewList;

        if(0 < contentsList.length) {
            cardViewList = contentsList.map(
                (contents, key) => {
                    const contentsType = this.state.responseContents.contentsTypeMap[contents.contentsTypeNo];
                    const site = this.state.responseContents.siteMap[contents.siteNo];
                    return <CardView contentsType={contentsType} site={site} contents={contents} key={key} />;
                } 
            );
        }

        return (
            <section className="cardview-list">
                {cardViewList}
                <NextButton onClick={this.clickBtnNext} />
            </section>
        );
    }
}

export default CardViewList;