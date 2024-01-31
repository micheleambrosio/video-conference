"use client";

import * as Tabs from "@radix-ui/react-tabs";
import MeetForm from "./MeetForm";

export default function MeetingFormTabs() {
  return (
    <section className="w-4/6 h-full flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-5 font-bold text-gray-800 lowercase">
        <div className="text-3xl text-center">💬</div>
        Talk to Me
      </h1>
      <Tabs.Root
        defaultValue="join-meet"
        className="flex w-3/6 flex-col bg-white rounded-xl shadow-sm"
      >
        <Tabs.List
          aria-label="Join an existing meet or create one"
          className="flex flex-shrink-0 border-b"
        >
          <Tabs.Trigger
            value="join-meet"
            className="p-5 flex-1 flex items-center justify-center text-gray-800 data-[state=active]:text-purple-700 hover:text-purple-500 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current"
          >
            Join
          </Tabs.Trigger>
          <Tabs.Trigger
            value="new-meet"
            className="p-5 flex-1 flex items-center justify-center text-gray-800 data-[state=active]:text-purple-700 hover:text-stone-500 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current"
          >
            New Meeting
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="join-meet" className="p-5">
          <MeetForm type="join-meet" />
        </Tabs.Content>
        <Tabs.Content value="new-meet" className="p-5">
          <MeetForm type="create-meet" />
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
}
