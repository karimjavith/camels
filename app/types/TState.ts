export type TAppState = {
  version: string;
};

export type TAuthState = {
  userContext: {
    userId: number | null;
    isLoggedIn: boolean;
    token: string;
    invited: boolean;
  };
};
