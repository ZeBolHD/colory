import { TabsContent } from "@/components/ui/tabs";
import { CardContent } from "@/components/ui/card";

import PatternSelect from "./PatternSelect";
import BlurRange from "./BlurRange";
import ZoomRange from "./ZoomRange";
import OpacityRange from "./OpacityRange";
import MaskToggle from "./MakToggle";

const PatternTab = () => {
  return (
    <TabsContent value="pattern">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-10">
          <PatternSelect />
          <ZoomRange />
          <BlurRange />
          <OpacityRange />
          <MaskToggle />
        </div>
      </CardContent>
    </TabsContent>
  );
};

export default PatternTab;
