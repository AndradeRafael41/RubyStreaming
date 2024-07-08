import {useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"
import "./navbar.css";

const SearchBar= () => {
  const [search, setSearch] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!search) return

        navigate(`/Search?q=${search}`)
        setSearch("")
    }
  return (
    <nav id="searchBar">
        
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Pesquisar Filme" onChange={(e) => setSearch(e.target.value)} 
            value={search} />
            <button type="submit"><BiSearchAlt2 /></button>
        </form>
      </nav>
  );
};

export default SearchBar;