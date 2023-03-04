'use client'
import Link from 'next/link'

import styles from './NavLink.module.css'
import { useSelectedLayoutSegment } from 'next/navigation'
import Image from 'next/image'
import IImage from '../../model/image'

type Props = {
  icon: IImage;
  path: string;
  targetSegment?: string | null;
}

const NavLink: React.FC<Props> = ({icon, path, targetSegment}) => {
  const activeSegment = useSelectedLayoutSegment()
  return (
    <Link style={{ opacity: (activeSegment === targetSegment) ? 1 : 0.5}} href={path}>
      <Image width={icon.width} height={icon.height} src={icon.src} className={styles.icon} alt={icon.alt} />
    </Link>
)}

export default NavLink