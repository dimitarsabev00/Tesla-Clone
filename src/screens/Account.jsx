import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const Account = () => {
  const currentUser = useSelector(({ generalSlice }) => generalSlice.user);

  return (
    <div className="teslaAccount">
      <Header />
      <div className="flex justify-between items-center py-[60px] px-[140px] pb-[30px]">
        <div className="teslaAccount__person">
          <h4 className="font-medium text-xl capitalize">
            {currentUser?.displayName + "'s"} Account
          </h4>
        </div>
      </div>
      <div className="grid place-items-center gap-[30px] pb-[40px]">
        Here is buying history !!!
      </div>
    </div>
  );
};

export default Account;
