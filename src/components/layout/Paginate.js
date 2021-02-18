import React from 'react';
import './Paginate.css';

export default function Paginate({page, total_pages, changePage}) {
  return (
    <div className="paginate">
      {
        page > 1 && <button onClick={() => changePage(false)}>Previous Page</button>
      }
      {
        page < total_pages && <button onClick={() => changePage(true)}>Next Page</button>
      }
    </div>
  )
}
