import {api} from "../../api/apiSlice";
///api for product operation
export const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (data) => ({
        url: `/categories`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["categories"],
    }),

    getAllCategory: builder.query({
      query: () => ({
        url: `/categories`,
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["categories"],
    }),
    updateCategory: builder.mutation({
      query: ({id, data}) => ({
        url: `/categories/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["categories"],
    }),
  }),
});

export const {useAddCategoryMutation, useGetAllCategoryQuery, useUpdateCategoryMutation, useDeleteCategoryMutation} = categoryApi;
