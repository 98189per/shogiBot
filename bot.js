const Discord = require('discord.js')

const { prefix, token } = require('./config.json');

const commandEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`help` usage')
    .setDescription(`\`${prefix}help [command name]\``)
    .setTimestamp()
    
const rulesEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`rules` usage')
    .setDescription(`\`${prefix}rules [page]\``)
    .setTimestamp()

const playEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`play` usage')
    .setDescription('challenge opponents or cpu')
    .addField('view games:',`\`${prefix}play\``)
    .addField('request game:',`\`${prefix}play [@username | open | cpu]\``)
    .setTimestamp()
    
const acceptEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`accept` usage')
    .addField('accept an open request:',`\`${prefix}accept [@username]\``)
    .setTimestamp()

const styleEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`style` usage')
    .setDescription('change piece style (traditional or international pieces)')
    .addField('on the first turn of a game:',`\`${prefix}style [trad | intl]\``)
    .setTimestamp()
    
const moveEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`move` usage')
    .setDescription('move a piece on your turn')
    .addField('initial piece coordinates -> (no whitespace) final coordinates (e.g. 7g7f)',`\`${prefix}move [xyxy]\``)
    .addField('promote a piece when valid (no whitespace)',`\`${prefix}move [xyxy]+\``)
    .setTimestamp()

const dropEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`drop` usage')
    .setDescription('drop a piece in a valid location on your turn')
    .addField('piece -> (no whitespace) * coordinates (no whitespace)',`\`${prefix}drop [X]*[xy]\``)
    .addField('\u200b','piece letters: (P)awn, (L)ance, k(N)ight, (S)ilver, (G)old, (B)ishop, (R)ook')
    .setTimestamp()
    
const undoEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`undo` usage')
    .addField('undo your last move before your turn ends (the opponent moves)',`\`${prefix}undo\``)
    .setTimestamp()

const resignEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('`resign` usage')
    .addField('resign from a current match (lose)',`\`${prefix}resign\``)
    .setTimestamp()

const helpEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('shogiBot v0.1.1')
    .setDescription('Bot for playing shogi (Japanese chess)')
    .attachFiles(['./oushou.jpeg'])
    .setThumbnail('attachment://oushou.jpeg')
    .addField('Commands', '`help`\n`rules`\n`play`\n`accept`\n`style`\n`move`\n`drop`\n`undo`\n`resign`')
    .addField('\u200b',`for help with a specific command enter \`${prefix}help [command name]\``)
    .setTimestamp()
    .setFooter('Stay tuned! Considering adding taikyoku shogi next...')

function helpmessage(message, args) {
    if (!args.length) {
        return message.channel.send(helpEmbed);
    }

    if (args[0].slice(0,prefix.length) == prefix) {
        cmd = args[0].slice(prefix.length,args[0].length);
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
    } else if (cmd == 'resign') {
        message.channel.send(resignEmbed);
    } else {
        message.channel.send("`" + cmd + "` is not a command")
    }
}

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
    .setDescription(`Same as rook, but can also move one square in any direction, called the strongest piece, like the queen in Western chess`)
    .attachFiles([
        './resources/rules/ryuuou_movement.png',
        './resources/rules/Shogi_ryuuou.png'
    ])
    .setThumbnail('attachment://Shogi_ryuuou.png')
    .setImage('attachment://ryuuou_movement.png')
    
const oushouEmbed = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('King / oushou-white (王將) or gyokushou-black (玉將)')
    .setDescription(`Black is considered the challenger in shogi, and always goes first, unlike Western chess. \
        However, the conditions for winning are the same, capturing/checkmating the enemy king`)
    .attachFiles([
        './resources/rules/oushou_movement.png',
        './resources/rules/Shogi_oushou.png'
    ])
    .setThumbnail('attachment://Shogi_oushou.png')
    .setImage('attachment://oushou_movement.png')

