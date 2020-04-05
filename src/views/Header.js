import React from 'react';
import './Header.css';

/**
 * 레이아웃의 상단 영역
 * 
 * @author devy
 */
class Header extends React.Component {

    constructor() {
        super();
        this.clickBtnMenu = this.clickBtnMenu.bind(this);
        this.state = {
            isShow : 'show'
        };
    }

    clickBtnMenu(e) {
        e.preventDefault();
        
        this.setState({
            isShow : this.state.isShow === 'show' ? 'hide' : 'show'
        });

        if(this.props.clickBtnMenu) {
            this.props.clickBtnMenu(this.state.isShow);
        }
    }

    render() {
        return (
            <header>
                <h1>모아뷰</h1>
                <div className="btn-menu">
                    <a className={this.state.isShow} href="http://www.naver.com/" onClick={this.clickBtnMenu}>
                        <svg className="show" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z" />
                        </svg>
                        <svg className="hide" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z" />
                        </svg>
                    </a>
                </div>
            </header> 
        );
    }
}

export default Header;