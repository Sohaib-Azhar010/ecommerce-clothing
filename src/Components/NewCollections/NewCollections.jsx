import React from 'react';
import new_collections from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-2" style={{color:'#0C67A0'}}>New Collections</h2>
      <hr
        className="mx-auto mb-4"
        style={{
          width: '120px',
          height: '3px',
          backgroundColor: '#0C67A0',
          border: 'none',
          borderRadius: '2px'
        }}
      />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {new_collections.map((item, i) => (
          <div className="col" key={i}>
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
