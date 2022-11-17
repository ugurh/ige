import fetch from "unfetch";

export const getAllPlayers = () => fetch("/api/players/all");