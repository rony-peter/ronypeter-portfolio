"use client";

import { useState, useEffect } from "react";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Loader from "@/components/animations/Loader";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "unset";
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}
      <SmoothScroll>{children}</SmoothScroll>
    </>
  );
}
