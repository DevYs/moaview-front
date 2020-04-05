import React from 'react';

import './CardView.css';

/**
 * 콘텐츠 목록의 아이템
 * 
 * @author devy
 */
class CardView extends React.Component {

    constructor(props) {
        super();
        this.clickCardView = this.clickCardView.bind(this);
    }

    clickCardView(e) {
        e.preventDefault();
        
    }

    render() {
        const thumbnailUrl = this.props.contents.thumbnailUrl;
        const title = this.props.contents.title;
        const siteName = this.props.site.siteName;
        const targetContentsName = this.props.contents.targetContentsName;
        const year = this.props.contents.regDate.year;
        const monthValue = this.props.contents.regDate.monthValue;
        const dayOfMonth = this.props.contents.regDate.dayOfMonth;
        const hour = this.props.contents.regDate.hour;
        const minute = this.props.contents.regDate.minute;
        const second = this.props.contents.regDate.second;
        const regDate = `${year}년 ${monthValue}월 ${dayOfMonth}일 ${hour}:${minute}:${second}`; 
        const thumbnailClassName = thumbnailUrl.length === 0 ? "thumbnail hide" : "thumbnail";
        const thumbnail = (<span className={thumbnailClassName}><img src={thumbnailUrl} alt={title} /></span>);

        return (
            <article>
                <a href={this.props.contents.url} target="_blank" rel="noopener noreferrer" onClick={this.clickCardView}>
                    {thumbnail}
                    <span className="data">
                        <span className="title">{title}</span>
                        <span className="site-target"><i>[{siteName}]</i> {targetContentsName}</span>
                        <span className="reg-date">{regDate}</span>
                    </span>
                </a>
            </article>
        );
    }
}

export default CardView;