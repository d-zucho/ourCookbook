'use client'
import { useMediaQuery } from 'usehooks-ts'
import { Menu } from './Icons'
import { Button } from './ui/button'

const NavLinks = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <nav>
      {!isMobile ? (
        <div className='flex gap-2 text-white'>
          <Button className='btn-primary hover:bg-primary-hover shadow-lg'>
            Sign In
          </Button>
          <Button className='bg-secondary hover:bg-secondary-hover shadow-lg'>
            Join Now
          </Button>
        </div>
      ) : (
        <Menu />
      )}
    </nav>
  )
}

export default NavLinks
