#!/usr/bin/env node

const { program } = require("commander");
const fs = require("fs");
const path = require("path");

program
    .command("create-component")
    .argument("<ComponentName>")
    .description("Create a simple function component.")
    .action(componentName => {
        const dir = path.join(__dirname, "../", "src", "components", componentName);

        fs.mkdirSync(dir, { recursive: true });

        const componentPath = path.join(dir, "index.js");
        const stylesPath = path.join(dir, "styles.module.scss");

        const componentContent = `import {
    className
} from "./styles.module.scss";

const ${componentName} = () => {
    return(
        <div className={ className }></div>
    )
}

export default ${componentName};
        `;

        const stylesContent = `.className { /* your style */}`

        fs.writeFileSync(componentPath, componentContent);
        fs.writeFileSync(stylesPath, stylesContent);
    });

program.parse(process.argv);