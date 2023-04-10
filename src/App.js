import Card from "./components/Card";
import Header from "./components/Header.js";
import Drawer from "./components/Drawer.js";

const arr = [
  {
    title: "Мужские кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "./img/sneakers/1.jpg",
  },
  {
    title: "Мужские кроссовки Nike AirMax 270",
    price: 13999,
    imageUrl: "./img/sneakers/2.jpg",
  },
  {
    title: "Мужские кроссовки Blazer Mid Suede",
    price: 8990,
    imageUrl: "./img/sneakers/3.jpg",
  },
  {
    title: "Мужские кроссовки Puma x Aka Boku Future Rider",
    price: 17000,
    imageUrl: "./img/sneakers/4.jpg",
  },
  {
    title: "Мужские кроссовки Nike AirMax 270",
    price: 9000,
    imageUrl: "./img/sneakers/5.jpg",
  },
  {
    title: "Мужские кроссовки Nike Blazer Mid Suede",
    price: 15000,
    imageUrl: "./img/sneakers/6.jpg",
  },
  {
    title: "Мужские кроссовки Nike AirMax 270",
    price: 14000,
    imageUrl: "./img/sneakers/7.jpg",
  },
  {
    title: "Мужские кроссовки Puma x Aka Boku Future Rider",
    price: 13000,
    imageUrl: "./img/sneakers/8.jpg",
  },
  {
    title: "Мужские кроссовки Nike Blazer Mid Suede",
    price: 9000,
    imageUrl: "./img/sneakers/9.jpg",
  },
  {
    title: "Мужские кроссовки Nike AirMax 270",
    price: 10000,
    imageUrl: "./img/sneakers/10.jpg",
  },
  {
    title: "Мужские кроссовки Nike Blazer Mid Suede",
    price: 15000,
    imageUrl: "./img/sneakers/5.jpg",
  },
  {
    title: "Мужские кроссовки Puma x Aka Boku Future Rider",
    price: 12000,
    imageUrl: "./img/sneakers/3.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="serch-block d-flex">
            <img src="img/search.svg" alt="Search" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>
        <div className="content-items d-flex">

          {arr.map((obj) => (
            <Card
              title= {obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
