import { useState } from "react"
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"

type Props = {}

const Navbar = (props: Props) => {
    const flexBetween = "flex item-center justify-between"
  return (
    <nav>
        <div
        className={ `${flexBetween} fixed top-0 z-30 w-full py-6`}
        >
<div className={`${flexBetween} mx-auto w-5/6`}>
<div className={`${flexBetween} w-full gap-16`}>
    {/* Left Side of NavBar */}
<img alt="logo" src={Logo}/>
{/* Right Side of NavBar */}
<div className={`${flexBetween} w-full`}>
    {/* inner left side */}
    <div className={`${flexBetween} gap-8 text-sm`}>
<p>Home</p>
<p>About</p>
<p>Contact</p>
    </div>

    {/* inner right side */}
    <div className={`${flexBetween} gap-8`}>
<p>Sign In</p>
<button>Bcum a mem</button>
    </div>
</div>
</div>
</div>
        </div>

    </nav>
  )
}

export default Navbar