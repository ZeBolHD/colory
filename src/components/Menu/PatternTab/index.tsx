import { TabsContent } from "@/components/ui/tabs";
import { CardContent } from "@/components/ui/card";

import PatternSelect from "./PatternSelect";

const PatternTab = () => {
  return (
    <TabsContent value="pattern">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-5">
          <PatternSelect />
        </div>
      </CardContent>
    </TabsContent>
  );
};

export default PatternTab;
