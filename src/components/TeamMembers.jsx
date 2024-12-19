import { teamMembers } from "../constant/data";

import MeetTheTeam from "./MeetTheTeam";

const TeamMembers = () => {
  return (
    <>
      <div className="grid  md:grid-cols-2 xl:grid-cols-4 gap-5  ">
        {teamMembers.map((team) => {
          return (<MeetTheTeam key={team.name} {...team} />);
        
        })}
      </div>
    </>
  );
};
export default TeamMembers;