const rulesPageOne = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('How to play Shogi')
    .setDescription('A brief overview of the rules')
    .addField('Page 1 - What is Shogi?',`Shogi, also known as Japanese chess or the Game of Generals is a two-player strategy board game \
        native to Japan. What makes Shogi different from Western chess is that it allows captures pieces to be \
        return to the board by the capturing player. In addition, the board has 81 squares instead of 64, \
        comprising of 9 ranks (rows) and 9 files (columns). The first player is called *Sente* (先手), and plays \
        black, the second player is called *Gote* (後手) and plays white. Each player has 20 pieces, which look the same \
        as the opponent's pieces. The players show which pieces are theirs based on which way the pieces are facing, \
        they always face to the opponent's side. Like Western chess, the conditions for winning Shogi are to \
        capture/checkmate the opponent's king.`)
    .addField('Page 2 - Understanding how pieces move:','`s.rules 2`')
    .addField('Page 3 - Promotions and Drops:','`s.rules 3`')
    .setTimestamp()
    .setFooter('Showing page 1 of 3')

const rulesPageTwo = new Discord.MessageEmbed()
    .setColor('#fee6b3')
    .setTitle('Understanding how pieces move')
    .setDescription(`Piece movement is a crucial part of the game, \
        refer to the following diagrams to understand how each pieces moves. \ 
        Different pieces in shogi are different sizes to represent their rank, \
        this list orders pieces by size starting with the smallest piece (pawn) \
        to the largest (king).\nDon\'t worry about memorizing the characters right now, \
        there is an option to use international-styled pieces when playing instead.`)

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
    constructor(challenger,type,id) {
        this.challenger = challenger;
        this.id = id;
        if(type == 'open') {
            this.type = 'open';
            this.status = 'open';
        } else {
            this.opponent = type;
            this.status = "requested";
        }
    }
    accept(opponent) {
        this.opponent = opponent;
        this.status = "playing"
    }
}

var globalMatches = [];

function playgame(message, args) {
    matches = globalMatches.filter(m => m.id == message.guild.id);
    if(!message.mentions.users.size && !args.length) {
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
            if (matches[i] != undefined && matches[i].opponent != null) {
                opponents += "`" + matches[i].opponent + "`\n";
            } else {
                opponents += "`------`\n";
            }
        }
        boardEmbed = new Discord.MessageEmbed()
            .setColor('#fee6b3')
            .setTitle('Current Games')
            .setDescription(`use \`${prefix}accept\` to play one of them`)
            .addField('challenger(sente)    |',`${challengers}`,true)
            .addField('status               |',`${statuses}`,true)
            .addField('opponent(gote)        ',`${opponents}`,true)
            .setTimestamp()
        message.channel.send(boardEmbed);
    } else if(args[0] == 'open') {
        if(matches.filter(m => m.challenger == message.author.username).length != 0 ||
            matches.filter(m => m.opponent == message.author.username).length != 0) {
                return message.channel.send(`<@${message.author.id}> you are already in a match!`);
        }
        globalMatches.push(new match(message.author.username,'open',message.guild.id));
        message.channel.send(`<@${message.author.id}> is hosting an open match!`)
    } else {
        if(matches.filter(m => m.challenger == message.author.username).length != 0 ||
            matches.filter(m => m.opponent == message.author.username).length != 0) {
                return message.channel.send(`<@${message.author.id}> you are already in a match!`);
        }
        const taggedUser = message.mentions.users.first();
        globalMatches.push(new match(message.author.username,taggedUser.username,message.guild.id));
        message.channel.send(`${message.author.username} challenged <@${taggedUser.id}>!`);
    }
}

async function resign(message, args) {
    /*matches = globalMatches.filter(m => m.id == message.guild.id);
    if(matches.filter(m => m.challenger == message.author.username).length == 0 &&
        matches.filter(m => m.opponent == message.author.username).length == 0) 
            return message.channel.send(`<@${message.author.id}> you are not in any matches right now!`);*/
    //matches = matches.filter(m => m.challenger == message.author.username || m.opponent == message.author.username)[0];
    gameMessage = await getMessage(message);
    if(gameMessage != null) {
        challenger = gameMessage.embeds[0].title.split(' ')[0];
        opponent = gameMessage.embeds[0].title.split(' ')[2];
        winner = challenger == message.author.username ? opponent : challenger;
        message.channel.send(`<@${message.author.id}> has resigned,  <@${client.users.cache.find(user => user.username == winner).id}> is the winner!`);
        try {
            index = globalMatches.findIndex(m => m.challenger == message.author.username || m.opponent == message.author.username);
            globalMatches.splice(index, 1);
        } catch(err) {}
    }
}

