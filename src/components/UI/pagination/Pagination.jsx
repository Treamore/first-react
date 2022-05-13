import React from 'react';
import { usePageCount } from '../../../hooks/usePageCount';

const Pagination = ({page, totalPages, setPage}) =>{

    const changePage = (page) =>{
        setPage(page)
      }

    let pagesArray=usePageCount(totalPages);

    return <div className="page__wrapper">
        {pagesArray.map(p=>
          <button type="submit" className=
            {page===p ? 'page page__current' : 'page'} 
            key={p}
            onClick={()=>changePage(p)}
            >
              {p}
          </button>)}
      </div>
}

export default Pagination;