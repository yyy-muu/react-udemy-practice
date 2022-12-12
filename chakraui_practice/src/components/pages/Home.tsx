import { memo, VFC } from "react";
import { Header } from "../organism/layout/Header";

export const Home: VFC = memo(() => {
  return (
    <>
      <Header />
      <p>Home</p>
    </>
  );
});
