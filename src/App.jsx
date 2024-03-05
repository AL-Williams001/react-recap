import "./App.scss";
import Button from "./components/Button";
import Homepage from "./components/Homepage";
import User from "./components/User";

function App() {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Carrot", id: 2 },
    { title: "Cucumber", id: 3 },
    { title: "Potato", id: 4 },
    { title: "Tomato", id: 5 },
  ];

  return (
    <div>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
      <User />
      <Button />
      <Homepage isLoggedIn={false} />
    </div>
  );
}

export default App;
