import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListCards from "./list-cards";
import { useEffect, useState } from "react";
import { enData } from "@/lib/data.en";
import { esData } from "@/lib/data.es";
import type { Status } from "@/lib/types";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

export function TabsCatsAndDogs() {
  const status = window.location.pathname === "/en" ? enData as Status[] : esData as Status[];
  const [filteredStatus, setFilteredStatus] = useState(status);

  const searchStatus = (value: string) => {
    const filteredStatus = status.filter((item) => {
      const searchValue = value.toLocaleLowerCase();
      return (
        item.name.toLocaleLowerCase().startsWith(searchValue) ||
        item.status.toString().startsWith(searchValue)
      );
    });
    setFilteredStatus(filteredStatus);
  };

  return (
    <Tabs defaultValue="Cats" className="max-w-[75rem]">
      <div>
        <h3 className="text-center font-bold text-xl mb-3">Busca o filtra por perro o gato el estado HTTP.</h3>
      </div>
      <div className="w-[50%] flex relative mx-auto mb-6">
        <Input
          type="text"
          placeholder="Search your http error"
          className="pr-[38px] border border-gray-200 rounded-lg"
          onChange={({ target }) => searchStatus(target.value)}
        />
        <Search
          className="size-[18px] absolute right-[10px] text-gray-400/90 dark:text-gray-400/30 bottom-[11px]"
        />
      </div>
      <TabsList className="w-[35%] grid grid-cols-2 mx-auto mb-10">
        <TabsTrigger value="Cats">Cats</TabsTrigger>
        <TabsTrigger value="Dogs">Dogs</TabsTrigger>
      </TabsList>

      <TabsContent value="Cats">
        <ListCards value="cats" status={filteredStatus} />
      </TabsContent>
      <TabsContent value="Dogs">
        <ListCards value="dogs" status={filteredStatus} />
      </TabsContent>
    </Tabs>
  );
}
