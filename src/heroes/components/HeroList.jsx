import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
  
    const heroes = useMemo(() => getHeroesByPublisher( publisher )); 
    
    return (
    <div className='row rows-cols-1 row-cols-md-3 g-3 mt-1'>
        {
            heroes.map(hero => (
                <li key={hero.id} className='list-unstyled'>
                    <HeroCard 
                        key={hero.id}
                        { ...hero }
                    />
                </li>
            ))
        }
    </div>
  )
}
