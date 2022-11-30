import "./App.css";
import logo from "./logo2.png";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Example2 from "./Nav2";

const Declare = () => {
  const [word, setWord] = useState("أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰ");
  const [button, setButton] = useState("Next");

  const ResetButton = () => {
    return (
      <button
        // onClick={() => {}}
        class="mb-3 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full space-y-20"
      >
        Reset
      </button>
    );
  };

  const notify = () =>
    toast.success("Welcome, Brother!", {
      position: "top-center",
      theme: "dark",
    });

  return (
    <div className="App">
      <Example2 />
      {/* <div className="shadow-md w-full relative top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800"
          >
            <span className="text-4xl text-black-600 mr-1 pt-2"></span>
            Declare your Shahada
          </div>
          <button
            onClick={() => {
              navigate("/");
            }}
            type="button"
            className="bg-blue-600 text-xl text-white py-2 px-6 rounded md:ml-8 hover:bg-blue-700
    duration-500"
          >
            Back to Zikir App
          </button>
        </div>
      </div> */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p class="text-4xl mb-6">repeat:</p>
        <p class="text-5xl">{word}</p>
        <ToastContainer />
        <button
          onClick={() => {
            if (word === "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰ") {
              setWord("وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ ٱللَّٰ");
              setButton("Finish");
            } else {
              notify();
              ResetButton();
            }
            if (button === "Finish") {
              ResetButton();
            }
          }}
          class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full space-y-20 mb-3 mt-3"
        >
          {button}
        </button>
      </header>
      <footer class="p-4 bg-white solid-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="#a" class="hover:underline">
            FaoTech™
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"></ul>
      </footer>
    </div>
  );
};

export default Declare;
