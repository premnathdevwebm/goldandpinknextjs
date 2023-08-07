import Link from 'next/link';
import styles from './OurService.module.css';
const OurService = () => {
    const services = [
      { id: 1, title: '01. Mani Pedi', description: 'Book Now' },
      { id: 2, title: '02. Nail Bar', description: 'Book Now' },
      { id: 3, title: '03. Lashes', description: 'Book Now' },
      { id: 4, title: '04. Hydra Facial', description: 'Book Now' },
      { id: 5, title: '05. Laser Hair Removal', description: 'Book Now' },
      { id: 6, title: '06. Acne Treatment', description: 'Book Now' },
      { id: 7, title: '07. Botox', description: 'Book Now' },
      { id: 8, title: '08. Fillers', description: 'Book Now' },
      { id: 9, title: '09. Glutathione Infusion', description: 'Book Now' },
    ];
  
    return (
      <div>
        <h2 className={styles.heading}>Our Services</h2>
        <div className={styles.gridcontainer}>
          {services.map((service) => (
            <div key={service.id} className={styles.griditem}>
              <h3 className={styles.title}>{service.title.split(".")[0]}{" "}/</h3>
              <h2 className={styles.titlecontent}>{service.title.split(".")[1]}</h2>
              <Link href={`/service/${service.id}`}> <p className={styles.view}>{service.description}</p></Link>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export {OurService};