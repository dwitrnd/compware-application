import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constant } from "constants/contants";

export const userAuthApi = createApi({
  //unique string
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${constant.base}/api/users/`,
  }),

  // function that has different fetch method
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: "register",
          method: "POST",
          body: user,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: "login",
          method: "POST",
          body: user,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    sendPasswordResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: "send-user-password-reset-email",
          method: "POST",
          body: user,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    resetPassword: builder.mutation({
      query: ({ actualData, id, token }) => {
        return {
          // url: '/reset-password/:id/:token',
          url: `/reset-password/${id}/${token}`,
          method: "POST",
          body: actualData,
          headers: {
            "Content-Type": "application/json",
          },
        };
      },
    }),
    getLoggedUser: builder.query({
      query: ({ token }) => {
        return {
          // url: '/reset-password/:id/:token',
          url: `/getloggeduserdata`,
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    changeUserPassword: builder.mutation({
      query: ({ token, actualData }) => {
        return {
          url: `/changepassword`,
          method: "POST",
          body: actualData,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

// export generated hooks
export const { useRegisterUserMutation, useLoginUserMutation, useSendPasswordResetEmailMutation, useResetPasswordMutation, useGetLoggedUserQuery, useChangeUserPasswordMutation } = userAuthApi;
