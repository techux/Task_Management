export declare const signupService: (data: {
    name: string;
    email: string;
    password: string;
}) => Promise<import("mongoose").Document<unknown, {}, import("../interfaces/user.interface").IUser, {}, {}> & import("../interfaces/user.interface").IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const loginService: (data: {
    email: string;
    password: string;
}) => Promise<{
    user: import("mongoose").Document<unknown, {}, import("../interfaces/user.interface").IUser, {}, {}> & import("../interfaces/user.interface").IUser & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    };
    token: string;
}>;
export declare const getMeService: (userId: string) => Promise<import("mongoose").Document<unknown, {}, import("../interfaces/user.interface").IUser, {}, {}> & import("../interfaces/user.interface").IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const updateProfileService: (userId: string, data: {
    name?: string;
}) => Promise<import("mongoose").Document<unknown, {}, import("../interfaces/user.interface").IUser, {}, {}> & import("../interfaces/user.interface").IUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
export declare const listUsersService: (query: any) => Promise<{
    users: (import("mongoose").FlattenMaps<import("../interfaces/user.interface").IUser> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[];
    pagination: {
        total: number;
        page: any;
        limit: any;
        totalPages: number;
        hasNextPage: boolean;
    };
}>;
//# sourceMappingURL=user.service.d.ts.map