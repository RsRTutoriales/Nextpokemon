import { Card, Grid } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { Layout } from "../../components/layouts"
import { FavoritePokemons } from '../../components/pokemon';
import { NoFavorites } from "../../components/ui"
import { localFavorites } from '../../utils';

const FavoritesPage = () => {
    
    const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])
    
    useEffect(() => {
        setfavoritePokemons(localFavorites.pokemons());
    }, [])


    return (
        <Layout title="Pokémons - Favoritos">
            {
                favoritePokemons.length === 0
                ? ( <NoFavorites/>)
                : (
                    <FavoritePokemons favoritePokemons={favoritePokemons} />
                )
            }

        </Layout>
    )
}
export default FavoritesPage