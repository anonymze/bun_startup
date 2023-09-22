import z from "zod";

const envSvhema = z.object({
    // GENERAL
    NODE_ENV: z.enum(['development', 'production']).default('production'),
    PORT: z.string().default('3000'),
    // DISCORD
    DISCORD_TOKEN: z.string({
        required_error: "ENV Token DISCORD (application dev portal) is required",
    }).nonempty({
        message: "ENV Token DISCORD (application) is empty",
    }),
  DISCORD_APPLICATION_ID: z
    .string({
      required_error: "ENV application/client ID (application dev portal) is required",
    })
    .nonempty({
      message: "ENV application/client ID (application dev portal) is empty",
    }),
  DISCORD_SERVER_ID: z
    .string({
      required_error: "ENV server DISCORD ID is required",
    })
    .nonempty({
      message: "ENV server DISCORD ID is empty",
    }),
    DISCORD_CHANNEL_ID: z
    .string({
      required_error: "ENV channel DISCORD ID is required",
    })
    .nonempty({
      message: "ENV channel DISCORD ID is empty",
    }),
    // DATABASE
    DATABASE_TYPE: z.enum(['postgres', 'mysql', 'mongodb']).default('postgres'),
    DATABASE_HOST: z.string({
        required_error: "ENV URL DB is required",
    }).nonempty({
        message: "ENV URL DB is empty",
    }),
    DATABASE_NAME: z.string({
        required_error: "ENV Name DB is required",
    }).nonempty({
        message: "ENV Name DB is empty",
    }),
    DATABASE_USER: z.string({
        required_error: "ENV User DB is required",
    }).nonempty({
        message: "ENV User DB is empty",
    }),
    DATABASE_PASSWORD: z.string({
        required_error: "ENV Password DB is required",
    }).nonempty({
        message: "ENV Password DB is empty",
    }),
    DATABASE_PORT: z.string({
        required_error: "ENV Port DB is required",
    }).nonempty({
        message: "ENV Port DB is empty",
    }), 
    DATABASE_STRING: z.string(),
});

export const ENV = envSvhema.parse(process.env);
