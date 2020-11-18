import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [ term, setTerm ] = useState('programming');
    const [ debouncedTerm, setDebouncedTerm ] = useState(term);
    const [results, setResults] = useState([]);
    //when term is changed
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () =>{
            clearTimeout(timerId);
        };
    }, [term]);
    //when debounced term is changed we run the second useEffect function
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm 
                },
            });
            setResults(data.query.search);
        };
        search();
    }, [debouncedTerm])


    const renderedResults = results.map((result) => {
       return(
           <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https://en.wikipidea.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
               <div className="content">
                   <div className="header">
                       {result.title}
                   </div>
                   <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
               </div>
           </div>
       )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Search Term</label>
                    <input type="text" className="input" value={term} onChange={e => setTerm(e.target.value)}/>
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>  

        </div>
    )
}

export default Search;