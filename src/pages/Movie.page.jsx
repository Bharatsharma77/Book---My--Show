import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

import MovieHero from "../components/MovieHero/MovieHero.component";


const Movie = () => {
  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>
            Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile,Darkseid
            sends Steppenwolf to Earth with an army to subjugate humans.
          </p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h1> Apllicable offers</h1>
          <div className="flex item-start gap-2 bg-yellow-200 p-3 border">
            <div className="w-8 h-8">
              <FaCcVisa className="w-full h-full" />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-gray-700 text-xl">
                Visa Stream Offer
              </h3>
              <p className="text-gray-600">
                Get 50% off up to INR 150 on all Rupay cards* on BookMyShow
                Stream.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;