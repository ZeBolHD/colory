import { TabsContent } from "@/components/ui/tabs";
import { CardContent } from "@/components/ui/card";

import PatternSelect from "./PatternSelect";
import BlurRange from "./BlurRange";
import ZoomRange from "./ZoomRange";

const PatternTab = () => {
  return (
    <TabsContent value="pattern">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-5">
          <PatternSelect />
          <ZoomRange />
          <BlurRange />
        </div>
      </CardContent>
    </TabsContent>
  );
};

export default PatternTab;
