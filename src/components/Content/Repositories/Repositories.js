import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { isNull } from '../../../helpers/miscellenous';
import * as actionCreaters from '../../../store/actions';
import './Repositories.css';
import Search from '../../Search/Search';
import Repository from './Repository/Repository';

const Repositories = (props) => {

    const [searchedRepositories, setSearchedRepositories] = useState([]);

    useEffect(() => {
        props.onGetUserRepositories();
    }, []);

    const searchRepository = (value) => {
        const searchedRepositories = props.repositories.filter(item => {
            return item.title.toLowerCase.search(value.toLowerCase()) !== -1;
        });
        setSearchedRepositories(searchedRepositories);
    };

    const getSearchedRepositories = () => {
        return (
            props.searchedRepositories.map(item => {
                return <Repository repository={item} />
            })
        );
    };

    const getRepositories = () => {
        return (
            props.repositories.map(item => {
                return <Repository repository={item} />
            })
        );
    };

    return (
        <div className="repositories">
            <Search search={(value) => searchRepository(value)} />
            <hr />
            {searchedRepositories.length > 0 ? getSearchedRepositories() : getRepositories()}
        </div>
    );
};


const mapStateToProps = state => {
    return {
        repositories: state.content.repositories,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetUserRepositories: () => dispatch(actionCreaters.getUserRepositories())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
