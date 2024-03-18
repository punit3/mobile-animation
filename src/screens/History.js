import { HistoryNaviagtionBar } from "../components/BarsNavigationBar/HistoryNaviagtionBar";
import { BankStatusBar } from "../components/BarsStatusBar";
import { DivWrapper } from "../components/BottomSlider.js/DivWrapper";
import { Group } from "../components/BottomSlider.js/Group";
import { GroupWrapper } from "../components/BottomSlider.js/GroupWrapper";
import "../styles/history.css"

export const History = (props) => {
  const handleMenu = (value) => {

    props.handleMenu(value)
  };
  return (
    <>
      <div className="history">
        <div className="div-2">
          <div className="overlap">
            <Group
              className="group-6"
              divClassName="group-instance"
              text="- $43.00"
            />
            <Group
              className="group-5"
              divClassName="group-7"
              groupClassName="design-component-instance-node"
              iconClassName="group-6-instance"
              line="https://c.animaapp.com/icPYuxia/img/vector-2@2x.png"
              lineClassName="group-4"
              text="- $12.00"
              text1="Card to card"
            />
            <footer className="footer">
              <div className="footer-menu-wrapper">
                <div className="footer-menu">
                  <div className="menu" >
                    <img
                      className="union"
                      alt="Union"
                      src="https://c.animaapp.com/icPYuxia/img/union.svg"
                    />
                  </div>
                  <div className="path-wrapper" >
                    <img
                      className="img-2"
                      alt="Path"
                      src="https://c.animaapp.com/icPYuxia/img/path-14.svg"
                    />
                  </div>
                  <div className="scan" onClick={()=>handleMenu("cat")}>
                    <img
                      className="img-2"
                      alt="Vector stroke"
                      src="https://c.animaapp.com/icPYuxia/img/vector--stroke-.svg"
                    />
                  </div>
                  <div className="home" onClick={()=>handleMenu("home")}>
                    <img
                      className="path"
                      alt="Path"
                      src="https://c.animaapp.com/icPYuxia/img/path-13.svg"
                    />
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <GroupWrapper
            className="group-2-instance"
            divClassName="group-8"
            text="+ $1443.00"
          />
          <Group
            className="group-9"
            line="https://c.animaapp.com/icPYuxia/img/line-1-10.svg"
            text="- $467.00"
            text1="Uber"
          />
          <Group
            className="group-10"
            divClassName="group-instance"
            line="https://c.animaapp.com/icPYuxia/img/line-1-10.svg"
            text="- $43.00"
            text1="Uber"
          />
          <Group
            className="group-11"
            divClassName="group-12"
            groupClassName="design-component-instance-node"
            icon={""}
            iconClassName="group-6-instance"
            line="https://c.animaapp.com/icPYuxia/img/line-1-10.svg"
            text="- $2467.00"
            text1="Card to card"
          />
          <div className="text-wrapper-7">20 April</div>
          <div className="text-wrapper-8">12 Mach</div>
          <GroupWrapper className="group-13" text="+ $143.00" />
          <DivWrapper
            className="group-3-instance"
            icon={""}
          />
          <div className="overlap-2">
          <HistoryNaviagtionBar className="design-component-instance-node-2" text="History" />
          <BankStatusBar className="design-component-instance-node-2" />
        </div>
        </div>
      </div>
    </>
  );
};
