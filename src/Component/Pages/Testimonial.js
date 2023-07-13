import React, { useState } from 'react';

function Testimonial() {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Eaukage',
      role: 'Web Developer',
      content: 'Étudiant sérieux, travailleur, social, ambitieux et passionné de l informatique. Je lerecommande très fortement à tous',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Naruto',
      role: 'Graphic Designer',
      content: ' La valeur n attend point le nombre des années  Cheikh matérialise parfaitement cette citation. Vif et Créatif il perçoit rapidement les besoins dun client',
      rating: 5
    },
    {
      id: 3,
      name: 'Sasuke',
      role: 'Marketing Specialist',
      content: 'J ai été particulièrement impressionné par sa capacité de sortir de l ordinaire et de donner une autre dimension a un projet.',
      rating: 4
    }
  ]);

  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    content: '',
    rating: 0
  });

  const [editingTestimonial, setEditingTestimonial] = useState(null);

  const handleInputChange = (e) => {
    setNewTestimonial({
      ...newTestimonial,
      [e.target.name]: e.target.value
    });
  };

  const addTestimonial = () => {
    if (newTestimonial.name === '' || newTestimonial.role === '' || newTestimonial.content === '' || newTestimonial.rating === 0) {
      alert('Veuillez remplir tous les champs avant d\'ajouter un témoignage.');
      return;
    }

    const id = testimonials.length + 1;
    const testimonial = { ...newTestimonial, id };
    setTestimonials([...testimonials, testimonial]);
    setNewTestimonial({
      name: '',
      role: '',
      content: '',
      rating: 0
    });
  };

  const deleteTestimonial = (id) => {
    const updatedTestimonials = testimonials.filter((testimonial) => testimonial.id !== id);
    setTestimonials(updatedTestimonials);
  };

  const editTestimonial = (id) => {
    const testimonial = testimonials.find((testimonial) => testimonial.id === id);
    setEditingTestimonial(testimonial);
    setNewTestimonial({
      name: testimonial.name,
      role: testimonial.role,
      content: testimonial.content,
      rating: testimonial.rating
    });
  };

  const updateTestimonial = () => {
    const updatedTestimonials = testimonials.map((testimonial) =>
      testimonial.id === editingTestimonial.id ? { ...testimonial, ...newTestimonial } : testimonial
    );
    setTestimonials(updatedTestimonials);
    setEditingTestimonial(null);
    setNewTestimonial({
      name: '',
      role: '',
      content: '',
      rating: 0
    });
  };

  return (
    <section>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-10 col-xl-8 text-center mt-5">
          <h3 className="mb-4 ">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
          Les expériences de nos clients satisfaits. Cette page est dédiée aux retours et aux témoignages de nos clients qui ont utilisé nos services ou produits. 
          Découvrez leurs avis authentiques et leurs histoires inspirantes</p>
        </div>
      </div>

      <div className="row text-center justify-content-center">
        {testimonials.map((testimonial) => (
          <div className="col-md-3 mb-4 aligner" key={testimonial.id}>
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-center mb-4">
               
                </div>
                <h5 className="card-title mb-3">{testimonial.name}</h5>
                <h6 className="card-subtitle text-primary mb-3">{testimonial.role}</h6>
                <p className="card-text px-xl-3">{testimonial.content}</p>
                <ul className="list-unstyled d-flex justify-content-center mb-0">
                  {[...Array(Math.floor(testimonial.rating))].map((_, index) => (
                    <li key={index}>
                      <i className="fas fa-star fa-sm text-warning testimonial-icon"></i>
                    </li>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <li>
                      <i className="fas fa-star-half-alt fa-sm text-warning testimonial-icon"></i>
                    </li>
                  )}
                </ul>
                <div className="mt-3">
                  <button onClick={() => editTestimonial(testimonial.id)}>
                    Modifier
                  </button>
                  <button  onClick={() => deleteTestimonial(testimonial.id)}>
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-md-10 col-xl-8 text-center mx-auto mt-5">
          <h3>{editingTestimonial ? 'Modifier le témoignage' : 'Ajouter un nouveau témoignage'}</h3>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Nom"
              value={newTestimonial.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="role"
              className="form-control"
              placeholder="Rôle"
              value={newTestimonial.role}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="content"
              className="form-control"
              placeholder="Témoignage"
              value={newTestimonial.content}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="number"
              name="rating"
              className="form-control"
              placeholder="Note"
              value={newTestimonial.rating}
              onChange={handleInputChange}
            />
          </div>
          {editingTestimonial ? (
            <button className="btn btn-primary" onClick={updateTestimonial}>
              Mettre à jour le témoignage
            </button>
          ) : (
            <button className="btn btn-primary" onClick={addTestimonial}>
              Ajouter un témoignage
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
