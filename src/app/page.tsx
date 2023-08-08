import NavBar from './components/NavBar';
import './customBootstrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { title } from './fonts';

export default function Home() {
  return (
    <main className="bg-primary">
      <NavBar/>
      <section className="px-4 py-4 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className={`fw-light ${title.className} mb-4`}>Everyone Can Strike for Musical Passion</h1>
            <p className="lead text-muted mb-4">
              Strike Music Institute (SMI) is a quality violin education provider based in Hong Kong. We focus on providing high-level violin teaching to a wide range of children and teenagers who are keen on learning violin.
            </p>
            <a href="#" className="btn btn-secondary my-2">Join Us</a>
          </div>
        </div>
      </section>
      
      <section className="border-bottom border-primary px-4 bg-secondary text-primary" id="featured-3">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="rounded border border-primary text-center feature-icon bg-secondary bg-gradient" style={{width: 75, height: 75}}>
              <i className="bi bi-people-fill" style={{ fontSize: 50 }}></i>
            </div>
            <h2 className={title.className}>Partner Brand (合作品牌)</h2>
            <img className="img-fluid mx-auto d-block my-4 rounded w-50 border border-primary" src="/sjc_logo.jpeg" alt="SJC"/>
            <h3 className="text-center">聖若瑟書院 SJC</h3>
          </div>
          <div className="feature col">
          <div className="rounded border border-primary text-center feature-icon bg-secondary bg-gradient" style={{width: 75, height: 75}}>
              <i className="bi bi-music-note-list" style={{ fontSize: 50 }}></i>
            </div>
            <h2 className={title.className}>Our Teacher: Edwin Lam</h2>
            <img className="img-fluid mx-auto d-block my-4 rounded w-50 border border-primary" src="/teacher.jpeg" alt="Teacher: Edwin Lam"/> 
            <ul>
                <li>HKAPA Major in Viola Performance</li>
                <li>Viola principal of multi-orchestra</li>
                <li>Masterclasses with multi-quartet</li>
                <li>Selected to join Kent Blossom Music Festival</li>
              </ul>
          </div>
          <div className="feature col">
            <div className="rounded border border-primary text-center feature-icon bg-secondary bg-gradient" style={{width: 75, height: 75}}>
              <i className="bi bi-card-text" style={{ fontSize: 50 }}></i>
            </div>
            <img className="img-fluid mx-auto d-block rounded w-75 border border-secondary mt-5" src="/teaching_plan.png" alt="Teaching Plan"/> 
          </div>
        </div>
      </section>

      <section className="container p-5">
      <div className="border border-primary row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-4 shadow-lg bg-secondary text-primary">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className={`display-4 fw-normal ${title.className}`}>Plans</h1>
        </div>

        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 bg-primary text-secondary shadow-sm">
              <div className="card-header py-3">
                <h4 className={`my-0 fw-normal ${title.className}`}>Rookie (初級)</h4>
              </div>
              <div className="card-body">
                <h2 className="card-title">入門成為小提琴手</h2>
                <img className="card-img" src="/rookie.jpeg" alt="Rookie"/>

                <ul className="list-group list-group-flush mt-3 mb-4 ">
                  <li className="list-group-item bg-primary text-secondary">2年獲取ABRSM Grade 2 & 3</li>
                  <li className="list-group-item bg-primary text-secondary">30 online lessons</li>
                  <li className="list-group-item bg-primary text-secondary">10 hours of teaching feedback</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-outline-secondary">Learn More</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-4 rounded-3 bg-primary text-secondary shadow-sm">
              <div className="card-header py-3">
                <h4 className={`my-0 fw-normal ${title.className}`}>Intermediate (中級)</h4>
              </div>
              <div className="card-body">
                <h2 className="card-title">中級小提琴手</h2>
                <img className="card-img" src="/intermediate.jpeg" alt="Intermediate"/>

                <ul className="list-group list-group-flush mt-3 mb-4 ">
                  <li className="list-group-item bg-primary text-secondary">1年獲取ABRSM Grade 5</li>
                  <li className="list-group-item bg-primary text-secondary">30 online lessons</li>
                  <li className="list-group-item bg-primary text-secondary">10 hours of teaching feedback</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-outline-secondary">Learn More</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-4 rounded-3 bg-primary text-secondary shadow-sm">
              <div className="card-header py-3">
                <h4 className={`my-0 fw-normal ${title.className}`}>Master (專業)</h4>
              </div>
              <div className="card-body">
                <h2 className="card-title">成為專業小提琴手</h2>
                <img className="card-img" src="/master.jpeg" alt="Master"/>

                <ul className="list-group list-group-flush mt-3 mb-4 ">
                  <li className="list-group-item bg-primary text-secondary">8年獲取ABRSM Grade 8</li>
                  <li className="list-group-item bg-primary text-secondary">100 online lessons</li>
                  <li className="list-group-item bg-primary text-secondary">100 hours of teaching feedback</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-outline-secondary">Learn More</button>
              </div>
            </div>
          </div>
      </div>
        </div>
      </section>
    </main>
  )
}
