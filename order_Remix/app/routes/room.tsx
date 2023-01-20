import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { getRoom, updateRoom } from "~/models/room.server";

export const loader = async () => {
  const room = await getRoom();
  return json({ room });
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const name = (formData.get("name") as string) ?? "";
  const user = (formData.get("user") as string) ?? "";

  const room = await updateRoom({ name, user });

  return room;
};

export default function Rooms() {
  const { room } = useLoaderData<typeof loader>();
  return (
    <main className="p-20">
      <Form method="post" className="flex items-center justify-center">
        <div className=" max-w-sm space-y-2">
          <div className="grid grid-cols-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={room?.name}
              className="border p-2 focus:outline"
            />
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="user">User</label>
            <input
              type="text"
              name="user"
              id="user"
              defaultValue={room?.user}
              className="border p-2 focus:outline"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" border bg-blue-500 p-2 text-white hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </div>
      </Form>
    </main>
  );
}
