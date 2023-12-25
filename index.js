const { client, MessageEmbed } = require( "discord.js");
const client = new client();
const Botconfig = require( '/config.json ')
const moment = require('moment')
client.on('ready' , async () => {
    console.log('Logged in as ${client.user.tag}!');
})

client.on('guildMemberAdd',async member  =>{
    const welcomechannel = member.guild.channel.cache.find(ch => ch.name === 'welcome');

    const welcomeEmbed = new MessageEmbed()
    .setTitle('welcome')
    .setColor('FFFFF')
    .setImage(member.user.displayAvaterURL({ format: 'png', dynamtic: true}))
    .addField('**Name**',Member.displayName)
    .addField('**ID**',member.id)
    .addField('**Account created On**' , moment .utc(member.createdAt).format('dddd,MMMM Do YYYY, HH: mm: ss'))
    .setTimestamp()
    welcomechannel.send(welcomeEmbed)
})


client.on('guildMemberRemove', async member => {
    const channel = member.guild.chaneels.cache.find(ch => ch.name ==='leave');
    channel.send('leaved server,${member}');
})


client.log(Botconfig.token)