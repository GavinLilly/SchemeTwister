export const numPlayers = [1, 2, 3, 4, 5] as const;
export type NumPlayers = typeof numPlayers[number];
