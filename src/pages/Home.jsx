import React from "react";
import Backdrop from "../assets/backdrop.jpg";
import FakeProfile from "../assets/fake_profile.jpg";

const Home = () => {
  return (
    <div>
      <div
        className="flex justify-center items-center h-[500px] text-white"
        style={{
          backgroundImage: `url('https://www.stjohns.edu/sites/default/files/2022-05/istock-1296650655.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          backgroundColor: "gray",
        }}
      >
        <div className="w-full">
          <h1 className="text-5xl text-center mb-10">Welcome to CodeVerse</h1>
          <p className="text-lg w-[70%] text-center m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            consequuntur quaerat quod, doloribus molestiae eaque totam cumque!
            Vel perspiciatis, a pariatur reiciendis harum iusto, placeat
            molestiae totam deserunt corrupti dolor! Lorem ipsum dolor sit, amet
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-40 mx-auto block mt-5"
          >
            Get started
          </button>
        </div>
      </div>
      <div className="w-[70%] mx-auto p-10 my-10">
        <div className="flex justify-center items-center ">
          <img src={FakeProfile} alt="fake_image" className="w-96" />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              debitis a. Iste, sit numquam officiis placeat labore at nulla
              voluptatum quae id, ex tempore fuga eligendi culpa rerum, deleniti
              ad?. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aliquid, doloribus earum quisquam voluptatum quibusdam cumque
              quasi recusandae corrupti accusantium expedita, vitae quis fugiat!
              Blanditiis alias laborum, eos illo vel ducimus?
            </p>
          </div>
        </div>
      </div>
      <div className="w-[70%] mx-auto p-10 my-10">
        <div className="flex justify-center items-center ">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              debitis a. Iste, sit numquam officiis placeat labore at nulla
              voluptatum quae id, ex tempore fuga eligendi culpa rerum, deleniti
              ad?. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aliquid, doloribus earum quisquam voluptatum quibusdam cumque
              quasi recusandae corrupti accusantium expedita, vitae quis fugiat!
              Blanditiis alias laborum, eos illo vel ducimus?
            </p>
          </div>
          <img src={FakeProfile} alt="fake_image" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default Home;
