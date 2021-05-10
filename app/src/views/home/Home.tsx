import React from 'react';
import NavPanel from '../../components/NavPanel';
import movieServie from '../../services/movies.services';

const Home = () => {
    const [search, setSearch] = React.useState('harry potter');
    const [movie, setMovie] = React.useState({});

    React.useEffect(() => {
        const makeRequest = async () => {
        try {
                const responce = movieServie.searchByName(search, 1);
            
                setMovie(responce);
            } catch (error) {
                console.log(error);
            }
        };
        makeRequest();
    }, [search]);

    return(
        <div>
            <NavPanel />
            <div>This is home page</div>
        </div>
    );
}

export default Home;

// const [search, setSearch] = React.useState('harry potter');

// React.useEffect(() => {
//     const makeRequest = async () => {
//     try {
//         const responce = fetch(
//         'http://www.omdbapi.com/?apikey=${omdApiKey}&s=${search}&plot=full'
//         ).then(resp => resp.json());
//         console.log(responce);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     makeRequest();
// }, [search]);