function acceptmatch(message, args) {
    matches = globalMatches.filter(m => m.id == message.guild.id);
    if(matches.filter(m => m.challenger == message.author.username).length != 0 ||
        matches.filter(m => m.opponent == message.author.username).length != 0) {
            if(matches.filter(m => m.challenger == message.author.username)[0].challenger != message.author.username)
                return message.channel.send(`<@${message.author.id}> you are already in a match!`);
    }
    if(!message.mentions.users.size) {
        return message.channel.send('You did not specify whose match to accept.');
    }
    const taggedUser = message.mentions.users.first();
    for(i = 0; i < matches.length + 1; i++) {
        if(matches[i] != undefined && matches[i].challenger == taggedUser.username && matches[i].status != 'playing') {
            if( matches[i].status == 'open' || (matches[i].status == 'requested' && matches[i].opponent == message.author.username) ) {
                matches[i].accept(`${message.author.username}`);
                message.channel.send(`You accepted <@${taggedUser.id}>'s match!\nGet ready to play!`);
                game = new Game(matches[i].challenger,matches[i].opponent);
                game.displayGame(message);
            }
            return;
        }
    }
    message.channel.send('Could not find a matching request.');
}

class Game {
    startPosition = "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 0";
    constructor(challenger,opponent) {
        this.title = challenger + " vs. " + opponent;
        this.board = this.startPosition;
        this.style = "trad";
        this.moves = "";
        this.array = new Array(9).fill('_').map(() => new Array(9).fill('_'));
    }
    setGameData(board,style,moves) {
        this.board = board;
        this.style = style;
        this.moves = moves;
    }
    updateArray() {
        const fen = this.board.split(' ')[0];
        const rows = fen.split('/');
        let r = 0
        let f = 0
        rows.forEach(row => {
            let prev = '';
            [...row].forEach(square => {
                if(isNaN(square)) {
                    if(prev == '+') {
                        this.array[r][f] += square;
                        f++;
                    } else if(square == '+') {
                        this.array[r][f] = square;
                    } else {
                        this.array[r][f] = square;
                        f++;
                    }
                } else {
                    for(let i = 0; i < parseInt(square); i++) {
                        this.array[r][f] = '_';
                        f++;
                    }
                }
                prev = square;
            })
            f = 0;
            r++;
        })
    }
    updateSfen() {
        let fen = '';
        this.array.forEach(row => {
            let emptySquares = 0;
            row.forEach(square => {
                if(square == '_') {
                    emptySquares++;
                } else {
                    if(emptySquares > 0) {
                        fen += emptySquares.toString(10);
                    }
                    fen += square;
                    emptySquares = 0;
                }
            })
            if(emptySquares > 0) {
                fen += emptySquares.toString(10);
            }
            emptySquares = 0;
            fen += '/';
        })
        fen = fen.slice(0,fen.length-1);
        let rem = this.board.split(' ').slice(1,this.board.length);
        this.board = fen + ' ' + rem.join(' ');
    }
    move(move,message,opponent) {
        this.updateArray();
        let rank = (isNaN(move.charAt(0)) ? move.charAt(0).toLowerCase().charCodeAt(0) - 97 + 1 : parseInt(move.charAt(0))) - 1;
        let file = 9 - (isNaN(move.charAt(1)) ? move.charAt(1).toLowerCase().charCodeAt(0) - 97 + 1 : parseInt(move.charAt(1)));
        let destx = (isNaN(move.charAt(2)) ? move.charAt(2).toLowerCase().charCodeAt(0) - 97 + 1 : parseInt(move.charAt(2))) - 1;
        let desty = 9 - (isNaN(move.charAt(3)) ? move.charAt(3).toLowerCase().charCodeAt(0) - 97 + 1 : parseInt(move.charAt(3)));
        if(rank > 8 || file > 8 || destx > 8 || desty > 8 || rank < 0 || file < 0 || destx < 0 || desty < 0) {
            message.channel.send(`<@${message.author.id}> ${move} is not on the board!`);
            return false;
        }
        if(rank == destx && file == desty) {
            message.channel.send(`<@${message.author.id}> that piece is already there!`);
            return false;
        }
        //console.log(rank,file,destx,desty,this.array);
        const testColor = this.board.split(' ')[1] == 'b' ? this.array[rank][file].toUpperCase() : this.array[rank][file].toLowerCase();
        const playerTurn = this.board.split(' ')[1] == 'b' ? this.title.split(' ')[0] : this.title.split(' ')[2];
        if(this.array[rank][file] == '_') {
            message.channel.send(`<@${message.author.id}> there is no piece there!`);
            return false;
        } else if(this.array[rank][file] != testColor) {
            message.channel.send(`<@${message.author.id}> that is not one of your pieces!`);
            return false;
        } else if(message.author.username != playerTurn) {
            message.channel.send(`<@${message.author.id}> it is not your turn right now!`);
            return false;
        } else {
            //console.log(rank,file,destx,desty,this.array[rank][file],move,validate(this.array[rank][file],[rank,file],[destx,desty],this.array));
            if(!validate(this.array[rank][file],[rank,file],[destx,desty],this.array)) {
                message.channel.send(`<@${message.author.id}> ${move} is not a valid move!`);
                return false;
            }
            const piece = this.array[rank][file];
            this.array[rank][file] = '_';
            if(this.array[destx][desty].replace('+','').toLowerCase() == 'k') {
                message.channel.send(`<@${message.author.id}> has captured the enemy king and won the game! <@${client.users.cache.find(user => user.username == opponent).id}> has lost!`);
                try {
                    const index = globalMatches.findIndex(m => m.challenger == message.author.username || m.opponent == message.author.username);
                    globalMatches.splice(index, 1);
                } catch(err) {}
                return false;
            }
            if(this.array[destx][desty] != '_')
                this.board = capture(this.board,this.array[destx][desty]);
            this.array[destx][desty] = piece;
            this.updateSfen();
            return true;
        }
    }
    async displayGame(message) {
        const file = this.title.replace(/\s/g,'_') + '.png';
        try {
            const args = this.board + " " + this.style + " " + './games/' +  file;
            await execute("python",["drawboard.py",args],"./");
            this.gameBoard = file;
        }
        catch(err) {
            this.gameBoard = "error.png";
        }
        const playerTurn = this.board.split(' ')[1] == 'b' ? this.title.split(' ')[0] + '\'s turn' : this.title.split(' ')[2] + '\'s turn';
        const gameEmbed = new Discord.MessageEmbed()
            .setColor('#fee6b3')
            .setTitle(this.title)
            .setDescription(playerTurn)
            .attachFiles(['./games/' + this.gameBoard])
            .setImage('attachment://' + this.gameBoard)
            .addField('Moves',(this.moves == '')?'None':this.moves)
            .addField('Game Data','||' + this.board + " " + this.style + '||')
            .setTimestamp()
        message.channel.send(gameEmbed);
    }
}

