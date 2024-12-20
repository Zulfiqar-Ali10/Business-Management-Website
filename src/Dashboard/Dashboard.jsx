

export default function Dashboard() {
  return (
    <>

    <main className="ml-64 pt-16">
  <div className="p-6">
    {/* Page Header */}
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
      <p className="mt-1 text-sm text-gray-600">
        Welcome back! Here whats happening with your projects today.
      </p>
    </div>
    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {/* Stat Card 1 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
          <span className="text-green-500 bg-green-50 text-xs font-medium px-2.5 py-0.5 rounded-full">
            +14%
          </span>
        </div>
        <p className="text-2xl font-bold text-gray-900">$45,231</p>
        <p className="text-sm text-gray-600 mt-1">
          Compared to $39,452 last month
        </p>
      </div>
      {/* Stat Card 2 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-500">Active Projects</h3>
          <span className="text-blue-500 bg-blue-50 text-xs font-medium px-2.5 py-0.5 rounded-full">
            +7
          </span>
        </div>
        <p className="text-2xl font-bold text-gray-900">34</p>
        <p className="text-sm text-gray-600 mt-1">Across 12 different teams</p>
      </div>
      {/* Stat Card 3 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-500">Team Members</h3>
          <span className="text-purple-500 bg-purple-50 text-xs font-medium px-2.5 py-0.5 rounded-full">
            +12
          </span>
        </div>
        <p className="text-2xl font-bold text-gray-900">245</p>
        <p className="text-sm text-gray-600 mt-1">Active members this month</p>
      </div>
      {/* Stat Card 4 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-500">Tasks Completed</h3>
          <span className="text-yellow-500 bg-yellow-50 text-xs font-medium px-2.5 py-0.5 rounded-full">
            89%
          </span>
        </div>
        <p className="text-2xl font-bold text-gray-900">892</p>
        <p className="text-sm text-gray-600 mt-1">Out of 1,003 total tasks</p>
      </div>
    </div>
    {/* Recent Activity */}
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {/* Activity Item 1 */}
          <div className="flex items-start space-x-4">
            <img
              src="https://ui-avatars.com/api/?name=Alex+Smith"
              alt="Alex Smith"
              className="w-10 h-10 rounded-xl"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                Alex Smith completed the Dashboard Design task
              </p>
              <p className="text-sm text-gray-500">2 hours ago • Design Team</p>
            </div>
          </div>
          {/* Activity Item 2 */}
          <div className="flex items-start space-x-4">
            <img
              src="https://ui-avatars.com/api/?name=Sarah+Johnson"
              alt="Sarah Johnson"
              className="w-10 h-10 rounded-xl"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                Sarah Johnson added 4 new tasks to Project Alpha
              </p>
              <p className="text-sm text-gray-500">
                5 hours ago • Development Team
              </p>
            </div>
          </div>
          {/* Activity Item 3 */}
          <div className="flex items-start space-x-4">
            <img
              src="https://ui-avatars.com/api/?name=Mike+Wilson"
              alt="Mike Wilson"
              className="w-10 h-10 rounded-xl"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                Mike Wilson commented on the API documentation
              </p>
              <p className="text-sm text-gray-500">
                8 hours ago • Backend Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    </>
  )
}
