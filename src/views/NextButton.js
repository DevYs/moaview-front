import React from 'react';
import './NextButton.css';

/**
 * 다음 페이지 버튼 
 * 
 * @author devy
 */
class NextButton extends React.Component {

    render() {
        return (
            <div className="btn-next">
                <button onClick={this.props.onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z" />
                    </svg> 
                </button>
            </div>
        );
    }
}

export default NextButton;