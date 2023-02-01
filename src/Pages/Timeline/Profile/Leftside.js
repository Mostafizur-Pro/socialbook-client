import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Leftside = () => {
  const [datas, setDatas] = useState("");
  useEffect(() => {
    fetch("settingsName.json")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      });
  }, []);
  console.log(datas);
  return (
    <div>
      <section className="">
        {datas?.length}
        <div className="my-2 w-full text-left">
          {datas?.map((data) => (
            <Link to={`/changepassword/${data.name}`} key={data._id}>
              {data.category}
              <hr className="mt-2"></hr>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Leftside;
