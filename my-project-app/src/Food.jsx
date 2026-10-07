import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
function Food() {
  const food1 = "Pizza";
  const food2 = "Burger";
  const food3 = "Pasta";

  return (
    <div className="Box">
      <div>
        <ul>
          <li>
            <img src={img1} alt="Pizza" width="200" />
            {food1}
          </li>
          <li>
            <img src={img2} alt="Burger" width="200" />
            {food2}
          </li>
          <li>
            <img src={img3} alt="Pasta" width="200" />
            {food3}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Food;
