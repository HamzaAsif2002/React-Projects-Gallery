import data from "./JsProjects.json";

import { Card } from "../../Card";

export const JsProjects = () => {
  const title = "JavaScript Projects";
  return (
    <>
      <Card title={title} data={data} />
    </>
  );
};
