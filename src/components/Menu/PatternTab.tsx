import { useSelector } from "react-redux";
import { CardContent, CardFooter, CardHeader } from "../ui/card";
import { TabsContent } from "../ui/tabs";
import { selectPattern } from "@/redux/selectors";

const PatternTab = () => {
  const { pattern } = useSelector(selectPattern);

  return (
    <TabsContent value="pattern">
      <CardHeader>
        <h2>{pattern}</h2>
      </CardHeader>
      <CardContent>
        <p>Coming soon...</p>
      </CardContent>
      <CardFooter>
        <p>Coming soon...</p>
      </CardFooter>
    </TabsContent>
  );
};

export default PatternTab;
