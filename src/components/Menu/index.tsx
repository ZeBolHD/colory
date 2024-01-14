import { Card } from "../ui/card";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import AnimationTab from "./AnimationTab";
import ColorsTab from "./ColorsTab";
import PatternTab from "./PatternTab";

const Menu = () => {
  return (
    <div className={`w-[600px] m-auto mb-10`}>
      <Tabs className="w-full" defaultValue="pattern">
        <TabsList className="w-full justify-between mt-2 relative h-10">
          <TabsTrigger value="pattern">Pattern</TabsTrigger>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="animation">Animation</TabsTrigger>
        </TabsList>
        <Card className="mt-2  min-h-[300px] border-[1px] border-zinc-500 shadow-lg">
          <PatternTab />
          <ColorsTab />
          <AnimationTab />
        </Card>
      </Tabs>
    </div>
  );
};

export default Menu;
