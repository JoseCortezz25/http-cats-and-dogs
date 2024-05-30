import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListCards from "./list-cards";

export function TabsCatsAndDogs() {
  return (
    <Tabs defaultValue="Cats" className="max-w-[75rem]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Cats">Cats</TabsTrigger>
        <TabsTrigger value="Dogs">Dogs</TabsTrigger>
      </TabsList>
      <TabsContent value="Cats">
        <Card>
          <CardHeader>
            <CardTitle>Learn HTTP codes with funny cat pictures!</CardTitle>
          </CardHeader>
          <CardContent>
            <ListCards value="cats" />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Dogs">
        <Card>
          <CardHeader>
            <CardTitle>Learn HTTP codes with funny dog pictures!</CardTitle>
          </CardHeader>
          <CardContent>
            <ListCards value="dogs" />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