async function getMessage(message) {
    var gameFound = false;
    var limit = 10;
    var gameMessage = null;
    while (!gameFound) {
        gameWon = null;
        messageList = await message.channel.messages.fetch({ limit: limit });
        messageList = messageList.filter(m => m.author.id === client.user.id);
        tempList = [...messageList.values()];
        for(i = 0; i < messageList.size; i++) {
            m = tempList[i];
            if(m.content.includes('won') || m.content.includes('winner')) {
                //console.log(m,m.mentions.users.filter(users => users.id == message.author.id).size,message.author.id);
                if(m.mentions.users.filter(users => users.id == message.author.id).size > 0) {
                    gameWon = m;
                    break;
                }
            }
        }
        if(gameWon != null)
            messageList = messageList.filter(m => m.createdTimestamp > gameWon.createdTimestamp);
        //console.log([...messageList])
        messageList.forEach( m => {
            try {
                if(m.embeds[0].title.split(' ')[0] == message.author.username || m.embeds[0].title.split(' ')[2] == message.author.username) {
                    gameFound = true;
                    if(gameMessage == null || m.embeds[0].timestamp > gameMessage.embeds[0].timestamp)
                        gameMessage = m;
                }
            } catch(err) {}
        })
        limit += 10;
        if(limit == 100 || gameWon != null)
            break;
    }
    //console.log(gameWon.createdTimestamp,gameWon.content);
    if(!gameFound)
        message.channel.send('The match could not be found. (Does not exist/too old)');
    else 
        return gameMessage;
}

