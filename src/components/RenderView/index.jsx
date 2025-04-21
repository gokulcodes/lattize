import { useContext } from "react";
import lattizeContext from "../../controller/lattizeContext";
import DOM from "../DOM";
import System from "../System";
import Network from "../Network";
import SEO from "../SEO";

export default function RenderView() {
  const { activeTab } = useContext(lattizeContext);

  if (activeTab === 0) {
    return <DOM />;
  }

  if (activeTab === 1) {
    return <Network />;
  }

  if (activeTab === 2) {
    return <System />;
  }

  if (activeTab === 3) {
    return <SEO />;
  }

  return <div>RenderView</div>;
}
