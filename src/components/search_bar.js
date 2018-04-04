import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props            )
        this.state={ term: ''}
    }

    // onInputChange = (e) => {
    //     this.setState({term: e});
    //     this.props.onSearchTermChange(term)
    // }

    render(){
        return(
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={e => this.onInputChange( e.target.value )}
                />
            </div>
        );
    }
    onInputChange(e){
        this.setState({term: e});
        this.props.onSearchTermChange(e)
    }
}

export default SearchBar;