import { useMutation } from "react-query";
import { signUp } from "queries/auth";

export const useSignUp = (options) => {
  const signUpMutation = useMutation(signUp, options);

  return signUpMutation;
};
