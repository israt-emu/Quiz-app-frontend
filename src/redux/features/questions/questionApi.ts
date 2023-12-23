import {api} from "../../api/apiSlice";
///api for product operation
export const questionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => ({
        url: `/questions`,
        method: "GET",
      }),
      providesTags: ["questions"],
    }),

    getSingleQuestion: builder.query({
      query: (id) => ({
        url: `/questions/${id}`,
        method: "GET",
        // body: data,
      }),
      providesTags: ["question"],
    }),
    getQuestionByQuiz: builder.query({
      query: (quizId) => ({
        url: `/questions/quiz/${quizId}`,
        method: "GET",
        // body: data,
      }),
      providesTags: ["quizquestion"],
    }),
    getQuestionByCategory: builder.query({
      query: (id) => ({
        url: `/questions/category/${id}`,
        method: "GET",
        // body: data,
      }),
      //   providesTags: ["question"],
    }),

    updateQuestion: builder.mutation({
      query: ({id, data}) => ({
        url: `/questions/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Quizzes", "questions", "quizquestion"],
    }),

    deleteQuestion: builder.mutation({
      query: (id) => ({
        url: `/questions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Quizzes", "questions", "quizquestion"],
    }),

    addQuestions: builder.mutation({
      query: (data) => ({
        url: `/questions`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Quizzes", "questions", "quizquestion"],
    }),
    //options
    addOptions: builder.mutation({
      query: (data) => ({
        url: `/options`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Quizzes", "questions", "quizquestion"],
    }),
    getOptionsByQuestion: builder.query({
      query: (id) => ({
        url: `/options/question/${id}`,
        method: "GET",
        // body: data,
      }),
      //   providesTags: ["quizquestion"],
    }),
    deleteOption: builder.mutation({
      query: (id) => ({
        url: `/options/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Quizzes", "questions", "quizquestion"],
    }),
    updateOption: builder.mutation({
      query: ({id, data}) => ({
        url: `/options/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Quizzes", "questions", "quizquestion"],
    }),
    //answers
    addAnswer: builder.mutation({
      query: (data) => ({
        url: `/answers`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Quizzes", "questions", "quizquestion"],
    }),
    getAnsweByQuestion: builder.query({
      query: (id) => ({
        url: `/answers/question/${id}`,
        method: "GET",
        // body: data,
      }),
      //   providesTags: ["quizquestion"],
    }),
    deleteAnswer: builder.mutation({
      query: (id) => ({
        url: `/answers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Quizzes", "questions", "quizquestion"],
    }),
    updateAnswer: builder.mutation({
      query: ({id, data}) => ({
        url: `/answers/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Quizzes", "questions", "quizquestion"],
    }),
  }),
});

export const {
  useAddAnswerMutation,
  useGetAnsweByQuestionQuery,
  useUpdateAnswerMutation,
  useDeleteAnswerMutation,
  useAddOptionsMutation,
  useDeleteOptionMutation,
  useUpdateOptionMutation,
  useGetOptionsByQuestionQuery,
  useGetQuestionByCategoryQuery,
  useGetQuestionByQuizQuery,
  useGetQuestionsQuery,
  useAddQuestionsMutation,
  useUpdateQuestionMutation,
  useDeleteQuestionMutation,
  useGetSingleQuestionQuery,
} = questionApi;
