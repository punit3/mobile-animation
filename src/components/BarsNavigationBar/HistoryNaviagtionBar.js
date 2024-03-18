
export const HistoryNaviagtionBar = ({ className, text = "Bank Cards" }) => {
    return (
      <div className={`bars-navigation-bar ${className}`}>
        <div className="large-title">{text}</div>
        <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/icPYuxia/img/ellipse-1-1@2x.png" />
      </div>
    );
  };