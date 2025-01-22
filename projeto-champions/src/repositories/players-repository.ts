import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import fs from "fs/promises";
import database from "../data/players.json";



export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  const data = await fs.readFile("./src/data/players.json", "utf-8");
  const players: PlayerModel[] = JSON.parse(data);
  return players;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  const players = await findAllPlayers();
  return players.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex((p: PlayerModel) => p.id === id);

  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }

  return false;
};

export const findAndModifyPlayer = async (
  id: number,
  statistics: StatisticsModel
): Promise<PlayerModel> => {
  //find player
  const playerIndex = database.findIndex((player: { id: number; }) => player.id === id);

  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
};
