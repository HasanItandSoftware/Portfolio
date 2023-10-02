import { Link } from "react-router-dom"
import profile from "../SliderImages/profile.jpg"
import founder from "../SliderImages/founder.png"
import { CiFacebook,CiTwitter,CiInstagram } from "react-icons/ci";
function ProfileCard() {
  return (
    <div>
        <h1 className="text-7xl text-center font-bold underline pb-8">Our <span className="innovative ">Team</span></h1>
        <div className="flex justify-around pb-12">
        <div className="artboard phone-1 shadow-sm p-2 text-center">
            <img src={founder} className="w-[500px]" alt="" />
            <p className="text-[25px] pt-3">Hasanuzzaman Hasan</p>
            <p className="text-[17px]">Director and Founder</p>
            <ul className="flex gap-2 justify-center pt-2">
            <Link className="text-[25px] text-blue-600"><CiFacebook /></Link>
            <Link className="text-[25px] text-blue-400"><CiTwitter /></Link>
            <Link className="text-[25px] text-orange-500"><CiInstagram /></Link>
            </ul>
        </div>
        <div className="artboard phone-1 shadow-sm p-2 text-center">
            <img src={founder} className="w-[500px]" alt="" />
            <p className="text-[25px] pt-3">Hasanuzzaman Hasan</p>
            <p className="text-[17px]">Director and Founder</p>
            <ul className="flex gap-2 justify-center pt-2">
            <Link className="text-[25px] text-blue-600"><CiFacebook /></Link>
            <Link className="text-[25px] text-blue-400"><CiTwitter /></Link>
            <Link className="text-[25px] text-orange-500"><CiInstagram /></Link>
            </ul>
        </div>
        <div className="artboard phone-1 shadow-sm p-2 text-center">
            <img src={founder} className="w-[500px]" alt="" />
            <p className="text-[25px] pt-3">Hasanuzzaman Hasan</p>
            <p className="text-[17px]">Director and Founder</p>
            <ul className="flex gap-2 justify-center pt-2">
            <Link className="text-[25px] text-blue-600"><CiFacebook /></Link>
            <Link className="text-[25px] text-blue-400"><CiTwitter /></Link>
            <Link className="text-[25px] text-orange-500"><CiInstagram /></Link>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default ProfileCard


