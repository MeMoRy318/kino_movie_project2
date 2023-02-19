import {useForm} from "react-hook-form";
import { FaSearch } from 'react-icons/fa';

import css from './SearchForm.module.css';


const SearchForm = () => {

    const {register,handleSubmit} = useForm();

    const submit = async (data) => {

    };

    return (
        <form onSubmit={handleSubmit(submit)} className={css.searchForm}>
            <label>
                <input type="text" placeholder={'Search'} {...register('search')} className={css.searchForm__input}/>
            </label>
            <button className={css.searchForm__btn}><FaSearch/></button>
        </form>
    );
};

export {SearchForm};