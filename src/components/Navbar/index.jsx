import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router";


const Navbar = forwardRef(({onSearch}, ref) => {

    const [search, setSearch] = useState('');
    const handleInputChange = (e) => {
        setSearch(e.target.value)

    }

    const handleInputKeydown = (e)=> {    
        (e.key === "Enter") && onSearch(search);
    }
    
    useImperativeHandle(ref,()=>({
        getSearch: ()=>search,
        setSearch,
    }))
    return (
        <div ref={ref}>
            <p>Eventos</p>
            <input
                type="text"
                onChange={handleInputChange}
                placeholder="Busca tu evento favorito"
                value={search}
                onKeyDown={handleInputKeydown}
            />
            <Link to="/profile/my-info" style={{
                marginLeft: 24,
                color: '#fff',
                textDecoration: "none"
            }}>Mi perfil</Link>
        </div>
    )
})

export default Navbar;