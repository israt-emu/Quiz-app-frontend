import {api} from "../../api/apiSlice";
///api for product operation
export const sessionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSingleSession: builder.query({
      query: (id) => ({
        url: `/sessions/${id}`,
        method: "GET",
        // body: data,
      }),
    }),
    getSessionsByPerformer: builder.query({
      query: (id) => ({
        url: `/sessions/performer/${id}`,
        method: "GET",
        // body: data,
      }),
      providesTags: ["sessions"],
    }),

    updateSession: builder.mutation({
      query: ({id, data}) => ({
        url: `/sessions/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["sessions"],
    }),

    deleteSession: builder.mutation({
      query: (id) => ({
        url: `/sessions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["sessions"],
    }),

    addSession: builder.mutation({
      query: (data) => ({
        url: `/sessions`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["sessions"],
    }),
  }),
});

export const {useAddSessionMutation, useDeleteSessionMutation, useUpdateSessionMutation, useGetSessionsByPerformerQuery, useGetSingleSessionQuery} = sessionApi;
