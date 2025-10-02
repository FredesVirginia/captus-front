export const RoleUser = {
    ADMIN: "admin",
    USER : "user"
} as const;

export type RoleUser = typeof RoleUser[keyof typeof RoleUser];

