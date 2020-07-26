import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreaters from '../../../store/actions';
import './Repositories.css';
import Search from '../../Search/Search';
import Repository from './Repository/Repository';
import { isEmpty, isArrayEmpty } from '../../../helpers/miscellenous';

const Repositories = (props) => {

    const [searchedRepositories, setSearchedRepositories] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        props.onGetUserRepositories();
    }, []);

    const searchRepository = (value) => {
        const searchedRepositories = props.repositories.filter(item => {
            return item.name.toLowerCase().search(value.toLowerCase()) !== -1;
        });
        console.log('==searchedRepositories==', searchedRepositories);
        setSearchValue(value);
        setSearchedRepositories(searchedRepositories);
    };

    const getSearchedRepositories = () => {
        return (
            searchedRepositories.map(item => {
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

    console.log('==repositories==', props.repositories);

    return (
        <div className="repositories">
            <Search search={(value) => searchRepository(value)} />
            <hr />
            {searchValue.length > 0 ? getSearchedRepositories() : getRepositories()}
            {
                !isEmpty(searchValue) && isArrayEmpty(searchedRepositories) &&
                <h1 className="no-data-found">
                    No Data Found
                </h1>
            }
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
