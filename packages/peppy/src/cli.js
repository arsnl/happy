import { Command } from "commander";
import { cyan, red } from "kleur";
import packageInfo from "../package.json";
import { makeAddCommand } from "./commands/add";
import { makeInstallCommand } from "./commands/install";
import { makePrettierExtensionsCommand } from "./commands/prettier-extensions";
import { logger } from "./helpers/logger";

const run = async () => {
  const program = new Command();

  program
    .version(packageInfo.version)
    .addCommand(await makeInstallCommand())
    .addCommand(await makeAddCommand())
    .addCommand(await makePrettierExtensionsCommand());

  await program.parseAsync(process.argv);
};

run().catch(async (error) => {
  logger.log();
  if (error.command) {
    logger.error(`  ${cyan(error.command)} has failed.`);
  } else {
    logger.error(red("Unexpected error. Please report it as a bug:"));
    logger.error(error);
  }

  logger.log();

  process.exit(1);
});
