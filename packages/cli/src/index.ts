#!/usr/bin/env node

import chalk from "chalk";
import { Command } from "commander";
import { exec } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { promisify } from "node:util";

const program = new Command();
const execPromise = promisify(exec);

const componentRegistry = {
  card: { packageName: "snappy/ui/snappy-card" },
  check: { packageName: "snappy/ui/snappy-check" },
  colorfultext: { packageName: "snappy/ui/snappy-colourful-text" },
  skelton: { packageName: "snappy/ui/snappy-skelton" },
  tooltip: { packageName: "snappy/ui/snappy-tooltip" },
};

type ComponentName = keyof typeof componentRegistry;

async function detectPackageManager() {
  if (fs.existsSync(path.resolve(process.cwd(), "pnpm-lock.yaml"))) {
    return "pnpm";
  }

  if (fs.existsSync(path.resolve(process.cwd(), "yarn.lock"))) {
    return "yarn";
  }
  return "npm";
}

async function runInstallCommand(packageName: string) {
  const packageManager = await detectPackageManager();
  const installCommand = packageName === "yarn" ? `yarn add ${packageName}` : `${packageManager} install ${packageName}`;

  console.log(chalk.blue(`Running: ${installCommand}`));

  try {
    const { stdout, stderr } = await execPromise(installCommand, { cwd: process.cwd() });

    if (stderr) {
      console.error(chalk.red(`Error during installation:\n${stderr}`));
    }
    if (stdout) {
      console.log(stdout);
    }

    console.log(chalk.green(`Successfully installed ${packageName}!`));
  }
  catch (error) {
    console.error(chalk.red(`Failed to install ${packageName}:`), error);
    process.exit(1);
  }
}

program.name("snappyui").description("CLI for your Awesome UI Component Library").version("0.1.0");

program.command("add <component>").description("Add a component package to your project").action(async (component: ComponentName) => {
  if (!componentRegistry[component]) {
    console.error(chalk.red(`Error: Component '${component}' not found.`));
    console.log(chalk.yellow("Available components:"), Object.keys(componentRegistry).join(", "));
    process.exit(1);
  }

  const { packageName } = componentRegistry[component];
  console.log(chalk.cyan(`Adding component:${component} (${packageName})...`));
  await runInstallCommand(packageName);
});

program
  .command("list")
  .description("List available components")
  .action(() => {
    console.log(chalk.underline.bold("Available Components:"));
    Object.entries(componentRegistry).forEach(([name, { packageName }]) => {
      console.log(`- ${chalk.green(name)} (${chalk.dim(packageName)})`);
    });
  });
