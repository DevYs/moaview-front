import React from 'react';
import './Search.css';

/**
 * 검색 영역
 * 
 * @author devy
 */
class Search extends React.Component {

    constructor() {
        super();
        this.clickBtnSearch = this.clickBtnSearch.bind(this);
        this.changeInputTitle = this.changeInputTitle.bind(this);
        this.changeCheckContentsType = this.changeCheckContentsType.bind(this);
        this.state = {
            title : '',
            contentsTypeNoList : []
        }; 
    }

    clickBtnSearch(e) {
        e.preventDefault();
        this.props.search(this.state.title, this.state.contentsTypeNoList);
    }

    changeInputTitle(e) {
        this.setState({
            title:e.target.value
        });
    }

    changeCheckContentsType(e) {
        let value = e.target.value;
        let index = this.state.contentsTypeNoList.indexOf(value);

        if(e.target.checked && index === -1) {
            this.state.contentsTypeNoList.push(value);   
        } else if(!e.target.checked && -1 < index) {
            this.state.contentsTypeNoList.splice(index, 1);
        }

        console.log(this.state.contentsTypeNoList);
    }

    render() {
        let className = this.props.isShow === "show" ? "search show" :  "search";

        return (
            <section className={className}>
                <form action="https://devys.kro.kr/contents/list" method="post">
                    <div>
                        <input type="text" name="sarchWord" onChange={this.changeInputTitle} />
                        <button onClick={this.clickBtnSearch}>검색</button>
                    </div>

                    <ul>
                        <li> <label htmlFor="contentsType1"> <input id="contentsType1" name="contentsType" type="checkbox" value="1" onChange={this.changeCheckContentsType} /> <span>전체</span> </label> </li>
                        <li> <label htmlFor="contentsType2"> <input id="contentsType2" name="contentsType" type="checkbox" value="2" onChange={this.changeCheckContentsType} /> <span>커뮤니티</span> </label> </li>
                        <li> <label htmlFor="contentsType3"> <input id="contentsType3" name="contentsType" type="checkbox" value="3" onChange={this.changeCheckContentsType} /> <span>뉴스</span> </label> </li>
                        <li> <label htmlFor="contentsType4"> <input id="contentsType4" name="contentsType" type="checkbox" value="4" onChange={this.changeCheckContentsType} /> <span>스포츠</span> </label> </li>
                        <li> <label htmlFor="contentsType5"> <input id="contentsType5" name="contentsType" type="checkbox" value="5" onChange={this.changeCheckContentsType} /> <span>유머</span> </label> </li>
                        <li> <label htmlFor="contentsType6"> <input id="contentsType6" name="contentsType" type="checkbox" value="6" onChange={this.changeCheckContentsType} /> <span>연예</span> </label> </li>
                        <li> <label htmlFor="contentsType7"> <input id="contentsType7" name="contentsType" type="checkbox" value="7" onChange={this.changeCheckContentsType} /> <span>IT</span> </label> </li>
                    </ul>

                </form>
            </section>
        );
    }
}

export default Search;