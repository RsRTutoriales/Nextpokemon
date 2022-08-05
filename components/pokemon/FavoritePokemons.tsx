import { Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface Props {
    favoritePokemons:number[];
}

export const FavoritePokemons:FC<Props> = ({favoritePokemons}) => {



    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
        {
            favoritePokemons.map(id => 
            (     
                <Grid key={id} xs={6} sm={3} md={2} xl={1} >
                    <FavoriteCardPokemon id={id}  />
                </Grid>)
            )
        }
    </Grid.Container>
    )
}