async function movepiece(message, args) {
    if (!args.length || args[0].length != 4) {
        return message.channel.send(`<@${message.author.id}> please make sure you are following the correct format \`${prefix}move [xyxy]\``);
    }
    gameMessage = await getMessage(message);
    if(gameMessage != null) {
        challenger = gameMessage.embeds[0].title.split(' ')[0];
        opponent = gameMessage.embeds[0].title.split(' ')[2];
        if(gameMessage.embeds[0].fields[0].name == 'Moves') 
            moves = gameMessage.embeds[0].fields[0].value;
        if(gameMessage.embeds[0].fields[1].name == 'Game Data') {
            gameData = gameMessage.embeds[0].fields[1].value;
            gameData = gameData.slice(2,gameData.length).split(' ');
            board = gameData.slice(0,gameData.length-1).join(' ');
            style = gameData[gameData.length-1];
            style = style.slice(0,style.length-2);
        }
        game = new Game(challenger,opponent);
        game.setGameData(board,style,moves);
        opponent = message.author.username == opponent ? challenger : opponent;
        if(game.move(args[0],message,opponent)) {
            board = game.board;
            board = board.split(' ');
            board[1] = board[1] == 'b' ? 'w' : 'b';
            board[3] = (parseInt(board[3]) + 1).toString(10);
            board = board.join(' ');
            moves = game.moves;
            moves = moves == 'None' ? args[0] : moves + ' ' + args[0];
            game.setGameData(board,style,moves);
            game.displayGame(message);
        }
    }
}

function capture(board,piece) {
    board = board.split(' ');
    piecesInHand = board[2];
    hands = {
        R:0,B:0,G:0,S:0,N:0,L:0,P:0,
        r:0,b:0,g:0,s:0,n:0,l:0,p:0
    }
    for(i = 0; i < piecesInHand.length; i++) {
        if(isNaN(piecesInHand.charAt(i))) {
            if(piecesInHand.charAt(i) != '-') {
                hands[piecesInHand.charAt(i)] = 1;
            }
        } else {
            temp = parseInt(piecesInHand.charAt(i));
            i++;
            hands[piecesInHand.charAt(i)] = temp;
        }
    }
    if(piece == piece.toUpperCase())
        newPiece = piece.toLowerCase();
    else
        newPiece = piece.toUpperCase();
    if(piece != 'rem') { //for drops i assume? i can't remember now...
        hands[newPiece] += 1;
    } else {
        hands[newPiece] -= 1;
    }
    newString = '';
    for(var pieces in hands) {
        if(hands[pieces] == 1) {
            newString += pieces;
        } else if(hands[pieces] > 1) {
            newString += hands[pieces];
            newString += pieces;
        }
    }
    if(newString == '') {
        newString = '-';
    }
    board[2] = newString;
    return board.join(' ');
}

