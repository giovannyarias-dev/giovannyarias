import NavLink from '../NavLink/NavLink'
import styles from './CvNavbar.module.css'

const links = [
  {icon: {src: '/icons/ga.svg', width: 55, height: 40, alt: 'Giovanny Arias logo'}, path: '/cv', targetSegment: null}, 
  {icon: {src: '/icons/portfolio.svg', width: 55, height: 40, alt: 'Portfolio logo'}, path: '/cv/experience', targetSegment: 'experience'},
]

const CvNavbar = () => {
  return (
    <div className={styles.container}>
      {links.map ( (link) => <NavLink key={link.path} {...link} /> )}
    </div>
  )
}

export default CvNavbar