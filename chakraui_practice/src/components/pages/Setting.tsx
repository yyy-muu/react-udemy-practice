import { memo, VFC } from "react";
import { Header } from "../organism/layout/Header";

export const Setting: VFC = memo(() => {
  return (
    <>
      <Header />
      <p>Setting</p>
    </>
  );
});
