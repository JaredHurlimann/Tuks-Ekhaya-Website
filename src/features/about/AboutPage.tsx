import hcGroupImage from "../../assets/hcGroupPhoto.jpg";
import hcGovImage from "../../assets/Gov.jpg";
import hcSPImage from "../../assets/SP.jpg";
import hcPMImage from "../../assets/PM.jpg";
import hcVSPImage from "../../assets/VSP.jpg";
import hcHCImage from "../../assets/HighCommish.jpg";
import hcSSImage from "../../assets/StateSec.jpg";
import hcM1Image from "../../assets/MinisterNdlovu.jpg";
import hcM2Image from "../../assets/MinisterBanda.jpg";
import hcM3Image from "../../assets/MinisterMosupye.jpg";
import hcM4Image from "../../assets/MinisterSlack.jpg";
import hcM5Image from "../../assets/MinisterMokwana.jpg";
import aboutImage from "../../assets/Pendo.jpg";

export const AboutPage = () => {
  return (
    <section className="page">
      <header className="page__header">
        <h1>About Tuks Ekhaya</h1>
        <p className="page__subtitle">
          Building legacies and fostering a community of excellence at the University of Pretoria.
        </p>
      </header>

      {/* History / Story Section */}
      <div className="about-section about-history">
        <div className="about-history__content">
          <h2>Our Story</h2>
          <p>
            Tuks Ekhaya was established with a singular vision: to provide a premium, 
            supportive, and vibrant environment for students. "Ekhaya" means "at home," 
            and we strive to make this residence a true home away from home. 
          </p>
          <p>
            From dedicated academic support to lifelong friendships forged in our halls, 
            our community is built on mutual respect, diversity, and an unwavering drive for success.
          </p>
        </div>
        <div className="about-history__media">
          <img src={aboutImage} alt="Tuks Ekhaya Building" className="about-image" />
        </div>
      </div>

      {/* Core Values Section */}
      <div className="about-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="card card--highlight">
            <h3 className="card__title">Excellence</h3>
            <p className="card__body">We strive for academic and personal greatness in everything we do, supporting each other to reach our full potential.</p>
          </div>
          <div className="card card--highlight">
            <h3 className="card__title">Community</h3>
            <p className="card__body">Forging bonds that last long after graduation. We are a family that celebrates diversity and unity.</p>
          </div>
          <div className="card card--highlight">
            <h3 className="card__title">Respect</h3>
            <p className="card__body">Creating an inclusive, safe environment where every voice is heard and every individual is valued.</p>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="about-section">
        <div className="about-section__header">
          <h2>Meet the House Committee</h2>
          <p className="section-subtitle">The student leaders dedicated to making your Tuks Ekhaya experience unforgettable.</p>
        </div>

        <div className="team-group-photo">
          <img 
            src={hcGroupImage} 
            alt="The 2026 Tuks Ekhaya House Committee" 
            className="team-group-photo__img" 
          />
        </div>
        
        <div className="team-grid">
          {/*Team Member 0*/}
          <div className="team-card">
            <img src={hcGovImage} alt="Tuks Ekhaya House Committee" className="team-card__image" />
            <h3 className="team-card__name">David Raats</h3>
            <p className="team-card__role">Governer General</p>
            <p className="team-card__bio">
              Head of Residence.
            </p>
          </div>

          {/* Team Member 1 */}
          <div className="team-card">
            <img src={hcSPImage} alt="Stuart Tyrrell" className="team-card__image" />
            <h3 className="team-card__name">Stuart Tyrrell</h3>
            <p className="team-card__role">State President</p>
            <p className="team-card__bio">
              Chairperson and Discipline.
            </p>
          </div>
          
          {/* Team Member 2 */}
          <div className="team-card">
            <img src={hcPMImage} alt="Jared Hürlimann" className="team-card__image" />
            <h3 className="team-card__name">Jared Hürlimann</h3>
            <p className="team-card__role">Prime Minister</p>
            <p className="team-card__bio">
              Chief Executive in the office of the State President. Minister of Internal Culture, Recreation, Historic and Archive Affairs.
            </p>
          </div>
          
          {/* Team Member 3 */}
          <div className="team-card">
            <img src={hcVSPImage} alt="Ivan Mapika" className="team-card__image" />
            <h3 className="team-card__name">Ivan Mapika</h3>
            <p className="team-card__role">Vice State President</p>
            <p className="team-card__bio">
              Chief Assistant in the office of the State President. Minister of Finance.
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="team-card">
            <img src={hcHCImage} alt="Jason Dickinson" className="team-card__image" />
            <h3 className="team-card__name">Jason Dickinson</h3>
            <p className="team-card__role">High Commisioner</p>
            <p className="team-card__bio">
              First Year Guardian, Clubhouse, Marketing and Communications.
            </p>
          </div>

          {/* Team Member 5 */}
          <div className="team-card">
            <img src={hcSSImage} alt="Divan Gerber" className="team-card__image" />
            <h3 className="team-card__name">Divan Gerber</h3>
            <p className="team-card__role">State Secretary</p>
            <p className="team-card__bio">
              Minister of Administartion, Facilities, Safety, Security, Clubhouse and Values.
            </p>
          </div>

          {/* Team Member 6 */}
          <div className="team-card">
            <img src={hcM1Image} alt="Simphiwe Ndlovu" className="team-card__image" />
            <h3 className="team-card__name">Simphiwe Ndlovu</h3>
            <p className="team-card__role">Minister</p>
            <p className="team-card__bio">
              Minister of Well-being and Senior Guardian.
            </p>
          </div>

          {/* Team Member 7 */}
          <div className="team-card">
            <img src={hcM2Image} alt="Dumisani Noel Banda" className="team-card__image" />
            <h3 className="team-card__name">Dumisani Noel Banda</h3>
            <p className="team-card__role">Minister</p>
            <p className="team-card__bio">
              Minister of Academics.
            </p>
          </div>

          {/* Team Member 8 */}
          <div className="team-card">
            <img src={hcM3Image} alt="Ipeleng Mosupye" className="team-card__image" />
            <h3 className="team-card__name">Ipeleng Mosupye</h3>
            <p className="team-card__role">Minister</p>
            <p className="team-card__bio">
              Minister of RAG, Community Engagement and Green Initiatives.
            </p>
          </div>

          {/* Team Member 9 */}
          <div className="team-card">
            <img src={hcM4Image} alt="Owen Slack" className="team-card__image" />
            <h3 className="team-card__name">Owen Slack</h3>
            <p className="team-card__role">Minister</p>
            <p className="team-card__bio">
              Minister of Sport, Semi Guardian and Social Affairs.
            </p>
          </div>

          {/* Team Member 10 */}
          <div className="team-card">
            <img src={hcM5Image} alt="Karabo Mokwana" className="team-card__image" />
            <h3 className="team-card__name">Karabo Mokwana</h3>
            <p className="team-card__role">Minister</p>
            <p className="team-card__bio">
              Minister of External Culture, Clothing and Merchandise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};