import "./App.css";
import logo from "./logo2.png";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Example from "./Nav";

function App() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const [num, setNum] = useState(0);
  const [word, setWord] = useState("سُـبْحانَ الله");
  const [totalNum, setTotalNum] = useState(0);
  const [zikir, setZikir] = useState("Start");
  const navigate = useNavigate();
  const notify = () =>
    toast.success("You're getting closer to the holy gate...", {
      position: "top-right",
      theme: "dark",
    });
  const notify2 = () =>
    toast.success("Welcome to Paradise brother!", {
      position: "top-right",
      theme: "dark",
    });

  return (
    <div className="App">
      <Example />
      {/* <div className="shadow-md w-full relative top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800"
          >
            Welcome to Zikir App!
          </div>
          <button
            onClick={() => {
              navigate("/declare");
            }}
            type="button"
            className="bg-blue-600 text-xl text-white py-2 px-6 rounded md:ml-8 hover:bg-blue-700
            duration-500"
          >
            Declare your faith
          </button>
        </div>
      </div> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Total: {totalNum}</p>
        <p>{num}</p>
        <p class="text-5xl">{word}</p>
        <ToastContainer />
        <button
          onClick={() => {
            setTotalNum(totalNum + 1);
            setNum(num + 1);
            setZikir("Keep praying...");
            if (num === 33) {
              setNum(1);
              if (word === "سُـبْحانَ الله") {
                setWord("ٱلْحَمْدُ لِلَّٰهِ");
              } else if (word === "ٱلْحَمْدُ لِلَّٰهِ") {
                setWord("الله أكبر");
              } else if (word === "الله أكبر") {
                setWord("سُـبْحانَ الله");
              }
            }
            if (totalNum === 33 - 1) {
              notify();
            } else if (totalNum === 99 - 1) {
              notify2();
            }
          }}
          class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full space-y-20 mb-3 mt-3"
        >
          {zikir}
        </button>

        <button
          onClick={() => {
            setNum(0);
            setTotalNum(0);
            setZikir("Start");
            setWord("سُـبْحانَ الله");
          }}
          class="mb-3 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full space-y-20"
        >
          Reset
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
}

export default App;
