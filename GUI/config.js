import Settings from "../../Amaterasu/core/Settings.js";
import DefaultConfig from "../../Amaterasu/core/DefaultConfig.js";
import Category from "../../Amaterasu/core/Category.js";

const version = JSON.parse(FileLib.read("DerpyMod", "metadata.json")).version

const CHANGELOG = `# §bAmaterasu v${version}\n ${FileLib.read("Amaterasu", "changelog.md")}`


const defaultConf = new DefaultConfig("DerpyMod", "data/settings.json")

    .addTextInput({
        category: "Ping Glide",
        configName: "TextInput",
        title: "Mining Speed",
        description: "Enter your total mining speed here. (Must be a number)",
        value: "1000",
        tags: ["Mining speed"],
        placeHolder: "1000"
    })
    .addSwitch({
        category: "Ping Glide",
        configName: "PingGlideSwitch",
        title: "Ping Glide",
        description: "Enables ping glide",
        tags: ["ping glide", "ping", "glide"]
    })
    .addTextInput({
        category: "Ping Glide",
        configName: "miningSpeedBoostScalar",
        title: "Mining Speed Boost",
        description: "Enter the mining speed boost you get in +_%.",
        tags: ["Mining speed boost", "boost"],
        value: "250",
        placeHolder: "250"
    })
    .addSlider({
        category: "Ping Glide",
        configName: "ticksInput",
        title: "Set tick delay",
        description: "Set the tick delay. (4 is a good number to start at)",
        options: [0, 10],
        value: 4,
        tags: ["delay"]
    })
    .addSwitch({
        category: "Ping Glide",
        configName: "BlockHighlight",
        title: "Block Highlight",
        description: "Replaces the traditional block outline with a block high light color",
        tags: ["block highlight"]
    })
    .addColorPicker({
        category: "Ping Glide",
        configName: "inputColor",
        title: "Pick Color",
        description: "Pick a color for the block outline or highlight.",
        value: [255, 255, 255, 255]
    })



const config = new Settings("DerpyMod", defaultConf, "data/ColorScheme.json", "§lDerpy Mod");


config
    .setPos(config.settings.x, config.settings.y)
    .setSize(config.settings.width, config.settings.height)
    .apply()

export default config.settings
