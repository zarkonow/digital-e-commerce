import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserListing from "./_components/UserListing";

function Dashboard() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <Tabs defaultValue="listing" className=" mt-10">
        <TabsList>
          <TabsTrigger value="listing">Listing</TabsTrigger>
          <TabsTrigger value="purchase">Purchase</TabsTrigger>
        </TabsList>
        <TabsContent value="listing">
          <UserListing/>
        </TabsContent>
        <TabsContent value="purchase">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default Dashboard;
