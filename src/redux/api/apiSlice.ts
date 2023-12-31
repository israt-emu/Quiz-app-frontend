import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {RootState} from "../store";
//base for all api
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as RootState).auth.user.token;

      if (token) {
        headers.set("authorization", token);
      }

      return headers;
    },
  }),
  tagTypes: ["questions", "quizquestion", "question", "answers", "options", "categories", "sessions", "users", "user", "Quizzes", "quiz"],
  endpoints: () => ({}),
});
