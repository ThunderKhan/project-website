/* Client mockup: deliberately disconnected from the reference artist's database. */
export type BookingRow={date:number|null;month:number|null;year:number|null;day:string|null;venue:string|null;slot:string|null;type:string|null;status:string|null};
export type RemoteReview={name:string|null;review:string|null};
export type Result<T>={ok:true;data:T}|{ok:false};
export async function fetchBookings(_year:number,_months:number[],_signal?:AbortSignal):Promise<Result<BookingRow[]>>{return {ok:true,data:[]}}
export async function fetchBookedDates(_year:number,_month:number,_signal?:AbortSignal):Promise<Result<number[]>>{return {ok:true,data:[]}}
export async function fetchApprovedReviews(_signal?:AbortSignal):Promise<Result<RemoteReview[]>>{return {ok:true,data:[]}}
