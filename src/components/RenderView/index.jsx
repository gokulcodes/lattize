import { useContext } from "react";
import lattizeContext from "../../controller/lattizeContext";
import DOM from "../DOM";
import System from "../System";

export default function RenderView() {
  const { activeTab } = useContext(lattizeContext);

  if (activeTab === 0) {
    return <DOM />;
  }

  if (activeTab === 2) {
    return <System />;
  }

  return <div>RenderView</div>;
}