function validate(piece, start, dest, board) {
    switch (piece) {
        case 'p':
            if(dest[0] != start[0]+1 || dest[1] != start[1])
                return false;
            mask = board[dest[0]][dest[1]];
            if(mask == '_' || mask == mask.toUpperCase())
                return true;
            return false;
        case 'n':
            if(dest[0] != start[0]+2 || ( dest[1] != start[1]+1 && dest[1] != start[1]-1 ))
                return false;
            mask = board[dest[0]][dest[1]];
            if(mask == '_' || mask == mask.toUpperCase())
                return true;
            return false;
        case 'l':
            if(dest[1] != start[1] || dest[0] < start[0])
                return false;
            for(i = start[0]+1; i <= dest[0]; i++) {
                mask = board[i][dest[1]];
                if( (mask != '_' && i != dest[0]) || mask != mask.toUpperCase() )
                    return false;
            }
            return true;
        case 's':
            if(( dest[0] != start[0]+1 || ( dest[1] != start[1]-1 && dest[1] != start[1] && dest[1] != start[1]+1 ) )
                    && ( dest[0] != start[0]-1 || ( dest[1] != start[1]-1 && dest[1] != start[1]+1 ) ))
                return false;
            mask = board[dest[0]][dest[1]];
            if(mask == '_' || mask == mask.toUpperCase())
                return true;
            return false;
        case 'g':
        case '+p':
        case '+n':
        case '+l':
        case '+s':
            if(( dest[0] != start[0]+1 || ( dest[1] != start[1]-1 && dest[1] != start[1] && dest[1] != start[1]+1 ) )
                    && ( dest[0] != start[0] || ( dest[1] != start[1]-1 && dest[1] != start[1]+1 ) )
                    && ( dest[0] != start[0]-1 || dest[1] != start[1] ))
                return false;
            mask = board[dest[0]][dest[1]];
            if(mask == '_' || mask == mask.toUpperCase())
                return true;
            return false;
        case 'k':
            if(( dest[0] != start[0]+1 || ( dest[1] != start[1]-1 && dest[1] != start[1] && dest[1] != start[1]+1 ) )
                    && ( dest[0] != start[0] || ( dest[1] != start[1]-1 && dest[1] != start[1]+1 ) )
                    && ( dest[0] != start[0]-1 || ( dest[1] != start[1]-1 && dest[1] != start[1] && dest[1] != start[1]+1 ) ))
                return false;
            mask = board[dest[0]][dest[1]];
            if(mask == '_' || mask == mask.toUpperCase())
                return true;
            return false;
        case '+r':
            if( !(( dest[0] != start[0]+1 || ( dest[1] != start[1]-1 && dest[1] != start[1]+1 ) )
                    && ( dest[0] != start[0]-1 || ( dest[1] != start[1]-1 && dest[1] != start[1]+1 ) )) ) {
                mask = board[dest[0]][dest[1]];
                if(mask == '_' || mask == mask.toUpperCase())
                    return true;
            }
        case 'r':
            if(dest[1] == start[1]) {
                for(i = Math.min(start[0],dest[0])+1; i < Math.max(start[0],dest[0]); i++) {
                    mask = board[i][dest[1]];
                    if(mask != '_' && i != dest[0])
                        return false;
                }
                mask = board[dest[0]][dest[1]];
                if(mask != mask.toUpperCase())
                    return false;
                return true;
            }
            if(dest[0] == start[0]) {
                for(i = Math.min(start[1],dest[1])+1; i < Math.max(start[1],dest[1]); i++) {
                    mask = board[dest[0]][i];
                    if(mask != '_' && i != dest[1])
                        return false;
                }
                mask = board[dest[0]][dest[1]];
                if(mask != mask.toUpperCase())
                    return false;
                return true;
            }
            return false;
        case '+b':
            if( !(( dest[0] != start[0]+1 || dest[1] != start[1] )
                    && ( dest[0] != start[0] || ( dest[1] != start[1]-1 && dest[1] != start[1]+1 ) )
                    && ( dest[0] != start[0]-1 || dest[1] != start[1] )) ) {
                mask = board[dest[0]][dest[1]];
                if(mask == '_' || mask == mask.toUpperCase())
                    return true;
            }
        case 'b':
            if((dest[0]-start[0])/(dest[1]-start[1]) == 1 || (dest[0]-start[0])/(dest[1]-start[1]) == -1 ) {
                for(i = Math.min(start[0],dest[0])+1; i < Math.max(start[0],dest[0]); i++) {
                    mask = board[i][Math.min(start[1],dest[1])+i-Math.min(start[0],dest[0])];
                    if( (mask != '_' && i != dest[0] &&
                        Math.min(start[1],dest[1])+i-Math.min(start[0],dest[0]) != dest[1]) || 
                        mask != mask.toUpperCase() )
                            return false;
                }
                mask = board[dest[0]][dest[1]];
                if(mask != mask.toUpperCase())
                    return false;
                return true;
            }
            return false;
        case 'P':
            if(dest[0] != start[0]-1 || dest[1] != start[1])
                return false;
            mask = board[dest[0]][dest[1]];
            if(mask == '_' || mask == mask.toLowerCase())
                return true;
            return false;
        case 'N':
            if(dest[0] != start[0]-2 || ( dest[1] != start[1]+1 && dest[1] != start[1]-1 ))
                return false;
            mask = board[dest[0]][dest[1]];
            if(mask == '_' || mask == mask.toLowerCase())
                return true;
            return false;
        case 'L':
            if(dest[1] != start[1] || dest[0] > start[0])
                return false;
            for(i = start[0]-1; i >= dest[0]; i--) {
                mask = board[i][dest[1]];
                if( (mask != '_' && i != dest[0]) || mask != mask.toLowerCase() )
                    return false;
            }
            return true;
        case 'S':
            if(( dest[0] != start[0]-1 || ( dest[1] != start[1]-1 && dest[1] != start[1] && dest[1] != start[1]+1 ) )
                    && ( dest[0] != start[0]+1 || ( dest[1] != start[1]-1 && dest[1] != start[1]+1 ) ))
                return false;
            mask = board[dest[0]][dest[1]];
            if(mask == '_' || mask == mask.toLowerCase())
                return true;
            return false;
        case 'G':
        case '+P':
        case '+N':
        case '+L':
        case '+S':
            if(( dest[0] != start[0]-1 || ( dest[1] != start[1]-1 && dest[1] != start[1] && dest[1] != start[1]+1 ) )
                    && ( dest[0] != start[0] || ( dest[1] != start[1]-1 && dest[1] != start[1]+1 ) )
                    && ( dest[0] != start[0]+1 || dest[1] != start[1] ))
                return false;
            mask = board[dest[0]][dest[1]];
            if(mask == '_' || mask == mask.toLowerCase())
                return true;
            return false;
        case 'K':
            if(( dest[0] != start[0]-1 || ( dest[1] != start[1]-1 && dest[1] != start[1] && dest[1] != start[1]+1 ) )
                    && ( dest[0] != start[0] || ( dest[1] != start[1]-1 && dest[1] != start[1]+1 ) )
                    && ( dest[0] != start[0]+1 || ( dest[1] != start[1]-1 && dest[1] != start[1] && dest[1] != start[1]+1 ) ))
                return false;
            mask = board[dest[0]][dest[1]];
            if(mask == '_' || mask == mask.toLowerCase())
                return true;
            return false;
        case '+R':
            if( !(( dest[0] != start[0]+1 || ( dest[1] != start[1]-1 && dest[1] != start[1]+1 ) )
                    && ( dest[0] != start[0]-1 || ( dest[1] != start[1]-1 && dest[1] != start[1]+1 ) )) ) {
                mask = board[dest[0]][dest[1]];
                if(mask == '_' || mask == mask.toLowerCase())
                    return true;
            }
        case 'R':
            if(dest[1] == start[1]) {
                for(i = Math.min(start[0],dest[0])+1; i < Math.max(start[0],dest[0]); i++) {
                    mask = board[i][dest[1]];
                    if(mask != '_' && i != dest[0])
                        return false;
                }
                mask = board[dest[0]][dest[1]];
                if(mask != mask.toLowerCase())
                    return false;
                return true;
            }
            if(dest[0] == start[0]) {
                for(i = Math.min(start[1],dest[1])+1; i < Math.max(start[1],dest[1]); i++) {
                    mask = board[dest[0]][i];
                    if(mask != '_' && i != dest[1])
                        return false;
                }
                mask = board[dest[0]][dest[1]];
                if(mask != mask.toLowerCase())
                    return false;
                return true;
            }
            break;
        case '+B':
            if( !(( dest[0] != start[0]+1 || dest[1] != start[1] )
                    && ( dest[0] != start[0] || ( dest[1] != start[1]-1 && dest[1] != start[1]+1 ) )
                    && ( dest[0] != start[0]-1 || dest[1] != start[1] )) ) {
                mask = board[dest[0]][dest[1]];
                if(mask == '_' || mask == mask.toLowerCase())
                    return true;
            }
        case 'B':
            if((dest[0]-start[0])/(dest[1]-start[1]) == 1 || (dest[0]-start[0])/(dest[1]-start[1]) == -1 ) {
                for(i = Math.min(start[0],dest[0])+1; i < Math.max(start[0],dest[0]); i++) {
                    mask = board[i][Math.min(start[1],dest[1])+i-Math.min(start[0],dest[0])];
                    if( (mask != '_' && i != dest[0] &&
                        Math.min(start[1],dest[1])+i-Math.min(start[0],dest[0]) != dest[1]) || 
                        mask != mask.toLowerCase() )
                            return false;
                }
                mask = board[dest[0]][dest[1]];
                if(mask != mask.toLowerCase())
                    return false;
                return true;
            }
            return false;
    }
}

//console.log(capture('lnsgkgsnl/6rb1/ppppppp2/7pp/9/9/PPPPPPPP1/1B5R1/LNSGKGSNL b 4pRbN 6','P'));
//throw('test');
const client = new Discord.Client()
//var testGame = new Game("a","b")

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
        //testGame.setGameData(args.slice(0,4).join(' '),args[4],"gg");
        //testGame.displayGame(message);
    } else if (command === 'help') {
        helpmessage(message,args);
    } else if (command === 'play') {
        playgame(message,args);
    } else if (command === 'accept') {
        acceptmatch(message,args);
    } else if (command === 'rules') {
        showrules(message,args);
    } else if (command === 'move') {
        //testGame.move(args[0],message);
        movepiece(message,args);
    } else if (command === 'resign') {
        resign(message,args);
    }

}) 

client.login(token)