const Discord = require('discord.js')

const { prefix, token } = require('../shogiBot_config.json');

const commandEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`help` usage')
    .setDescription('`s.help [command name]`')
    .setTimestamp()
    
const rulesEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`rules` usage')
    .setDescription('`s.rules [page]`')
    .setTimestamp()

const playEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`play` usage')
    .setDescription('challenge opponents or cpu')
    .addField('view games:','`s.play`')
    .addField('request game:','`s.play [@username | open | cpu]`')
    .setTimestamp()
    
const acceptEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`accept` usage')
    .addField('accept an open request:','`s.accept [@username]`')
    .setTimestamp()

const styleEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`style` usage')
    .setDescription('change piece style (traditional or international pieces)')
    .addField('on the first turn of a game:','`s.style [trad | intl]`')
    .setTimestamp()
    
const moveEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`move` usage')
    .setDescription('move a piece on your turn')
    .addField('initial piece coordinates -> (no whitespace) final coordinates (e.g. 7g7f)','`s.move [xyxy]`')
    .addField('promote a piece when valid (no whitespace)','`s.move [xyxy]+`')
    .setTimestamp()

const dropEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`drop` usage')
    .setDescription('drop a piece in a valid location on your turn')
    .addField('piece -> (no whitespace) * coordinates (no whitespace)','`s.drop [X]*[xy]`')
    .addField('*can also be used in *`move`:','`s.move [X]*[xy]`')
    .addField('\u200b','piece letters: (P)awn, (L)ance, k(N)ight, (S)ilver, (G)old, (B)ishop, (R)ook')
    .setTimestamp()
    
const undoEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`undo` usage')
    .addField('undo your last move before your turn ends (the opponent moves)','`s.undo`')
    .setTimestamp()

const helpEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('shogiBot v0.1.1')
    .setDescription('bot for playing shogi (japanese chess)')
    .attachFiles(['./oushou.jpeg'])
    .setThumbnail('attachment://oushou.jpeg')
    .addField('commands', '`help`\n`rules`\n`play`\n`accept`\n`style`\n`move`\n`drop`\n`undo`')
    .addField('\u200b','for help with a specific command enter `s.help [command name]`')
    .setTimestamp()

function helpmessage(message, args) {
    if (!args.length) {
        return message.channel.send(helpEmbed);
    }

    if (args[0][0] + args[0][1] == "s.") {
        cmd = args[0].slice(2,args[0].length);
    } else {
        cmd = args[0];
    }

    if (cmd == 'help') {
        message.channel.send(commandEmbed);
    } else if (cmd == 'rules') {
        message.channel.send(rulesEmbed);
    } else if (cmd == 'play') {
        message.channel.send(playEmbed);
    } else if (cmd == 'accept') {
        message.channel.send(acceptEmbed);
    } else if (cmd == 'style') {
        message.channel.send(styleEmbed);
    } else if (cmd == 'move') {
        message.channel.send(moveEmbed);
    } else if (cmd == 'drop') {
        message.channel.send(dropEmbed);
    } else if (cmd == 'undo') {
        message.channel.send(undoEmbed);
    } else {
        message.channel.send("`" + cmd + "` is not a command")
    }
}

const rulesPageOne = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('How to play Shogi')
    .setDescription('A brief overview of the rules')
    .addField('Page 1 - What is Shogi?','sample text')
    .addField('Page 2 - Understanding how pieces move:','`s.rules 2`')
    .addField('Page 3 - Promotions and Drops:','`s.rules 3`')
    .setTimestamp()
    .setFooter('Showing page 1 of 3')

const fuhyouEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('Pawn / fuhyou (歩兵)')
    .setDescription('Moves one square forward, can only capture one square forward unlike Western chess')
    .attachFiles([
        './resources/rules/fuhyou_movement.png',
        './resources/rules/Shogi_fuhyou.png'
    ])
    .setThumbnail('attachment://Shogi_fuhyou.png')
    .setImage('attachment://fuhyou_movement.png')
    
const kyoushaEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('Lance / kyousha (香車)')
    .setDescription('Moves any number of squares forward, promotes to +L / narikyou (なり香)')
    .attachFiles([
        './resources/rules/kyousha_movement.png',
        './resources/rules/Shogi_kyousha.png'
    ])
    .setThumbnail('attachment://Shogi_kyousha.png')
    .setImage('attachment://kyousha_movement.png')
    
const keimaEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('Knight-Horse / keima (桂馬)')
    .setDescription('Moves like a knight is Western chess, but only the two spaces ahead,\npromotes to +N / narikei (なり桂)')
    .attachFiles([
        './resources/rules/keima_movement.png',
        './resources/rules/Shogi_keima.png'
    ])
    .setThumbnail('attachment://Shogi_keima.png')
    .setImage('attachment://keima_movement.png')
    
const ginshouEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('Silver General / ginshou (銀將)')
    .setDescription('Moves one square in the directions shown, promotes to +S / narigin (なり銀)')
    .attachFiles([
        './resources/rules/ginshou_movement.png',
        './resources/rules/Shogi_ginshou.png'
    ])
    .setThumbnail('attachment://Shogi_ginshou.png')
    .setImage('attachment://ginshou_movement.png')
    
const kinshouEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('Gold General / kinshou (金將)')
    .setDescription('Moves one square in the directions shown, does not promote')
    .attachFiles([
        './resources/rules/kinshou_movement.png',
        './resources/rules/Shogi_kinshou.png'
    ])
    .setThumbnail('attachment://Shogi_kinshou.png')
    .setImage('attachment://kinshou_movement.png')
    
const promotedEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('Promoted Pawn / tokin (と金)')
    .setDescription('The same as +S, +N, and +L, moves like gold general')
    .attachFiles([
        './resources/rules/promoted_movement.png',
        './resources/rules/Shogi_tokin.png'
    ])
    .setThumbnail('attachment://Shogi_tokin.png')
    .setImage('attachment://promoted_movement.png')
    
const kakugyouEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('Bishop / kakugyou (角行) *lit. \'angle mover\'*')
    .setDescription('Moves along diagonals like in Western chess, however there is only one of them')
    .attachFiles([
        './resources/rules/kakugyou_movement.png',
        './resources/rules/Shogi_kakugyou.png'
    ])
    .setThumbnail('attachment://Shogi_kakugyou.png')
    .setImage('attachment://kakugyou_movement.png')
    
const ryuumaEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('Promoted Bishop / ryuuma (龍馬) *lit. \'dragon horse\'*')
    .setDescription('Same as bishop, but can also move one square in any direction')
    .attachFiles([
        './resources/rules/ryuuma_movement.png',
        './resources/rules/Shogi_ryuuma.png'
    ])
    .setThumbnail('attachment://Shogi_ryuuma.png')
    .setImage('attachment://ryuuma_movement.png')

const hishaEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('Rook / hisha (飛車) *lit. \'flying chariot\'*')
    .setDescription('Moves in straight lines, like in Western chess')
    .attachFiles([
        './resources/rules/hisha_movement.png',
        './resources/rules/Shogi_hisha.png'
    ])
    .setThumbnail('attachment://Shogi_hisha.png')
    .setImage('attachment://hisha_movement.png')
    
const ryuuouEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('Promoted Rook / ryuuou (龍王) *lit. \'dragon king\'*')
    .setDescription('Same as rook, but can also move one square in any direction,\ncalled the strongest piece, like the queen in Western chess')
    .attachFiles([
        './resources/rules/ryuuou_movement.png',
        './resources/rules/Shogi_ryuuou.png'
    ])
    .setThumbnail('attachment://Shogi_ryuuou.png')
    .setImage('attachment://ryuuou_movement.png')
    
const oushouEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('King / oushou-white (王將) or gyokushou-black (玉將)')
    .setDescription('Black is considered the challenger in shogi, and always goes first, unlike Western chess.\nHowever, the conditions for winning are the same, capturing/checkmating the enemy king')
    .attachFiles([
        './resources/rules/oushou_movement.png',
        './resources/rules/Shogi_oushou.png'
    ])
    .setThumbnail('attachment://Shogi_oushou.png')
    .setImage('attachment://oushou_movement.png')

const rulesPageTwo = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('Understanding how pieces move')
    .setDescription('Piece movement is a crucial part of the game,\nrefer to the following diagrams to understand how each pieces moves.\nDifferent pieces in shogi are different sizes to represent their rank,\nthis list orders pieces by size starting with the smallest piece (pawn) to the largest (king).\nDon\'t worry about memorizing the characters right now, there is an option to use international-styled pieces when playing instead.')

const rulesPageTwoFooter = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setDescription('Take time to understand each of the pieces above before continuing.')
    .setTimestamp()
    .setFooter('Showing page 2 of 3')

//const rulesPageThree = new Discord.MessageEmbed()

