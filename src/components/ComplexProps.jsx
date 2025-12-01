import React from "react";

function ProfileCard({ user }) {
  return (
    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-xl hover:bg-white/10 transition-all space-y-3">
      <h3 className="text-xl font-semibold text-amber-300">User Overview</h3>
      <p className="text-lg font-medium text-white">{user.name}</p>
      <p className="text-sm text-gray-300">
        <span className="font-semibold text-purple-300">Role:</span> {user.role}
      </p>
      <p className="text-sm">
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
            user.isOnline
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/50"
              : "bg-gray-500/20 text-gray-300 border border-gray-400/40"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-current" />
          {user.isOnline ? "Online" : "Offline"}
        </span>
      </p>

      <div className="pt-2">
        <h4 className="text-sm font-semibold text-gray-200 mb-1">
          Skills (array prop):
        </h4>
        <div className="flex flex-wrap gap-2">
          {user.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/40"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatsCard({ stats }) {
  return (
    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-xl hover:bg-white/10 transition-all space-y-3">
      <h3 className="text-xl font-semibold text-amber-300">
        Dashboard Stats (array of objects)
      </h3>
      <ul className="space-y-2 text-sm">
        {stats.map((item) => (
          <li
            key={item.label}
            className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2"
          >
            <span className="text-gray-200">{item.label}</span>
            <span className="font-semibold text-white">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ActionButton({ label, onAction }) {
  const handleClick = () => {
    if (onAction) onAction();
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-medium shadow-md hover:shadow-lg transition-all text-sm"
    >
      {label}
    </button>
  );
}

const ComplexProps = () => {
  const user = {
    name: "Satyam Singh",
    role: "Full Stack Developer",
    isOnline: true,
    skills: ["React", "TypeScript", "Tailwind", "Node.js"],
  };

  const stats = [
    { label: "Active Projects", value: 4 },
    { label: "Completed Tasks", value: 128 },
    { label: "Pending Reviews", value: 3 },
  ];

  const handleGreet = () => {
    alert(`Hello, ${user.name}! (function passed as prop)`); // teaching purpose
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-300">
        Complex props let you pass objects, arrays, and even functions to make
        components more powerful and reusable.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProfileCard user={user} />
        <StatsCard stats={stats} />
      </div>

      <div className="mt-4 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h3 className="text-lg font-semibold text-amber-200">
            Function as a Prop
          </h3>
          <p className="text-sm text-gray-300 max-w-xl">
            Below button receives a <code className="text-pink-300">onAction</code>{" "}
            function as a prop. When clicked, it runs that function.
          </p>
        </div>

        <ActionButton label="Greet User (check console)" onAction={handleGreet} />
      </div>
    </div>
  );
};

export default ComplexProps;
