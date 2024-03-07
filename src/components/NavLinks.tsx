'use client'
import { useMediaQuery } from 'usehooks-ts'
import { Menu } from './Icons'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet'
import { Separator } from './ui/separator'

const NavLinks = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <nav>
      {!isMobile ? (
        <div className='flex gap-2 text-white'>
          <Button className='btn-primary hover:bg-primary-hover shadow-lg active:scale-95 transition-all'>
            Sign In
          </Button>
          <Button className='bg-secondary hover:bg-secondary-hover shadow-lg active:scale-95 transition-all'>
            Join Now
          </Button>
        </div>
      ) : (
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className='bg-bg_cream flex flex-col gap-4 text-white'>
            <SheetTitle className='text-center'>
              Welcome to useCookbook!
            </SheetTitle>
            <Separator className='bg-slate-400 rounded-full mb-4' />
            <Button className='btn-primary hover:bg-primary-hover shadow-lg active:scale-95 transition-all'>
              Sign In
            </Button>
            <Button className='bg-secondary hover:bg-secondary-hover shadow-lg active:scale-95 transition-all'>
              Join Now
            </Button>
          </SheetContent>
        </Sheet>
      )}
    </nav>
  )
}

export default NavLinks
