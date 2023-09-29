/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Lottie from "react-lottie-player";
import workDone from "../../Json/workdone.json"
import Aos from "aos"
import 'aos/dist/aos.css'
function Choose() {
    useEffect(() => {
        Aos.init({
            duration : 2500})
    },[])
  return (
    <div className="hero min-h-screen ">
    <div className="hero-content lg:flex-row gap-12">
      <div className="text-center lg:text-left">
        <h1 className="text-8xl font-bold w-full" data-aos="zoom-up">Why <span className="choose">Choose</span> us ?</h1>
        <p className="py-6"></p>
      </div>
      <div className="w-full">
        <ul className="text-lg">
            <li className="pb-3" data-aos="slide-down">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi eaque reiciendis at suscipit? Ratione id quos dicta ab illo sequi molestias neque, magnam ipsam cupiditate quae aspernatur placeat dignissimos perspiciatis natus inventore minus! Doloremque, culpa quaerat. Error autem rem cumque.</li>
            <li className="pb-3" data-aos="zoom-up-down">There are many institute out there why you will be choose us ? because we had been working since 2018 and we have gathered a lot experience,that most people doesn't have that. We work efficiently and never get tired of client work.Your trust our work.</li>
            <li data-aos="zoom-out-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque deleniti neque exercitationem soluta veniam minima nostrum, officiis incidunt eius veritatis debitis dolor consectetur quisquam reprehenderit iusto, dolorum tenetur ipsa maiores harum praesentium quas rem esse error molestias! Assumenda, consequatur culpa?</li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default Choose;
