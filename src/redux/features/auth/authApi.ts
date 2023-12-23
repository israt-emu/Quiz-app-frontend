import {api} from "../../api/apiSlice";
import {userLoggedIn} from "./authSlice";
//user authentication api's
export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/signin",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, {queryFulfilled, dispatch}) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              token: result?.data?.token,
            })
          );
          dispatch(
            userLoggedIn({
              token: result?.data?.token,
            })
          );
        } catch (err) {
          //nothing to do
          console.log(err);
        }
      },
    }),

    signUp: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useLoginMutation, useSignUpMutation} = authApi;
