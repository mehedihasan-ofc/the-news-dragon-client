import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => {
                console.error(err);
            })
    }, [])

    return (
        <div>
            <h4>All Caterogy</h4>
            <div className='ps-3 my-2'>
                {
                    categories.map(category => <p
                        key={category.id}>
                        <Link to={`category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;