import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // Fallback gallery images
  const fallbackGallery = [
    { id: 1, category: "interior", image_url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800", title: "Luxury Weight Room Layout" },
    { id: 2, category: "equipment", image_url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800", title: "Premium Matte Barbells" },
    { id: 3, category: "classes", image_url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800", title: "High Intensity Athletic Conditioning" },
    { id: 4, category: "members", image_url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800", title: "Focused Strength Athletes" },
    { id: 5, category: "transformation", image_url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800", title: "Athletic Body Composition Transformation" },
    { id: 6, category: "events", image_url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800", title: "Elite Annual Fitness Summit" },
    { id: 7, category: "interior", image_url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800", title: "Mind-Body Restoration Studio" },
    { id: 8, category: "equipment", image_url: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800", title: "State of the Art Cardio Deck" }
  ];

  useEffect(() => {
    axios.get('/api/gallery/')
      .then(res => {
        setGalleryItems(res.data.length > 0 ? res.data : fallbackGallery);
        setLoading(false);
      })
      .catch(err => {
        console.warn("Using fallback gallery due to API status:", err.message);
        setGalleryItems(fallbackGallery);
        setLoading(false);
      });
  }, []);

  const categories = [
    { key: 'all', label: 'All Images' },
    { key: 'interior', label: 'Gym Interior' },
    { key: 'equipment', label: 'Equipment' },
    { key: 'classes', label: 'Group Classes' },
    { key: 'members', label: 'Members' },
    { key: 'transformation', label: 'Transformation' },
    { key: 'events', label: 'Events' }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-5" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <span className="section-tagline">EXPERIENCE THE ENVIRONMENT</span>
          <h2 className="section-title text-white">THE GALLERY</h2>
        </div>

        {/* Categories filters */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className="btn btn-sm text-uppercase fw-semibold"
              style={{
                borderRadius: '50px',
                padding: '0.4rem 1.4rem',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                transition: 'var(--transition-smooth)',
                backgroundColor: activeCategory === cat.key ? 'var(--color-primary)' : 'transparent',
                border: activeCategory === cat.key ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                color: activeCategory === cat.key ? '#fff' : 'var(--color-text-secondary)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Layout */}
        <div className="row g-4">
          {filteredItems.map((item) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={item.id}>
              <div className="gallery-card">
                <img 
                  src={item.image_url} 
                  alt={item.title || "Fitnex Elite Gallery"} 
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="badge bg-danger text-uppercase mb-2 align-self-start fw-bold" style={{ fontSize: '0.6rem', letterSpacing: '0.05em' }}>
                    {item.category}
                  </span>
                  <h5 className="text-white fw-bold mb-0 text-uppercase" style={{ fontSize: '0.95rem', letterSpacing: '0.02em' }}>
                    {item.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
