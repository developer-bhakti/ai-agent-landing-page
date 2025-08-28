import FlowBuilder from "../overview/FlowBuilder"
import LiveAgentFeed from "../overview/LiveAgentFeed"
import Activity from "../agent/Activity"

const Agents = () => {
  return (
    <div>
     <Activity />
      <LiveAgentFeed/>
      <FlowBuilder/>
    </div>
  )
}

export default Agents