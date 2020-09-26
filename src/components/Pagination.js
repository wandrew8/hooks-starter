import React from 'react'

export default function Pagination({setPage, page, totalPages}) {
    return (
        <div>
            <p>Current Page: {page}</p>
            <button disabled={page === 1} className={page === 1 ? 'disabled' : null } onClick={() => setPage(--page)}>Previous</button>
            <button disabled={page === totalPages} className={page === totalPages ? 'disabled' : null } onClick={() => { console.log('clicked'); setPage(++page)}}>Next</button>
        </div>
    )
}
