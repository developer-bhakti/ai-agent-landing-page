const FlowBuilder = () => {
  return (
    <div className="border border-gray-300 rounded-md p-4">
      <div className="flex gap-8 mb-4">
        <p className="font-medium">Flow Builder</p>
        <p className="font-medium">Run History</p>
        <p className="font-medium">Metrics</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded">Trigger</div>
        <span className="text-gray-400">→</span>
        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded">Action</div>
        <span className="text-gray-400">→</span>
        <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded">Condition</div>
        <span className="text-gray-400">→</span>
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded">End</div>
      </div>
    </div>
  );
};

export default FlowBuilder;
