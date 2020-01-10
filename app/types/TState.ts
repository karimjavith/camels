export type TAppState = {
  version: string;
};

export type TAuthState = {
  userContext: {
    userId: number | null;
    token: string;
    invited: boolean;
    role: number;
  };
};
