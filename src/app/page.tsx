"use client";

import React, { useState } from "react";
import CommonLayout from "./components/CommonLayout"; 
import { encodeAudio } from "./utils/data";

export type props = {
  audio: null | File;
  message: string;
};

const Home: React.FC = () => {
  const [values, setValues] = useState<props>({ audio: null, message: "" });
  
  const submit = async () => {
    const { audio, message } = values;
    if (!audio || !message) return alert("Please fill the given fields");
    encodeAudio(audio, message);
  };

  return (
    <CommonLayout title="audio stegenography">
      <div className="w-full max-w-[1280px] mx-auto  h-[60vh] grid grid-cols-2 items-center gap-x-12">
        <div>
          <label htmlFor="audio" className="labelStyle">
            Select sample audio file*
          </label>
          <input
            type="file"
            className="w-full bg-[#f4f4f4] rounded-lg py-3 px-6"
            accept=".wav"
            onChange={(e) =>
              setValues({ ...values, audio: e.target.files![0] })
            }
          />
          <div className="my-4 w-full flex items-center">
            <div className="w-full border-b-2 border-gray-300"></div>
            <span className="px-8 font-semibold">OR</span>
            <div className="border-b-2 border-gray-300 w-full"></div>
          </div>
          <div className="w-full h-[12rem] bg-[#f4f4f4] rounded-lg"></div>
        </div>
        <div>
          <label htmlFor="audio" className="labelStyle">
            Enter secret message*
          </label>
          <textarea
            name="message"
            rows={10}
            placeholder="Enter your secret message"
            className="w-full rounded-lg p-6  border-gray-600 bg-[#f4f4f4] outline-border_1 "
            onChange={(e) => setValues({ ...values, message: e.target.value })}
          />
        </div>
      </div>
      <div
        className="w-32 py-3 rounded-lg cursor-pointer bg-btnBg text-white mx-auto text-center"
        onClick={submit}
      >
        Encode
      </div>
    </CommonLayout>
  );
};

export default Home;
