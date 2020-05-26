import React from 'react'

import style from './SearchBar.module.css'

class SearchBar extends React.Component{
    state={
        searchTerm:'',

    }
    handleChange=(event)=>  this.setState({searchTerm:event.target.value});
    handleSubmit=(event)=>{
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;
        onFormSubmit(searchTerm);
        event.preventDefault();
    }
    render() {
        return (
            <nav elevation={6}  className={style.NavContainer}  >
                <div className={style.Logo}>
                    <a href="">
                    You<span className={style.LogoFragment2}>Tube</span>

                    </a>
                    
                   
                </div>
                <div className={style.Label}>
                <label>Youtube avec un air plus familier!</label>
                </div>

                

                <div className={style.SearchBar}>

                <form onSubmit={this.handleSubmit}>
                <input className={style.PlaceHolder}  placeholder="Rechercher" onChange={this.handleChange}/>
                </form>
                </div>
            </nav>
        )
    }
}

export default SearchBar;