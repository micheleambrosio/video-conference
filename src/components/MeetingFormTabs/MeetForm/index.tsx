"use client";

import * as Form from "@radix-ui/react-form";

interface Props {
  type: "create-meet" | "join-meet";
}

export default function NewMeetForm({ type }: Props) {
  return (
    <Form.Root className="flex flex-col gap-5">
      <Form.Field name="name">
        <div className="flex justify-between">
          <Form.Label className="text-sm text-gray-800 mb-1">
            Your name
          </Form.Label>
          <Form.Message
            match="valueMissing"
            className="text-[13px] text-gray-600 opacity-[0.8]"
          >
            Please enter your name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            type="text"
            required
            className="w-full shadow-gray-300 h-[35px] rounded-[4px] px-[10px] text-[15px] leading-none text-gray-800 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_purple] focus:shadow-[0_0_0_2px_black]"
          />
        </Form.Control>
      </Form.Field>
      {type === "join-meet" && (
        <Form.Field name="id">
          <div className="flex justify-between">
            <Form.Label className="text-sm text-gray-800 mb-1">
              Meeting ID
            </Form.Label>
            <Form.Message
              match="valueMissing"
              className="text-[13px] text-gray-600 opacity-[0.8]"
            >
              Please enter meeting id
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              type="text"
              required
              className="w-full shadow-gray-300 h-[35px] rounded-[4px] px-[10px] text-[15px] leading-none text-gray-800 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_purple] focus:shadow-[0_0_0_2px_black]"
            />
          </Form.Control>
        </Form.Field>
      )}
      <Form.Submit asChild>
        <button className="w-full p-2 bg-purple-700 hover:bg-purple-500 rounded-xl text-white focus:shadow-[0_0_0_2px_black] outline-none">
          {type === "create-meet" ? "Create Meet" : "Join Meet"}
        </button>
      </Form.Submit>
    </Form.Root>
  );
}
