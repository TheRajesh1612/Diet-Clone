import React from 'react'

const GallerySection = () => {
  return (
    <>
    <section class="gallery-section">
        <h2 class="gallery-title">GALLERY</h2>
        <div className="graduate-image style-icon">
            <img src="../public/assests/homePage/graduated.svg" alt="Graduated-svg" />
        </div>

        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="../public/assests/homePage/GallerySection-imgs/sankranthi-sambaralu.jpg" alt="Sankranthi Sambaralu"/>
                <div class="overlay">Sankranthi Sambaralu</div>
            </div>
            <div class="gallery-item">
                <img src="../public/assests/homePage/GallerySection-imgs/diwali-celebrations.jpg" alt="Diwali Celebrations"/>
                <div class="overlay">Diwali Celebrations in DIET</div>
            </div>
            <div class="gallery-item">
                <img src="../public/assests/homePage/GallerySection-imgs/teachers-day.jpg" alt="Teacher's Day Celebrations"/>
                <div class="overlay">Teacher's Day Celebrations</div>
            </div>
            <div class="gallery-item">
                <img src="../public/assests/homePage/GallerySection-imgs/parentsMeet.jpg" alt="Parent-Teacher Meet"/>
                <div class="overlay">Parent-Teacher Meet in DIET</div>
            </div>
            <div class="gallery-item">
                <img src="../public/assests/homePage/GallerySection-imgs/independence-day.jpg" alt="Independence Day"/>
                <div class="overlay">Independence Day Celebration</div>
            </div>
            <div class="gallery-item">
                <img src="../public/assests/homePage/GallerySection-imgs/kabbadi-winners.jpg" alt="Kabaddi Winners"/>
                <div class="overlay">Kabaddi Prize Winners</div>
            </div>
            <div class="gallery-item">
                <img src="../public/assests/homePage/GallerySection-imgs/prize-distribution.jpg" alt="Prize Distribution"/>
                <div class="overlay">Prize Distribution</div>
            </div>
            <div class="gallery-item">
                <img src="../public/assests/homePage/GallerySection-imgs/vinaya-nimajjanam.jpg" alt="Vinayaka Nimajjanam"/>
                <div class="overlay">Vinayaka Nimajjanam in DIET</div>
            </div>
        </div>
    </section>
    </>
  )
}

export default GallerySection