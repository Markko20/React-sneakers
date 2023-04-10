function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="img/logo.png" alt="" />
        <div className="headerInfo ml-10">
          <h3 className="text-uppercase">react sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className="align-center d-flex">
        <li className="mr-30 d-flex align-center">
          <img
            className="mr-10"
            width={18}
            height={18}
            src="img/cart.svg"
            alt=""
          />
          <span>1205 руб</span>
        </li>
        <li>
          <img src="img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
}

export default Header