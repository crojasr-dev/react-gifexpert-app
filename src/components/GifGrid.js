import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGif } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])
   const {data:images, loading}= useFetchGifs(category);

   

    return (
        <div>
            <h3>{category}</h3>
           {loading && 'Cargando.....'}
            {
                images.map(img => (
                    <GifGridItem 
                    key={img.id}
                    {...img}
                     />

                ))
            }
        </div>
    )
}
