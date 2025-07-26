import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Events from '../components/Events/Events'
import useEventsData from '../hooks/useEventsData'
import ReactPaginate from 'react-paginate'
import styles from './CssViews/Home.module.css'
import useEventsResults from '../state/events-results'

const Home = () => {
    const { data, isLoading, error, fetchEvents } = useEventsResults()

    const events = data?._embedded?.events || [];
    const page = data?.page || {};
    const containerRef = useRef()
    const [searchTerm, setSearchTerm] = useState('')
    
    useEffect(() => {
        fetchEvents()
    }, [])

    const handleNavbarSearch = (term) => {
        setSearchTerm(term)
        fetchEvents(`&keyword=${term}`)
    }
    const handlePageClick = ({ selected }) => {
        console.log(selected);
        fetchEvents(`&keyword=${searchTerm}&page=${selected}`)
    }
    
    const renderEvents = () => {

        if (isLoading) {
            return <div>Cargando resultados...</div>
        }
        if (error) {

            return <div>Ha ocurrido un error</div>
        }
        return (
            <div>
                <Events searchTerm={searchTerm} events={events} />
                <ReactPaginate
                className={styles.pagination}
                nextClassName={styles.next}
                previousClassName={styles.prev}
                pageClassName={styles.page}
                activeClassName={styles.activePage}
                disabledClassName={styles.disablePage}
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={page.totalPages}
                    previousLabel="< prev"
                    renderOnZeroPageCount
                />
            </div>
        )
    }

    return (
        <>
            {/* <Form/> */}
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            {renderEvents()}


        </>
    )
}

export default Home
