import LiveAgentFeed from "./LiveAgentFeed";
import FlowBuilder from "./FlowBuilder";
import Activity from "./activity";

const Overview = () => {
  return (
    <>
      <Activity />
      <LiveAgentFeed />
      <FlowBuilder />
    </>
  );
};

export default Overview;
