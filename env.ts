import z from "zod";

const envSvhema = z.object({
    NODE_ENV: z.enum(['development', 'production']).default('production'),
    PORT: z.string().default('3000'),
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
});

export const ENV = envSvhema.parse(process.env);
