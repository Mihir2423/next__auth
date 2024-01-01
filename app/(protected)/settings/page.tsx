import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
type Props = {};

const SettingsPage = async (props: Props) => {
  const session = await auth();
  return (
    <div className="p-6 flex space-y-6 items-center justify-center flex-col">
      <pre>{JSON.stringify(session)}</pre>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit" size="lg">
          Sign Out
        </Button>
      </form>
    </div>
  );
};

export default SettingsPage;
