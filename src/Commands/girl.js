const Selfbot = require("../Classes/selfbot");

module.exports = {
    name: "girl",
    description: "Your mom leaked",
    /**
     * 
     * @param {Selfbot} client 
     */
    async execute(client, message, args) {

        setTimeout(() => {
            message.edit({ content: "```" + `
            
            ⠶⠶⣶⣿⣆⠀⠐⠙⠛⠛⠳⠂⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠀⠀⠈⠙⠦⢄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠉⠉⠑⠒⠲⠤⠤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠞⠁⣠⠔⠉⠀⠀⠀⠀⠙⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠑⠒⠤⢄⡀⠀⠀⠀⠤⡀⠀⢶⡏⠀⡰⠁⠄⢀⣀⠀⣀⣀⡤⠤⠂⠀⠰⣄⠁⠀⠀⣀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠦⣠⣤⣼⣦⣀⣧⠀⡇⢀⣤⣾⣯⣽⣄⠀⢀⣀⡠⢶⡀⠈⣳⠖⠊⠁⠀⠀⠀⠀
            ⠓⢦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣤⣧⡀⠉⠹⠿⣿⡏⠠⣸⣿⠟⠉⠁⠀⠀⣀⡠⡿⠋⠁⠀⠀⠀⠀⠀⠀⠀
            ⣷⣶⣾⣿⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠴⠋⠀⠀⣿⣶⣟⣻⣀⠀⣀⡁⠀⠀⢠⡀⠀⣄⣀⣉⡹⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⢥⣤⣤⣤⣤⣬⠹⠛⢶⣦⣤⠤⠤⠴⠖⠒⠉⠁⠀⠀⠀⢀⠟⠉⠉⠉⠙⢠⠋⣹⠆⠀⠘⠓⠾⡩⠟⠉⠀⢰⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
            ⣶⣦⣭⣽⣛⣛⣿⣿⡴⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⠀⠀⠀⠀⢀⡇⡴⠃⠀⠀⣀⠴⠊⠀⠀⠀⠀⠀⠙⠳⢤⣀⣀⣀⣀⣠⣤⣾
            ⠉⠻⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣧⠤⠖⠶⠟⠻⠛⠻⢶⠖⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠋⢹⣿⠟⠛⠉
            ⣦⣄⣈⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣎⠀⠀⠀⠀⠀⠀⣠⠖⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡿⠒⠲⠤
            ⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡔⠋⢁⡬⠛⠉⠉⢑⠖⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣷⡀⠀⠀
            ⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡏⠀⢀⠎⠀⠀⠀⢠⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣷⣄⡀
            ⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⣸⠀⠀⠀⢠⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣁
            ⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢠⡏⠀⠀⣠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠹⡿⣿
            ⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢧⡸⣿⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠹⠌
            ⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠉⢻⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀
            ⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠀⠀⠀
            ⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡷⠀⠀⠀
            ⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠅⣸⠇⠀⠀⠀
            ⣿⣿⣿⢿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠁⢠⡏⠀⠀⠀⠀
            ⠿⠋⠁⢀⣹⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡂⠁⢀⡞⠀⠀⠀⠀⠀
            ⢀⡤⠖⠉⠀⠀⠹⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠎⠁⣠⣿⠁⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠀⢸⣬⣿⠷⠶⠶⠤⢤⣤⣤⡤⣤⣹⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⣤⣿⣿⠟⠀⠀⠀⠀⠀⠀
            ⠀⠀⢀⡠⠤⠒⠋⠉⠀⠀⠀⠀⢀⡴⠞⠋⣀⡴⠞⠋⠻⢿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀
            ⠒⠁⠀⢀⡀⠀⠀⠀⠀⣠⡴⠞⣉⣠⠴⠚⠁⠀⠀⢀⣴⣿⣿⣿⣿⣶⣦⣤⣤⣀⣤⣤⣤⣤⣶⣿⣿⣿⣿⣿⣿⡗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

` + "```"})
        }, client.config.interval);
        
    }
}
