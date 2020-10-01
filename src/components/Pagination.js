import React from 'react'

export default function Pagination({setPage, page, totalPages}) {
    const pageOne = page - 3 < 0 ? page - 2 < 0 ? page : page - 1 : page - 2;
    const pageTwo = page - 3 < 0 ? page - 2 < 0 ? page + 1 : page : page - 1;
    const pageThree = page - 3 < 0 ? page - 2 < 0 ? page + 2 : page + 1 : page;
    const pageFour = page - 3 < 0 ? page - 2 < 0 ? page + 3 : page + 2 : page + 1;
    const pageFive = page - 3 < 0 ? page - 2 < 0 ? page + 4 : page + 3 : page + 2;

    return (
        <div>
            <div className="pagination-container">
                <button disabled={page === 1} className={page === 1 ? 'disabled pagination-button' : "pagination-button" } onClick={() => setPage(--page)}>↤ Previous</button>
                <div className="page-container">
                    <button className={page === pageOne ? "currentPage page-button" : "page-button"} onClick={() => setPage(pageOne)}>{pageOne}</button>
                    <button className={page === pageTwo ? "currentPage page-button" : "page-button"} onClick={() => setPage(pageTwo)}>{pageTwo}</button>
                    <button className={page === pageThree ? "currentPage page-button" : "page-button"} onClick={() => setPage(pageThree)}>{pageThree}</button>
                    <button className={page === pageFour ? "currentPage page-button" : "page-button"} onClick={() => setPage(pageFour)}>{pageFour}</button>
                    <button className={page === pageFive ? "currentPage page-button" : "page-button"} onClick={() => setPage(pageFive)}>{pageFive}</button>
                </div>
                <button disabled={page === totalPages} className={page === totalPages ? 'disabled pagination-button' : "pagination-button" } onClick={() => { console.log('clicked'); setPage(++page)}}>Next ↦</button>
            </div>
        </div>
    )
}
