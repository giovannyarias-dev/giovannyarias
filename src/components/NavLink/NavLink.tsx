'use client'
import Link from 'next/link'

import styles from './NavLink.module.css'
import { useSelectedLayoutSegment } from 'next/navigation'

type Props = {
  icon: string;
  path: string;
  targetSegment?: string | null;
}

const NavLink: React.FC<Props> = ({icon, path, targetSegment}) => {
  const activeSegment = useSelectedLayoutSegment()
  return (
    <Link style={{ opacity: (activeSegment === targetSegment) ? 1 : 0.5}} href={path}>
      <img src={`/icons/${icon}.svg`} className={styles.icon} />
    </Link>
)}

export default NavLink