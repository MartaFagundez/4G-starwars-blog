import React from 'react';
import loadingImg from "../../img/loading.gif";
import CharacterCard from './character-card';

export default function CharactersList({characters}) {

    return (
            <main className="d-flex align-items-start w-100 p-4 mb-4">
             {/*LOADING  */}
            {
                characters.length === 0 && 
                    <div className="d-flex flex-column align-items-center w-100 p-4">
                        <figure className='d-flex mb-3' style={{width: "150px"}}>
                            <img src={loadingImg} alt="" className='w-100'/>
                        </figure>
                        <p className='text-white fs-5'>Loading...</p>
                    </div>
            }

            {/* LIST */}
            {
                characters.length > 0 && 
                    <ul className="d-flex flex-wrap justify-content-start align-items-start w-100">
                        { 
                            characters.map((character) => {
                                return	(
                                    <li key={character.uid}>
                                        <CharacterCard character={character} />
                                    </li>
                                );
                            })
                        }
                    </ul>
            }
        </main>
    )
}
