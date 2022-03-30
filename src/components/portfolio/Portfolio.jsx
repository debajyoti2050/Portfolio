import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'




const data=[
  {
    id: 1,
    image: IMG1,
    title: 'MongoDb CRUD with Python',
    github: 'https://github.com/debajyoti2050/MongoDBcrud-with-Python',
    demo:' https://pymongo-crud.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'ProductManagement-SpringBoot-PostgreSQL',
    github: 'https://github.com/debajyoti2050/ProductManagement-SpringBoot-PostgreSQL',
    demo:'https://product-management-springboot.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'StudentManagement-with-SpringBoot-H2',
    github: 'https://github.com/debajyoti2050/StudentManagement-with-SpringBoot-H2-',
    demo:''
  },
  {
    id: 4,
    image: IMG4,
    title: 'Student-Database-Management-System',
    github: 'https://github.com/debajyoti2050/Student-Database-Management-System',
    demo:''
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crimelab',
    github: 'https://github.com/debajyoti2050/CrimelabDjango',
    demo:'https://crimelab.herokuapp.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'AdmissionPrediction',
    github: 'https://github.com/debajyoti2050/AdmissionPrediction',
    demo:'https://admissionpredictionbylr.herokuapp.com/'
  }
]



const Portfolio = () => {
  return (
    <section id='portfolio'>

      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">

{
  data.map(({id, image, title, github, demo})=>{
    return(
      <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          


        </article>
    )



  })


}
      </div>



    </section>
  )
}

export default Portfolio