import React from "react";

function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-400",
    green: "border-green-400",
    red: "border-red-400",
    yellow: "border-yellow-300 text-yellow-200",
    gray: "border-gray-300",
  };

  return (
    <div
      className={`p-6 rounded-2xl bg-white/5 border shadow-lg backdrop-blur-xl hover:bg-white/10 transition-all ${colorClasses[color]}`}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-3 text-amber-300 tracking-wide">
          {title}
        </h3>
      )}
      <div className="space-y-2 text-gray-200">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
}

const ChildrenProps = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-purple-300">Children Props</h2>
      <p className="text-gray-300">
        Children props allow components to wrap and display nested elements,
        giving flexibility for layout and UI design.
      </p>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-amber-200">
          Card Component With Children
        </h3>

        <Container layout="grid">
          <Card title="User Profile" color="green">
            <p>
              <strong className="text-white">Name:</strong> Satyam Singh
            </p>
            <p>
              <strong className="text-white">Email:</strong> satyam@gmail.com
            </p>
            <p>
              <strong className="text-white">Role:</strong> Developer
            </p>
          </Card>

          <Card title="Product Info" color="blue">
            <p>
              <strong className="text-white">Product:</strong> Laptop MSI GF63
            </p>
            <p>
              <strong className="text-white">Price:</strong> ₹58,999
            </p>
          </Card>

          <Card title="Warning Notice" color="yellow">
            <p>
              This is an important system alert. Please check your recent
              activity.
            </p>
          </Card>
        </Container>
      </div>
    </section>
  );
};

export default ChildrenProps;
