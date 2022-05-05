import React from 'react';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/Input/MyInput';

const PostFilter = ({filter, setFilter}) => {
    return(
        <div>
        <MyInput
        placeholder="Search..."
        value={filter.query}
        onChange={e=>setFilter({...filter, query:e.target.value})}
        />
        <MySelect 
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
          defaultValue="Sort by"
          options ={[
            {value:'title', name:'Name'},
            {value:'body', name:'Content'}
          ]}
        />
      </div>
    );
};

export default PostFilter;