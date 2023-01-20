import type { Room } from "~/bff/room";
import { prisma } from "~/db.server";

export async function updateRoom(data: Room): Promise<Room> {
  const room = await prisma.room.update({
    where: { id: "test" },
    data,
  });
  return room;
}

export async function getRoom(): Promise<Room | null> {
  const room = await prisma.room.findFirst({
    where: { id: "test" },
  });
  return room;
}
