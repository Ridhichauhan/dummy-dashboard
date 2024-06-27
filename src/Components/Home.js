import React, { useState } from "react";
import bghouse from "../../../dummy-dashboard/src/assets/images/bghouse.png";
import people from "../../../dummy-dashboard/src/assets/images/people.png";
import rating from "../../../dummy-dashboard/src/assets/images/rating.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import house1 from "../../../dummy-dashboard/src/assets/images/house1.png";
import house2 from "../../../dummy-dashboard/src/assets/images/house2.png";
import house3 from "../../../dummy-dashboard/src/assets/images/house3.png";
import star from "../../../dummy-dashboard/src/assets/images/star.png";
import starr from "../../../dummy-dashboard/src/assets/images/starr.png";
import image from "../../../dummy-dashboard/src/assets/images/Image.png";
import image1 from "../../../dummy-dashboard/src/assets/images/Image1.png";
import image2 from "../../../dummy-dashboard/src/assets/images/Image2.png";
import women from "../../../dummy-dashboard/src/assets/images/woman.png";

const Home = () => {
  const [, setStartDate] = useState(new Date());
  return (
    <div className="">
      <div className="flex justify-around mt-5 mb-5">
        <div className="flex text-3xl ">
          <h1 className="green-text font-semibold ">UNWIND</h1>
          <h1 className="text-black font-bold">CABS</h1>
        </div>
        <div className="flex space-x-5 mt-2 text-base text-style">
          <h1 className="green-text font-semibold ">Our Cabins</h1>
          <h1 className="text-black font-semibold">Gets Inspired</h1>
          <h1 className="text-black font-semibold">Gift a Stay</h1>
          <h1 className="text-black font-semibold">About Us</h1>
        </div>
      </div>
      <div className="relative text-stylee">
        <img src={bghouse} alt="" className="w-full h-[560px] object-cover" />
        <h1 className="absolute inset-0 flex mt-28 ml-80 text-white text-5xl font-extrabold">
          Leave the office behind
        </h1>
        <div>
          <h1 className="absolute inset-0 flex mt-44 ml-80 text-white text-5xl font-extrabold">
            and
          </h1>
          <h1 className="absolute inset-0 flex mt-44 ml-[420px] text-white text-5xl font-extrabold yellow-text">
            Unwind
          </h1>
        </div>
        <h1 className="absolute inset-0 flex items-center ml-80 text-white text-lg">
          Welcome to our cozy cabin nestled in the heart of mountains!
        </h1>
        <h1 className="absolute inset-0 flex items-center mt-12 ml-80 text-white text-lg">
          Our Cabins is the perfect getaway for those seeking peace and
        </h1>
        <h1 className="absolute inset-0 flex items-center mt-24 ml-80 text-white text-lg">
          relaxation in a natural setting.
        </h1>
        <div className="flex space-x-5 absolute inset-0 items-center mt-56 ml-80">
          <img src={people} alt=""></img>
          <h1 className="text-white text-lg text-stylee">Trustpilot </h1>
          <img src={rating} alt=""></img>
          <h1 className="text-white">4.5 / 5</h1>
        </div>
        <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex justify-between bg-white drop-shadow-2xl py-8 px-10 rounded-md">
            <input
              placeholder="I want to go "
              type="text"
              className="bg-slate-200 py-2 p-2"
            />
            <DatePicker
              // selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="bg-slate-200 py-2 p-2 ml-4"
              placeholderText="Check In"
            />
            <DatePicker
              // selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="bg-slate-200 py-2 p-2 ml-4"
              placeholderText="Check Out"
            />
            <input
              placeholder="Travellers "
              type="text"
              className="bg-slate-200 py-2 p-2 ml-4"
            />
            <button className="bg-green rounded-sm text-white w-44 ml-4">
              Find available cabins
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-around text-start mt-24 text-stylee ">
        <h1 className="text-black text-3xl font-bold ">
          Discover our idyllic countryside cabins
        </h1>
        <h1>{/* qweq */}</h1>
      </div>
      <div className="flex justify-around mt-4">
        <h1>
          Fully equipped kitchen and bathroom with plenty of walking and cycling
          routes to explore.
        </h1>
        <h1 className="border-b-2">View all Cabins</h1>
      </div>
      <div className="grid grid-cols-3 ml-60 mt-14 text-stylee mb-20">
        <card className="light-black w-80 rounded-md">
          <img src={house1} alt="" className="rounded-t-lg"></img>
          <h1 className=" cyan-text text-start ml-2 mt-4">
            HAMPSHIRE . ENGLAND
          </h1>
          <div className="flex justify-between">
            <h1 className="text-white text-xl font-bold ml-2">
              Rustic country retreat
            </h1>
            <h1 className="text-white text-xl font-bold mr-2">$ 210pp</h1>
          </div>
          <div className="text-white text-base text-start ml-2 mt-4">
            <h1 className="text-white text-lg">
              Step outside and take in the stunning
              <h1>views.Our Cabins sits on a quiet and</h1>
              <h1>secluded property,providing the perfect</h1>
              setting for a peacefull retreat.
            </h1>
          </div>
          <div className="flex justify-between mt-2 mb-4">
            <div className="flex space-x-1 ml-2 p-1">
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={starr} alt=""></img>
            </div>
            <div className="text-white mr-2">82 Reviews</div>
          </div>
        </card>
        <card className="light-black w-80 rounded-md">
          <img src={house2} alt="" className="rounded-t-lg"></img>
          <h1 className=" cyan-text text-start ml-2 mt-4">
            HAMPSHIRE . ENGLAND
          </h1>
          <div className="flex justify-between">
            <h1 className="text-white text-xl font-bold ml-2">
              Cozy getaway cabins
            </h1>
            <h1 className="text-white text-xl font-bold mr-2">$ 312pp</h1>
          </div>
          <div className="text-white text-base text-start ml-2 mt-4">
            <h1 className="text-white text-lg">
              Step outside and take in the stunning
              <h1>views.Our Cabins sits on a quiet and</h1>
              <h1>secluded property,providing the perfect</h1>
              setting for a peacefull retreat.
            </h1>
          </div>
          <div className="flex justify-between mt-2 mb-4">
            <div className="flex space-x-1 ml-2 p-1">
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={starr} alt=""></img>
            </div>
            <div className="text-white mr-2">82 Reviews</div>
          </div>
        </card>
        <card className="light-black w-80 rounded-md">
          <img src={house3} alt="" className="rounded-t-lg"></img>
          <h1 className=" cyan-text text-start ml-2 mt-4">
            HAMPSHIRE . ENGLAND
          </h1>
          <div className="flex justify-between">
            <h1 className="text-white text-xl font-bold ml-2">
              Rustic country retreat
            </h1>
            <h1 className="text-white text-xl font-bold mr-2">$ 210pp</h1>
          </div>
          <div className="text-white text-base text-start ml-2 mt-4">
            <h1 className="text-white text-lg">
              Step outside and take in the stunning
              <h1>views.Our Cabins sits on a quiet and</h1>
              <h1>secluded property,providing the perfect</h1>
              setting for a peacefull retreat.
            </h1>
          </div>
          <div className="flex justify-between mt-2 mb-4">
            <div className="flex space-x-1 ml-2 p-1">
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={star} alt=""></img>
              <img src={starr} alt=""></img>
            </div>
            <div className="text-white mr-2">82 Reviews</div>
          </div>
        </card>
      </div>
      <div className="light-bluebg">
        <h1 className="text-black font-bold text-stylee text-3xl text-start p-10 pl-56">
          Inspiration for your next getaway
        </h1>
        <div className="flex justify-between  ">
          <h1 className="pl-56 text-lg ">
            We've curated some amazing experiences to help you find your next
            getaway.
          </h1>
          <h1 className="pr-56 ">View all experiences</h1>
        </div>
        <div className="grid grid-cols-3 mt-10 pl-56 ">
          <card className="bg-gray w-80 rounded-md mb-20">
            <img src={image} alt="" className="rounded-t-lg"></img>
            <h1 className=" cyan-text text-start ml-2 mt-4">
              FOR THOSE WHO LOVE
            </h1>
            <div className="flex justify-between">
              <h1 className="text-white text-xl font-bold ml-2">
                To Explore Nature
              </h1>
            </div>
            <div className="text-white text-base text-start ml-2 mt-4">
              <h1 className="text-white text-lg">
                Step outside and take in the stunning
                <h1>views.Our Cabins sits on a quiet and</h1>
                <h1>secluded property,providing the perfect</h1>
                setting for a peacefull retreat.
              </h1>
            </div>
          </card>
          <card className="bg-gray w-80 rounded-md mb-20">
            <img src={image1} alt="" className="rounded-t-lg"></img>
            <h1 className=" cyan-text text-start ml-2 mt-4">
              For those who want
            </h1>
            <div className="flex justify-between">
              <h1 className="text-white text-xl font-bold ml-2">
                To Relax, rest & re-set
              </h1>
            </div>
            <div className="text-white text-base text-start ml-2 mt-4">
              <h1 className="text-white text-lg">
                Step outside and take in the stunning
                <h1>views.Our Cabins sits on a quiet and</h1>
                <h1>secluded property,providing the perfect</h1>
                setting for a peacefull retreat.
              </h1>
            </div>
          </card>
          <card className="bg-gray w-80 rounded-md mb-20">
            <img src={image2} alt="" className="rounded-t-lg"></img>
            <h1 className=" cyan-text text-start ml-2 mt-4">
              For those who have
            </h1>
            <div className="flex justify-between">
              <h1 className="text-white text-xl font-bold ml-2">
                Four legged friends
              </h1>
            </div>
            <div className="text-white text-base text-start ml-2 mt-4">
              <h1 className="text-white text-lg mb-5">
                Step outside and take in the stunning
                <h1>views.Our Cabins sits on a quiet and</h1>
                <h1>secluded property,providing the perfect</h1>
                setting for a peacefull retreat.
              </h1>
            </div>
          </card>
        </div>
      </div>
      <div className="">
        <img src={women} alt="" className="w-full"></img>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Home;
