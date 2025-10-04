export const RoleUser = {
    ADMIN: "ADMIN",
    USER : "USER"
} as const;

export type RoleUser = typeof RoleUser[keyof typeof RoleUser];

