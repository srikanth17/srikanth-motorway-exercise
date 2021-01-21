import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import Header from './Header';
import Button from './Button';
import Form from './Form';

const App = () => {
  const [images, setImages] = useState();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Button onClick={() => setShowForm(!showForm)}>
              {showForm ? 'Hide Form' : 'Show Form'}
            </Button>
            {showForm && <Form />}
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            {images && images.map(img => <CardItem key={img.id} {...img} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