async function showrules(message, args) {
    if (!args.length) {
        return message.channel.send(rulesPageOne);
    }
    if (args[0] == '1') {
        message.channel.send(rulesPageOne);
    } else if (args[0] == '2') {
        message.channel.send(rulesPageTwo);
        await sleep(3600);
        message.channel.send(fuhyouEmbed);
        await sleep(3600);
        message.channel.send(kyoushaEmbed);
        await sleep(3600);
        message.channel.send(keimaEmbed);
        await sleep(3600);
        message.channel.send(ginshouEmbed);
        await sleep(3600);
        message.channel.send(kinshouEmbed);
        await sleep(3600);
        message.channel.send(promotedEmbed);
        await sleep(3600);
        message.channel.send(kakugyouEmbed);
        await sleep(3600);
        message.channel.send(ryuumaEmbed);
        await sleep(3600);
        message.channel.send(hishaEmbed);
        await sleep(3600);
        message.channel.send(ryuuouEmbed);
        await sleep(3600);
        message.channel.send(oushouEmbed);
        await sleep(3600);
        message.channel.send(rulesPageTwoFooter);
    } else if (args[0] == '3') {
        //message.channel.send(rulesPageThree);
    } else if (args[0] == '4'){
        //message.channel.send(rulesPageFour)
    } else {
        message.channel.send("`" + args[0] + "` is not a valid page no.")
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var exec = require('child_process').execFile;
/**
 * Function to execute exe
 * @param {string} fileName The name of the executable file to run.
 * @param {string[]} params List of string arguments.
 * @param {string} path Current working directory of the child process.
 */
function execute(fileName, params, path) {
    let promise = new Promise((resolve, reject) => {
        exec(fileName, params, { cwd: path }, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });

    });

    return promise;
}

async function drawboard(message, args) {
    try {
        await execute("python",["drawboard.py",args.join(' ')],"./")
        message.channel.send({
            files: [{
                attachment: './temp.png',
                name: 'board.png'
            }]
        })
    }
    catch(err) {
        message.channel.send('The action could not be completed.')
    }
}

class match {
    constructor(challenger,type) {
        this.challenger = challenger;
        if(type == 'open') {
            this.type = "open";
            this.status = "open";
        } else {
            this.opponent = type;
            this.status = "requested";
        }
    }
    accept(opponent) {
        if (this.type == 'open') {
            this.opponent = opponent;
        }
        this.status = "playing"
    }
}

var matches = [];

function acceptmatch(message, args) {
    if(!message.mentions.users.size) {
        return message.channel.send('You did not specify whose match to accept.');
    }
    const taggedUser = message.mentions.users.first();
    for(i = 0; i < matches.length + 1; i++) {
        if (matches[i] != undefined && matches[i].challenger == taggedUser.username) {
            matches[i].accept(`${message.author.username}`);
            return message.channel.send(`You accepted ${taggedUser.username}'s match!\nGet ready to play!`);
        }
    }
}

function playgame(message, args) {
    if (!message.mentions.users.size) {
        challengers = "";
        statuses = "";
        opponents = "";
        size = (matches.length < 3) ? 3 : matches.length;
        for(i = 0; i < size; i++) {
            if (matches[i] != undefined && matches[i].challenger != null) {
                challengers += "`" + matches[i].challenger + "`\n";
            } else {
                challengers += "`------`\n";
            }
            if (matches[i] != undefined && matches[i].status != null) {
                statuses += "`" + matches[i].status + "`\n";
            } else {
                statuses += "`------`\n";
            }
            if (matches[i] != undefined && matches[i].type != 'open') {
                opponents += "`" + matches[i].opponent + "`\n";
            } else {
                opponents += "`------`\n";
            }
        }
        boardEmbed = new Discord.MessageEmbed()
            .setColor('#fee6b3')
            .setTitle('Current Games')
            .setDescription('use `s.accept` to play one of them')
            .addField('challenger(sente)    |',`${challengers}`,true)
            .addField('status               |',`${statuses}`,true)
            .addField('opponent(gote)        ',`${opponents}`,true)
            .setTimestamp()
        return message.channel.send(boardEmbed);
    }
    const taggedUser = message.mentions.users.first();
    matches.push(new match(`${message.author.username}`,`${taggedUser.username}`));
    message.channel.send(`You challenged ${taggedUser.username}!`);
}

const client = new Discord.Client()

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`)

})

client.on('message', message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
    }
    
	// other commands...
    if (command === 'board') {
        drawboard(message,args);
    } else if (command === 'help') {
        helpmessage(message,args);
    } else if (command === 'play') {
        playgame(message,args);
    } else if (command === 'accept') {
        acceptmatch(message,args);
    } else if (command === 'rules') {
        showrules(message,args);
    }

}) 

client.login(token)