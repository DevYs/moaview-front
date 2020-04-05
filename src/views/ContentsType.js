import React from 'react';
import './ContentsType.css';

/**
 * 검색 영역의 콘텐츠 타입
 * 
 * @author devy
 */
class ContentsType extends React.Component {
    render() {
        return (
            <ul>
                <li> <label htmlFor="contentsType1"> <input id="contentsType1" type="checkbox" name="1" value="1" /> <span>전체</span> </label> </li>
                <li> <label htmlFor="contentsType2"> <input id="contentsType2" type="checkbox" name="1" value="1" /> <span>커뮤니티</span> </label> </li>
                <li> <label htmlFor="contentsType3"> <input id="contentsType3" type="checkbox" name="1" value="1" /> <span>뉴스</span> </label> </li>
                <li> <label htmlFor="contentsType4"> <input id="contentsType4" type="checkbox" name="1" value="1" /> <span>스포츠</span> </label> </li>
                <li> <label htmlFor="contentsType5"> <input id="contentsType5" type="checkbox" name="1" value="1" /> <span>유머</span> </label> </li>
                <li> <label htmlFor="contentsType6"> <input id="contentsType6" type="checkbox" name="1" value="1" /> <span>연예</span> </label> </li>
                <li> <label htmlFor="contentsType7"> <input id="contentsType7" type="checkbox" name="1" value="1" /> <span>IT</span> </label> </li>
            </ul>
        );
    }
}

export default ContentsType;