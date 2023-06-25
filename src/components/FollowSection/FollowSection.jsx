import "./FollowSection.css";
import { useState } from "react";
import { PlayIcon } from "../../assets/Icons";

export function FollowSection() {
  const [follow, setFollow] = useState(false);

  function handleClick() {
    const newState = !follow;
    setFollow(newState);
  }

  const FollowBtnClassName = `FollowBtn ${
    follow ? "FollowActive" : "FollowDisabled"
  }`;

  return (
    <section className="FollowSection">
      <button className="PlayBtn">
        <PlayIcon />
      </button>
      <button onClick={handleClick} className={FollowBtnClassName}>
        {follow ? "SIGUIENDO" : "SEGUIR"}
      </button>
    </section>
  );
}
