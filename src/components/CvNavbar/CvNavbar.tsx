import NavLink from '../NavLink/NavLink'
import styles from './CvNavbar.module.css'

const links = [
  {icon: 'ga', path: '/cv', targetSegment: null}, 
  {icon: 'portfolio', path: '/cv/experience', targetSegment: 'experience'},
]

const CvNavbar = () => {
  return (
    <div className={styles.container}>
      {links.map ( (link) => <NavLink key={link.path} {...link} /> )}
    </div>
  )
}

export default CvNavbar