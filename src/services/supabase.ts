// import { SupabaseClient, PostgrestResponse } from "@supabase/supabase-js";
// import { Database as SupabaseDB } from "@/types/supabase";
// type Orders = SupabaseDB["public"]["Tables"]["orders"]["Row"];

// type FilterCriteria = Record<string, any>;

// interface Order {
//   field: string;
//   ascending: boolean;
// }

// export interface SupabaseError {
//   message: string;
//   status: number;
//   errors?: string[];
// }

// export const supabaseEdge = (supabase: SupabaseClient) => {
//   const callEdgeFunction = async <T>(
//     functionName: string,
//     payload?: object,
//     orderId?: string,
//     product?: string
//   ): Promise<T> => {
//     try {
//       let response: { data: any; error: any } = undefined;
//       if (orderId) {
//         response = await supabase
//           .from("orders")
//           .select("*")
//           .eq("id", orderId)
//           .single()
//           .then(async (order) => {
//             if (order.data) {
//               return await supabase.functions.invoke(functionName, {
//                 ...payload,
//                 headers: {
//                   "organisation-id": order.data["organisation_id"],
//                   "merchant-id": order.data["linked_merchant"],
//                 },
//               });
//             }
//           });
//       } else {
//         response = await supabase
//           .from("organisation_products")
//           .select(`organisation(organisation_id)`)
//           .eq("id", product)
//           .single()
//           .then(async (response) => {
//             console.log(response.data.organisation["organisation_id"]);
//             return await supabase.functions.invoke(functionName, {
//               ...payload,
//               headers: {
//                 "organisation-id":
//                   response.data.organisation["organisation_id"],
//               },
//             });
//           });
//       }

//       if (response.error) {
//         console.log(response.error);
//         const supabaseError: SupabaseError = {
//           message:
//             JSON.stringify(response) ||
//             "An error occurred while calling the edge function.",
//           status: response.error.status || 500,
//           errors: response.error.errors || undefined,
//         };
//         throw supabaseError;
//       }
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       const supabaseError: SupabaseError = {
//         message:
//           error.message || "An error occurred while calling the edge function.",
//         status: error.status || 500,
//       };
//       throw supabaseError;
//     }
//   };

//   const selectByFieldPostgrest = async <T>(
//     table: string,
//     field: string,
//     key: string
//   ): Promise<T> => {
//     try {
//       const response: PostgrestResponse<T> = await supabase
//         .from(table)
//         .select()
//         .eq(field, key);
//       if (response.error) {
//         const supabaseError: SupabaseError = {
//           message:
//             response.error.message ||
//             "An error occurred while calling the Postgrest endpoint.",
//           status: response.status || 500,
//           errors: getErrorDetails(response.error),
//         };
//         throw supabaseError;
//       }
//       if (Array.isArray(response.data) && response.data.length === 1) {
//         return response.data[0];
//       }

//       return response.data as T;
//     } catch (error) {
//       const supabaseError: SupabaseError = {
//         message:
//           error.message ||
//           "An error occurred while calling the Postgrest endpoint.",
//         status: error.status || 500,
//       };
//       throw supabaseError;
//     }
//   };

//   const updateFieldPostgrest = async <T>(
//     table: string,
//     key: string,
//     field: string,
//     payload?: object
//   ): Promise<T> => {
//     try {
//       const response: PostgrestResponse<T> = await supabase
//         .from(table)
//         .update(payload)
//         .eq(field, key)
//         .select()
//         .single();
//       if (response.error) {
//         const supabaseError: SupabaseError = {
//           message:
//             response.error.message ||
//             "An error occurred while calling the Postgrest endpoint.",
//           status: response.status || 500,
//           errors: getErrorDetails(response.error),
//         };
//         throw supabaseError;
//       }
//       return response.data as T;
//     } catch (error) {
//       const supabaseError: SupabaseError = {
//         message:
//           error.message ||
//           "An error occurred while calling the Postgrest endpoint.",
//         status: error.status || 500,
//       };
//       throw supabaseError;
//     }
//   };

//   const insertPostgrest = async <T>(
//     table: string,
//     payload?: object
//   ): Promise<T> => {
//     try {
//       const response: PostgrestResponse<T> = await supabase
//         .from(table)
//         .insert(payload)
//         .select()
//         .single();
//       if (response.error) {
//         const supabaseError: SupabaseError = {
//           message:
//             response.error.message ||
//             "An error occurred while calling the Postgrest endpoint.",
//           status: response.status || 500,
//           errors: getErrorDetails(response.error),
//         };
//         throw supabaseError;
//       }
//       return response.data as T;
//     } catch (error) {
//       const supabaseError: SupabaseError = {
//         message:
//           error.message ||
//           "An error occurred while calling the Postgrest endpoint.",
//         status: error.status || 500,
//       };
//       throw supabaseError;
//     }
//   };

//   const getErrorDetails = (error: any): string[] | undefined => {
//     if (typeof error.details === "string") {
//       return [error.details];
//     }
//     if (Array.isArray(error.details)) {
//       return error.details;
//     }
//     return undefined;
//   };

//   return {
//     callEdgeFunction,
//     selectByFieldPostgrest,
//     updateFieldPostgrest,
//     insertPostgrest,
//   };
// };