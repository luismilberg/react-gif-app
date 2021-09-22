import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GiftGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories([
    //     //     ...categories,
    //     //     'La concha de tu madre all boys'
    //     // ]);

    //     setCategories( cats => [...cats, 'La concha de tu madre all boys'])
    // }

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                { 
                    categories.map( category => 
                        <GiftGrid 
                            key={ category }
                            category={ category }
                        />
                    )
                    
                }
            </ol>
        </>
     );
}
 
export default GifExpertApp;