import { Card } from "../../Card";
import data from "./ReactProjects.json";
import miniProjects from "./ReactMiniProjects.json";
export const ReactProjects = () => {
  const title = "React Projects";
  const title2 = "React Mini Projects";
  return (
    <div>
      <Card title={title} data={data} />
      <Card title={title2} data={miniProjects} />
    </div>
  );
};
