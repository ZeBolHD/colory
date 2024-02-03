import { CardContent } from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import SelectedColors from "./SelectedColors";
import Colors from "./Colors";
import RandomizeButton from "./RandomizeButton";

const ColorsTab = () => {
  return (
    <TabsContent value="colors" className="h-full">
      <CardContent className="p-6 h-full">
        <div className="flex justify-between h-fit items-center">
          <SelectedColors />
          <RandomizeButton />
        </div>
        <div>
          <Colors />
        </div>
      </CardContent>
    </TabsContent>
  );
};

export default ColorsTab;
