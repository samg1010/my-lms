<div className="flex justify-between items-center mb-10">
  <h1 className="text-4xl font-bold">
    Welcome back, {user?.firstName || 'there'}!
  </h1>
  <div className="flex gap-4">
    <Link href="/courses" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
      Browse Bible Courses
    </Link>
    <UserDashboard />
  </div>
</div>