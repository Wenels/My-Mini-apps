"use client";

import { useState } from "react";
import RainbowWrapper from "@/app/features/Rainbowrapper/RainbowWrapper";

export default function RainbowPage() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      {display && (
        <RainbowWrapper opacity={500}>
          <div>I am rainbow!</div>
        </RainbowWrapper>
      )}
      <button type="button" onClick={() => setDisplay((prev) => !prev)}>
        Toggle
      </button>
    </>
  );
}