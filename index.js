import "./PingGlide/index.js"
import settings from "./GUI/config.js"
//try to export miningSpeed here. then i can just alter the calculations based on a register command. so whenever value is changed, a register command updates the calculations.
register("command", () => {
    return settings.getConfig().openGui()
}).setName("derpymod")
