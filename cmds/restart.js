module.exports = {
    name: "restart",
    description:"untuk merestart bot",
    run: async (client, message, args) => {
        if (message.author.id !== '700026593095188571') {
            return message.reply.send(`Kamu Tidak Bisa Menggunakan Command Ini!`)
        }
        await message.reply.send(`Restarting bot...`)
        process.exit(1);
    }
}