import Activity from "../overview/activity"
import FlowBuilder from "../overview/FlowBuilder"
import LiveAgentFeed from "../overview/LiveAgentFeed"

const Reports = () => {
  return (
    <div>
      <Activity/>
      <LiveAgentFeed />
      <FlowBuilder />
    </div>
  )
}

export default Reports