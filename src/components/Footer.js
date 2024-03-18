import "../styles/footer.css";
export const Footer = (props) => {
  const handleMenu = (value) => {
    props.handleMenu(value);
  };
  return (
    <>
      <footer className="footer">
        <div className="footer-menu-wrapper">
          <div className="footer-menu">
            <div className="menu" onClick={() => handleMenu("cat")}>
              <img className="union-3" alt="Union" src="/img/union-3.svg" />
            </div>
            <div className="history-menu" onClick={() => handleMenu("history")}>
              <img className="img-2" alt="Path" src="/img/path-14.svg" />
            </div>
            <div className="scan" onClick={() => handleMenu("cat")}>
              <img
                className="img-2"
                alt="Vector stroke"
                src="/img/vector-stroke.svg"
              />
            </div>
            <div className="home" onClick={() => handleMenu("home")}>
              <img className="path" alt="Path" src="/img/path-13.svg" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
