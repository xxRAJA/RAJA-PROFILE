import React from "react";
import Catagories from "./Catagories";
import { FaCartArrowDown } from "react-icons/fa";
import Slider from "./Slider";

const Home = () => {
  return (
    <div >
      <Slider/>
      <Catagories/>

      <div className="flex justify-center items-center min-h-screen !p-4 bg-gray-100">
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <div className="flex flex-col rounded-2xl justify-center shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] !p-4 !m-2">
            <div className="h-72 rounded-lg p-6 shadow-lg flex justify-center items-center">
              <img
                className="h-full w-auto"
                src="./suppliment/BCAA.webp"
                alt="Gym Belt"
              />
            </div>

            <h3 className="!m-[10px_10px] text-sm">
              MuscleBlaze BCAA Pro Powder, Powerful Intra Workout
            </h3>

            <h2 className="text-2xl font-semibold flex justify-between !m-[0_4px]">
              RS 725
              <span className="line-through text-gray-500">1099</span>
              <button className="bg-blue-400 flex items-center !p-1 gap-2 rounded-md">
                Add to <FaCartArrowDown className="w-5 h-5" />
              </button>
            </h2>
          </div>

          <div className="flex flex-col rounded-2xl justify-center shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] !p-4 !m-2">
            <div className="h-72 rounded-lg p-6 shadow-lg flex justify-center items-center">
              <img
                className="h-full w-auto"
                src="./assessories/lifting belt.webp"
                alt="Gym Belt"
              />
            </div>

            <h3 className="!mt-4">
              , Gym Belt for Women Workout, Powerlifting Belt for Men Exercise
              Belt, Gym Lifting Belt for Back - L/XL Black
            </h3>

            <h2 className="text-2xl font-semibold flex justify-between !m-[0_4px]">
              RS 999
              <span className="line-through text-gray-500">1299</span>
              <button className="bg-blue-400 flex items-center !p-1 gap-2 rounded-md">
                Add to <FaCartArrowDown className="w-5 h-5" />
              </button>
            </h2>
          </div>

          <div className="flex flex-col rounded-2xl justify-center shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] !p-4 !m-2">
            <div className="h-72 rounded-lg p-6 shadow-lg flex justify-center items-center">
              <img
                className="h-full w-auto"
                src="./assessories/bands.webp"
                alt="Gym Belt"
              />
            </div>

            <h3 className="!mt-4">
              Boldfit Gym Belt for Men Workout Lever Deadlift Belt for Gym
              Leather Weight lifting Belts, Gym Belt for Women Workout,
              Powerlifting Belt for Men Exercise Belt, Gym Lifting Belt for Back
              - L/XL Black
            </h3>

            <h2 className="text-2xl font-semibold flex justify-between !m-[0_4px]">
              RS 999
              <span className="line-through text-gray-500">1299</span>
              <button className="bg-blue-400 flex items-center !p-1 gap-2 rounded-md">
                Add to <FaCartArrowDown className="w-5 h-5" />
              </button>
            </h2>
          </div>

          <div className="flex flex-col rounded-2xl justify-center shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] !p-4 !m-2">
            <div className="h-72 rounded-lg p-6 shadow-lg flex justify-center items-center">
              <img
                className="h-full w-auto"
                src="./suppliment/fat burner.webp"
                alt="Gym Belt"
              />
            </div>

            <h3 className="!m-[10px_10px] text-sm">
              MuscleBlaze Biozyme Shred, 90 Tablets, with Thermogenic,
              Metabolism
            </h3>

            <h2 className="text-2xl font-semibold flex justify-between !m-[0_4px]">
              RS 999
              <span className="line-through text-gray-500">1299</span>
              <button className="bg-blue-400 flex items-center !p-1 gap-2 rounded-md">
                Add to <FaCartArrowDown className="w-5 h-5" />
              </button>
            </h2>
          </div>

          <div className="flex flex-col rounded-2xl justify-center shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] !p-4 !m-2">
            <div className="h-72 rounded-lg p-6 shadow-lg flex justify-center items-center">
              <img
                className="h-full w-auto"
                src="./assessories/knee sleevs.webp"
                alt="Gym Belt"
              />
            </div>

            <h3 className="!mt-4">
              Boldfit Gym Belt for Men Workout Lever Deadlift Belt for Gym
              Leather Weight lifting Belts, Gym Belt for Women Workout,
              Powerlifting Belt for Men Exercise Belt, Gym Lifting Belt for Back
              - L/XL Black
            </h3>

            <h2 className="text-2xl font-semibold flex justify-between !m-[0_4px]">
              RS 999
              <span className="line-through text-gray-500">1299</span>
              <button className="bg-blue-400 flex items-center !p-1 gap-2 rounded-md">
                Add to <FaCartArrowDown className="w-5 h-5" />
              </button>
            </h2>
          </div>

          <div className="flex flex-col rounded-2xl justify-center shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] !p-4 !m-2">
            <div className="h-72 rounded-lg p-6 shadow-lg flex justify-center items-center">
              <img
                className="h-full w-auto"
                src="./suppliment/pre workout.webp"
                alt="Gym Belt"
              />
            </div>

            <h3 className="!m-[10px_10px] text-sm">
              G.O.A.T Fit Colossal Pre | PreWorkout Powder (Masala Lemonade
              180gm)
            </h3>

            <h2 className="text-2xl font-semibold flex justify-between !m-[0_4px]">
              RS 999
              <span className="line-through text-gray-500">1499</span>
              <button className="bg-blue-400 flex items-center !p-1 gap-2 rounded-md">
                Add to <FaCartArrowDown className="w-5 h-5" />
              </button>
            </h2>
          </div>

          <div className="flex flex-col rounded-2xl justify-center shadow-[0px_0px_20px_5px_rgba(0,0,0,0.3)] !p-4 !m-2">
                    <div className="h-72 rounded-lg p-6 shadow-lg flex justify-center items-center">
                      <img
                        className="h-full w-auto"
                        src="./assessories/shaker bottle.webp"
                        alt="Gym Belt"
                      />
                    </div>
          
                    <h3 className="!mt-4">
                      Boldfit Gym Belt for Men Workout Lever Deadlift Belt for Gym Leather
                      Weight lifting Belts, Gym Belt for Women Workout, Powerlifting Belt
                      for Men Exercise Belt, Gym Lifting Belt for Back - L/XL Black
                    </h3>
          
                    <h2 className="text-2xl font-semibold flex justify-between !m-[0_4px]">
                      RS 999
                      <span className="line-through text-gray-500">1299</span>
                      <button className="bg-blue-400 flex items-center !p-1 gap-2 rounded-md">
                        Add to <FaCartArrowDown className="w-5 h-5" />
                      </button>
                    </h2>
                  </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
