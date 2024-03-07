import MaxWidthWrapper from './MaxWidthWrapper'
import NavLinks from './NavLinks'

const Header = () => {
  return (
    <header className='w-full bg-bg_cream py-4 shadow-md'>
      <MaxWidthWrapper>
        <div className='flex justify-between'>
          {/* left */}
          <div id='logo' className='container'>
            <span className='text-2xl md:text-3xl text-primary font-bold'>
              ourCookbook
            </span>
          </div>
          {/* right side */}
          <NavLinks />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
