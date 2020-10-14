const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const fetch = require('node-fetch');
const {RichEmbed} = require('discord.js');

client.on('ready', () => {
    console.log("I'm Online");
});

const api_key = ``;

const Day = new Date();
const H = Day.getHours(); 
let M = Day.getMinutes();
if (M <= 9) { M = `0${M}` };
const HM = `${H}${M}`;
const prefix = "^^";
console.log(`${H}:${M}`);

const iron = `<:IRON:668725018125139974>`;
const bronze = `<:BRONZE:668175305113862175>`;
const silver = `<:SILVER:668176066770108447>`;
const gold = `<:GOLD:668164473869303829>`;
const platinium = `<:PLATINIUM:668176251525267456>`;
const diamond = `<:DIAMOND:668176526662959125>`;
const master = `<:MASTER:668176912212033618>`;
const grandmaster = `<:GRANDMASTER:668176970089103443>`;
const challenger = `<:CHALLENGER:668177035587485747>`;
const unranked = `<:UNRANKED:669477946129645568>`;
const BanVide = ``;
//autre
const LeBleu = `<:LeBleu:669473551186657280>`;
const LeRouge = `<:LeRouge:669477917851648001>`;

//Champion
const Shaco = `<:ShacoSquare:669171852622430228>`;
const Sona = `<:SonaSquare:669171926186328079>`;
const Taric = `<:TaricSquare:669171954644811792>`;
const Veigar = `<:VeigarSquare:669171937225736203>`;
const Swain = `<:SwainSquare:669171901297459200>`;
const Wukong = `<:WukongSquare:669171917839663134>`;
const Vayne = `<:VayneSquare:669171942095454210>`;
const Skarner = `<:SkarnerSquare:669171929592233997>`;
const Udyr = `<:UdyrSquare:669171944712568842>`;
const Yorick = `<:YorickSquare:669172933364547584>`;
const Talon = `<:TalonSquare:669171930972028929>`;
const Shen = `<:ShenSquare:669171905340637206>`;
const Xerath = `<:XerathSquare:669171937980841996>`;
const Shyvana = `<:ShyvanaSquare:669171856523395092>`;
const Volibear = `<:VolibearSquare:669171937263747073>`;
const Varus = `<:VarusSquare:669171915713413120>`;
const Viktor = `<:ViktorSquare:669171940170268682>`;
const Ziggs = `<:ZiggsSquare:669171943269728276>`;
const Syndra = `<:SyndraSquare:669171935854460938>`;
const Zyra = `<:ZyraSquare:669171938601467934>`;
const Zac = `<:ZacSquare:669171934814273537>`;
const Yasuo = `<:YasuoSquare:669171940816060438>`;
const VelKoz = `<:VelKozSquare:669171940245766176>`;
const Taliyah = `<:TaliyahSquare:669171954892275722>`;
const TahmKench = `<:Tahm_KenchSquare:669172929929543681>`;
const Zed = `<:ZedSquare:669171943253213185>`;
const Vi = `<:ViSquare:669171945131999232>`;
const Thresh = `<:ThreshSquare:669171939486466059>`;
const Sylas = `<:SylasSquare:669171901246996511>`;
const Sett = `<:SettSquare:669171849439084544>`;
const TwistedFate = `<:Twisted_FateSquare:669171936693321732>`;
const XinZhao = `<:Xin_ZhaoSquare:669171912588656672>`;
const Urgot = `<:UrgotSquare:669171910466076700>`;
const Vladimir = `<:VladimirSquare:669171933165649961>`;
const Sion = `<:SionSquare:669171860466040873>`;
const Sivir = `<:SivirSquare:669171884763643934>`;
const Soraka = `<:SorakaSquare:669174341224628234>`;
const Teemo = `<:TeemoSquare:669171942082871306>`;
const Tristana = `<:TristanaSquare:669171955932594176>`;
const Warwick = `<:WarwickSquare:669171955311575044>`;
const Tryndamere = `<:TryndamereSquare:669171943852998666>`;
const Zilean = `<:ZileanSquare:669171944393932821>`;
const Singed = `<:SingedSquare:669171858796576768>`;
const Twitch = `<:TwitchSquare:669171940606476298>`;
const Annie = `<:AnnieSquare:669167121309237270>`;
const Olaf = `<:OlafSquare:669170243490414604>`;
const Galio = `<:GalioSquare:669167164619489280>`;
const LeBlanc = `<:LeBlancSquare:669170233839452170>`;
const Fiddlesticks = `<:FiddlesticksSquare:669167164523282432>`;
const Kayle = `<:KayleSquare:669170185982443541>`;
const MasterYi = `<:Master_YiSquare:669170238260117524>`;
const Alistar = `<:AlistarSquare:669167102011244577>`;
const Ryze = `<:RyzeSquare:669170263656628255>`;
const Nunu = `<:Nunu__WillumpSquare:669170218077126666>`;
const MissFortune = `<:MissFortuneSquare:669170217141665832>`;
const Ashe = `<:AsheSquare:669167127567269903>`;
const Jax = `<:JaxSquare:669167135309824001>`;
const Morgana = `<:MorganaSquare:669170211680813059>`;
const Evelynn = `<:EvelynnSquare:669167102543790090>`;
const Karthus = `<:KarthusSquare:669170226662998027>`;
const ChoGath = `<:ChoGathSquare:669167142146539521>`;
const Amumu = `<:AmumuSquare:669167111179862022>`;
const Rammus = `<:RammusSquare:669170263535124490>`;
const Anivia = `<:AniviaSquare:669167157665595412>`;
const DrMundo = `<:DrMundoSquare:669167140238131220>`;
const Kassadin = `<:KassadinSquare:669170237819584533>`;
const Irelia = `<:IreliaSquare:669167110324224002>`;
const Janna = `<:JannaSquare:669167130377453571>`;
const Gangplank = `<:GangplankSquare:669167164573483038>`;
const Corki = `<:CorkiSquare:669167100903817217>`;
const Karma = `<:KarmaSquare:669170126817591336>`;
const Trundle = `<:TrundleSquare:669171940157816857>`;
const Caitlyn = `<:CaitlynSquare:669167132738584576>`;
const Blitzcrank = `<:BlitzcrankSquare:669167139801792512>`;
const Malphite = `<:MalphiteSquare:669170230333014016>`;
const Katarina = `<:KatarinaSquare:669170259160465428>`;
const Nocturne = `<:NocturneSquare:669170241208582204>`;
const Maokai = `<:MaokaiSquare:669170240935952384>`;
const Renekton = `<:RenektonSquare:669170243687546881>`;
const JarvanIV = `<:JarvanIVSquare:669167138615066624>`;
const Elise = `<:EliseSquare:669167137159381022>`;
const Orianna = `<:OriannaSquare:669170235655454730>`;
const Brand = `<:BrandSquare:669167142226231333>`;
const LeeSin = `<:Lee_SinSquare:669170220975259668>`;
const Rumble = `<:RumbleSquare:669170240281772032>`;
const Cassiopeia = `<:CassiopeiaSquare:669167132457828365>`;
const Heimerdinger = `<:HeimerdingerSquare:669167143014629376>`;
const Nasus = `<:NasusSquare:669170244106846209>`;
const Nidalee = `<:NidaleeSquare:669170238671028243>`;
const Poppy = `<:PoppySquare:669170263350313016>`;
const Gragas = `<:GragasSquare:669167134684741652>`;
const Pantheon = `<:PantheonSquare:669170218043572234>`;
const Ezreal = `<:EzrealSquare:669167140388995082>`;
const Mordekaiser = `<:MordekaiserSquare:669170211227697182>`;
const Akali = `<:AkaliSquare:669167046902415370>`;
const Kennen = `<:KennenSquare:669170260850507811>`;
const Garen = `<:GarenSquare:669167141601148939>`;
const Leona = `<:LeonaSquare:669170233478479893>`;
const Malzahar = `<:MalzaharSquare:669170263174152216>`;
const Riven = `<:RivenSquare:669170242303426571>`;
const KogMaw = `<:KogMawSquare:669170237161078786>`;
const Lux = `<:LuxSquare:669170237656268840>`;
const Ahri = `<:AhriSquare:669167046428459009>`;
const Graves = `<:GravesSquare:669167135142051861>`;
const Fizz = `<:FizzSquare:669167134546329610>`;
const Rengar = `<:RengarSquare:669170245683904523>`;
const Nautilus = `<:NautilusSquare:669170243486220288>`;
const Sejuani = `<:SejuaniSquare:669170246250135572>`;
const Fiora = `<:FioraSquare:669167164548317184>`;
const Lulu = `<:LuluSquare:669170229967847424>`;
const Draven = `<:DravenSquare:669167133074259968>`;
const Hecarim = `<:HecarimSquare:669169858524741653>`;
const KhaZix = `<:KhaZixSquare:669170225039671329>`;
const Darius = `<:DariusSquare:669167164451848215> `;
const Jayce = `<:JayceSquare:669167131274772513>`;
const Lissandra = `<:LissandraSquare:669170243083567114>`;
const Diana = `<:DianaSquare:669167127780917271>`;
const Quinn = `<:QuinnSquare:669170241435336716>`;
const AurelionSol = `<:Aurelion_SolSquare:669167157812133888>`;
const KaiSa = `<:KaiSaSquare:669167105467482142>`;
const Gnar = `<:GnarSquare:669167134768627743>`;
const Braum = `<:BraumSquare:669167127768334336>`;
const Jhin = `<:JhinSquare:669167165336846366>`;
const Kindred = `<:KindredSquare:669170228537589782>`;
const Jinx = `<:JinxSquare:669167143257899008>`;
const Senna = `<:SennaSquare:669170209411694597>`;
const Lucian = `<:LucianSquare:669170234132791296>`;
const Kled = `<:KledSquare:669170203203993625>`;
const Ekko = `<:EkkoSquare:669167133409673216>`;
const Aatrox = `<:AatroxSquare:669167042166784019>`;
const Nami = `<:NamiSquare:669170241494056990>`;
const Azir = `<:AzirSquare:669167127512612874>`;
const Illaoi = `<:IllaoiSquare:669167164611231786>`;
const RekSai = `<:RekSaiSquare:669171710410489878>`;
const Ivern = `<:IvernSquare:669167164611231755> `;
const Kalista = `<:KalistaSquare:669167152967843842>`;
const Bard = `<:BardSquare:669167142561775647>`;
const Camille = `<:CamilleSquare:669167171943006248>`;
const Rakan = `<:RakanSquare:669171708443361282>`;
const Xayah = `<:XayahSquare:669172931968106496>`;
const Kayn = `<:KaynSquare:669170195738263563>`;
const Ornn = `<:OrnnSquare:669170213492752405>`;
const Zoe = `<:ZoeSquare:669171913612066817>`;
const Pyke = `<:PykeSquare:669170206781865995>`;
const Neeko = `<:NeekoSquare:669170217368420389>`;
const Yuumi = `<:YuumiSquare:669171913431449620>`;
const Qiyana = `<:QiyanaSquare:669170218186178560>`;
const Aphelios = `<:ApheliosSquare:669167069698457621>`;


const findId = (id) => {
    switch (id) {
        case 1: return Annie; break;
        case 2: return Olaf; break;
        case 3: return Galio; break;
        case 4: return TwistedFate; break;
        case 5: return XinZhao; break;
        case 6: return Urgot; break;
        case 7: return LeBlanc; break;
        case 8: return Vladimir; break;
        case 9: return Fiddlesticks; break;
        case 10: return Kayle; break;
        case 11: return MasterYi; break;
        case 12: return Alistar; break;
        case 13: return Ryze; break;
        case 14: return Sion; break;
        case 15: return Sivir; break;
        case 16: return Soraka; break;
        case 17: return Teemo; break;
        case 18: return Tristana; break;
        case 19: return Warwick; break;
        case 20: return Nunu; break;
        case 21: return MissFortune; break;
        case 22: return Ashe; break;
        case 23: return Tryndamere; break;
        case 24: return Jax; break;
        case 25: return Morgana; break;
        case 26: return Zilean; break;
        case 27: return Singed; break;
        case 28: return Evelynn; break;
        case 29: return Twitch; break;
        case 30: return Karthus; break;
        case 31: return ChoGath; break;
        case 32: return Amumu; break;
        case 33: return Rammus; break;
        case 34: return Anivia; break;
        case 35: return Shaco; break;
        case 36: return DrMundo; break;
        case 37: return Sona; break;
        case 38: return Kassadin; break;
        case 39: return Irelia; break;
        case 40: return Janna; break;
        case 41: return Gangplank; break;
        case 42: return Corki; break;
        case 43: return Karma; break;
        case 44: return Taric; break;
        case 45: return Veigar; break;
        case 48: return Trundle; break;
        case 50: return Swain; break;
        case 51: return Caitlyn; break;
        case 53: return Blitzcrank; break;
        case 54: return Malphite; break;
        case 55: return Katarina; break;
        case 56: return Nocturne; break;
        case 57: return Maokai; break;
        case 58: return Renekton; break;
        case 59: return JarvanIV; break;
        case 60: return Elise; break;
        case 61: return Orianna; break;
        case 62: return Wukong; break;
        case 63: return Brand; break;
        case 64: return LeeSin; break;
        case 67: return Vayne; break;
        case 68: return Rumble; break;
        case 69: return Cassiopeia; break;
        case 72: return Skarner; break;
        case 74: return Heimerdinger; break;
        case 75: return Nasus; break;
        case 76: return Nidalee; break;
        case 77: return Udyr; break;
        case 78: return Poppy; break;
        case 79: return Gragas; break;
        case 80: return Pantheon; break;
        case 81: return Ezreal; break;
        case 82: return Mordekaiser; break;
        case 83: return Yorick; break;
        case 84: return Akali; break;
        case 85: return Kennen; break;
        case 86: return Garen; break;
        case 89: return Leona; break;
        case 90: return Malzahar; break;
        case 91: return Talon; break;
        case 92: return Riven; break;
        case 96: return KogMaw; break;
        case 98: return Shen; break;
        case 99: return Lux; break;
        case 101: return Xerath; break;
        case 102: return Shyvana; break;
        case 103: return Ahri; break;
        case 104: return Graves; break;
        case 105: return Fizz; break;
        case 106: return Volibear; break;
        case 107: return Rengar; break;
        case 110: return Varus; break;
        case 111: return Nautilus; break;
        case 112: return Viktor; break;
        case 113: return Sejuani; break;
        case 114: return Fiora; break;
        case 115: return Ziggs; break;
        case 117: return Lulu; break;
        case 119: return Draven; break;
        case 120: return Hecarim; break;
        case 121: return KhaZix; break;
        case 122: return Darius; break;
        case 126: return Jayce; break;
        case 127: return Lissandra; break;
        case 131: return Diana; break;
        case 133: return Quinn; break;
        case 134: return Syndra; break;
        case 136: return AurelionSol; break;
        case 141: return Kayn; break;
        case 142: return Zoe; break;
        case 143: return Zyra; break;
        case 145: return KaiSa; break;
        case 150: return Gnar; break;
        case 154: return Zac; break;
        case 157: return Yasuo; break;
        case 161: return VelKoz; break;
        case 163: return Taliyah; break;
        case 164: return Camille; break;
        case 201: return Braum; break;
        case 202: return Jhin; break;
        case 203: return Kindred; break;
        case 222: return Jinx; break;
        case 223: return TahmKench; break;
        case 235: return Senna; break;
        case 236: return Lucian; break;
        case 238: return Zed; break;
        case 240: return Kled; break;
        case 245: return Ekko; break;
        case 246: return Qiyana; break;
        case 254: return Vi; break;
        case 266: return Aatrox; break;
        case 267: return Nami; break;
        case 268: return Azir; break;
        case 350: return Yuumi; break;
        case 412: return Thresh; break;
        case 420: return Illaoi; break;
        case 421: return RekSai; break;
        case 427: return Ivern; break;
        case 429: return Kalista; break;
        case 432: return Bard; break;
        case 497: return Rakan; break;
        case 498: return Xayah; break;
        case 516: return Ornn; break;
        case 517: return Sylas; break;
        case 518: return Neeko; break;
        case 523: return Aphelios; break;
        case 555: return Pyke; break;
        case 875: return Sett; break;
    }
};
const getSummoner = async (Name, message) => {
    try {
        let responce = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${Name}?api_key=${api_key}`);
        let data = await responce.json();
        if (data.status != undefined) {
            if (data.status.status_code === 404) {/*404 = DATA NOT FOUND*/
                message.channel.sendMessage(`Ce pseudo ${Name} est introuvable`);
                console.log(`Ce pseudo ${Name} est introuvable`);
                return;
            } else if (data.status.status_code === 400) {/*400 = BAD REQUEST*/
                message.channel.sendMessage(`La commande a été mal executé`);
                console.log(`La commande a été mal executé`);
                return;
            } else if (data.status.status_code === 403) {/*403 = FORBIDDEN*/
                message.channel.sendMessage(`403: Forbidden`);
                console.log(`403: Forbidden`);
                return;
            } else {
                message.channel.sendMessage(`Une erreur est survenue 0`);
                console.log(`Une erreur est survenue 0`);
                return;
            }
        } else {
            return data;
        }
        // User.profile = data
    } catch (error) {
        console.error(error);
    }
};
const getActiveGame = async (data, message) => {
    try {
        let summonerId = data.id;
        let profile = await fetch(`https://euw1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerId}?api_key=${api_key}`);
        let dataCurrentGame = await profile.json();
        if (dataCurrentGame.status != undefined) {
            if (dataCurrentGame.status.status_code === 404) {
                message.channel.sendMessage(`${data.name} n'est actuellement pas en game`);
                console.log(`${data.name} n'est actuellement pas en game`);
                return;
            } else if (dataCurrentGame.status.status_code === 400) {/*400 = BAD REQUEST*/
                message.channel.sendMessage(`La commande a été mal executé`);
                console.log(`La commande a été mal executé`);
                return;
            } else {
                message.channel.sendMessage(`Une erreur est  1`);
                console.log(`Une erreur est survenue 1`);
                return;
            }
        }else {
            return dataCurrentGame;
        };
        // User.currentGame = await dataCurrentGame
    } catch (error) {
        console.error(error)
    }
};

const getDataOfActiveGame = async (data, message) => {
    try {
        let DataActiveGame = {Game: [], joueurs: [],};
        DataActiveGame.Game.push(data.participants)
        for (const PAP of data.participants) {
            let Joueur = await fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${PAP.summonerId}?api_key=${api_key}`)
            let dataJoueurs = await Joueur.json()
            if (dataJoueurs.status != undefined) {
                if (dataJoueurs.status.status_code === 404) {
                    message.channel.sendMessage(`${data.name} n'est actuellement pas en game`);
                    console.log(`${data.name} n'est actuellement pas en game`);
                    return;
                } else if (dataJoueurs.status.status_code === 400) {/*400 = BAD REQUEST*/
                    message.channel.sendMessage(`La commande a été mal executé`);
                    console.log(`La commande a été mal executé`);
                    return;
                } else {
                    message.channel.sendMessage(`Une erreur est  1`);
                    console.log(`Une erreur est survenue 1`);
                    return;
                }
            }else {
                if (dataJoueurs[0] === undefined) {
                    dataJoueurs[0] = []
                } else {
                    dataJoueurs[0].ChampionId = PAP.championId
                }
                DataActiveGame.joueurs.push(dataJoueurs);
            };
        }
        DataActiveGame.bannedChamp = data.bannedChampions
        console.log(DataActiveGame);
        return DataActiveGame;
    } catch (error) {
        console.error(error)
    }
};

const getRankIcone = dataDesJoueurs => {
    console.log(dataDesJoueurs.joueurs);
    for (let POP of dataDesJoueurs.joueurs) {
        console.log(POP[0].queueType);
        if (POP[0].tier === undefined) {
            POP.splice(0, 0, {tier: "UNRANKED", rank: ""})
        } else {};
        if (POP[0].queueType === 'RANKED_SOLO_5x5') {} else if (POP[0].queueType === 'RANKED_FLEX_SR' && POP[1].queueType === undefined) {} else if (POP[0].queueType === 'RANKED_FLEX_SR' && POP[1].queueType === 'RANKED_SOLO_5x5') {
            let copie = [];
            copie.push(POP[1])
            POP.splice(1, 1)
            POP.splice(0, 0, copie[0])
        } else if (POP[0].queueType === undefined) {} else {
            console.log("Queue Type ERROR");
        }
        if (POP[0].queueType === 'RANKED_SOLO_5x5') {
            if (POP[0].tier === "IRON") {
                POP[0].rankIcone = iron
            } else if (POP[0].tier === "BRONZE") {
                POP[0].rankIcone = bronze
            } else if (POP[0].tier === "SILVER") {
                POP[0].rankIcone = silver
            } else if (POP[0].tier === "GOLD") {
                POP[0].rankIcone = gold
            } else if (POP[0].tier === "PLATINUM") {
                POP[0].rankIcone = platinium
            } else if (POP[0].tier === "DIAMOND") {
                POP[0].rankIcone = diamond
            } else if (POP[0].tier === "MASTER") {
                POP[0].rankIcone = master
                POP[0].rank = ""
            } else if (POP[0].tier === "GRANDMASTER") {
                POP[0].rankIcone = grandmaster
                POP[0].rank = ""
            } else if (POP[0].tier === "CHALLENGER") {
                POP[0].rankIcone = challenger
                POP[0].rank = ""
            } else {
                console.log("TIER ERROR");
            };
        } else if (POP[0].tier === "UNRANKED") {
            POP[0].rankIcone = unranked
        } else {
            console.log('ERROR "getRankIcone"');
        };
    };
    return dataDesJoueurs;
};

const getChampionIcone = (data) => {
    for (let PIP of data.Game[0]) {
        PIP.championIcone = findId(PIP.championId) 
    }
    return data;
};

const getBannedChampionsIcone = (data) => {
    data.BannedChampionsIcone = []
    for (let P4P of data.bannedChamp) {
        if (findId(P4P.championId) === undefined) {
            data.BannedChampionsIcone.push(BanVide)
        } else if (findId(P4P.championId) != undefined) {
            data.BannedChampionsIcone.push(findId(P4P.championId))
        }
    }
    console.log();
    return data;
};

const createEmbed = (data, message, Name) => {
    const embed = new RichEmbed()
        .setTitle(`${Name} Active Game`)
        .setDescription('Summoner\'s Rift')
        .addField('Blue Team',`
        ${data.Game[0][0].championIcone}**${data.Game[0][0].summonerName}**
        ${data.Game[0][1].championIcone}**${data.Game[0][1].summonerName}**
        ${data.Game[0][2].championIcone}**${data.Game[0][2].summonerName}**
        ${data.Game[0][3].championIcone}**${data.Game[0][3].summonerName}**
        ${data.Game[0][4].championIcone}**${data.Game[0][4].summonerName}**
        `, true)
        .addField('Rank', `
        ${data.joueurs[0][0].rankIcone}${data.joueurs[0][0].tier} ${data.joueurs[0][0].rank} (${data.joueurs[0][0].leaguePoints} LP)
        ${data.joueurs[1][0].rankIcone}${data.joueurs[1][0].tier} ${data.joueurs[1][0].rank} (${data.joueurs[1][0].leaguePoints} LP)
        ${data.joueurs[2][0].rankIcone}${data.joueurs[2][0].tier} ${data.joueurs[2][0].rank} (${data.joueurs[2][0].leaguePoints} LP)
        ${data.joueurs[3][0].rankIcone}${data.joueurs[3][0].tier} ${data.joueurs[3][0].rank} (${data.joueurs[3][0].leaguePoints} LP)
        ${data.joueurs[4][0].rankIcone}${data.joueurs[4][0].tier} ${data.joueurs[4][0].rank} (${data.joueurs[4][0].leaguePoints} LP)
        `, true)
        .addField('Stats', `
        ${unranked} ${data.joueurs[0][0].rank}
        ${unranked} ${data.joueurs[1][0].rank}
        ${unranked} ${data.joueurs[2][0].rank}
        ${unranked} ${data.joueurs[3][0].rank}
        ${unranked} ${data.joueurs[4][0].rank}
        `, true)
        .addField('Red Team',`
        ${data.Game[0][5].championIcone}**${data.Game[0][5].summonerName}**
        ${data.Game[0][6].championIcone}**${data.Game[0][6].summonerName}**
        ${data.Game[0][7].championIcone}**${data.Game[0][7].summonerName}**
        ${data.Game[0][8].championIcone}**${data.Game[0][8].summonerName}**
        ${data.Game[0][9].championIcone}**${data.Game[0][9].summonerName}**
        `, true)
        .addField('Rank', `
        ${data.joueurs[5][0].rankIcone}${data.joueurs[5][0].tier} ${data.joueurs[5][0].rank} (${data.joueurs[5][0].leaguePoints} LP)
        ${data.joueurs[6][0].rankIcone}${data.joueurs[6][0].tier} ${data.joueurs[6][0].rank} (${data.joueurs[6][0].leaguePoints} LP)
        ${data.joueurs[7][0].rankIcone}${data.joueurs[7][0].tier} ${data.joueurs[7][0].rank} (${data.joueurs[7][0].leaguePoints} LP)
        ${data.joueurs[8][0].rankIcone}${data.joueurs[8][0].tier} ${data.joueurs[8][0].rank} (${data.joueurs[8][0].leaguePoints} LP)
        ${data.joueurs[9][0].rankIcone}${data.joueurs[9][0].tier} ${data.joueurs[9][0].rank} (${data.joueurs[9][0].leaguePoints} LP)
        `, true)
        .addField('Stats', `
        ${unranked} ${data.joueurs[5][0].rank}
        ${unranked} ${data.joueurs[6][0].rank}
        ${unranked} ${data.joueurs[7][0].rank}
        ${unranked} ${data.joueurs[8][0].rank}
        ${unranked} ${data.joueurs[9][0].rank}
        `, true)
        .addField('Ban', `${LeBleu} ${data.BannedChampionsIcone[0]}${data.BannedChampionsIcone[1]}${data.BannedChampionsIcone[2]}${data.BannedChampionsIcone[3]}${data.BannedChampionsIcone[4]}  ${LeRouge} ${data.BannedChampionsIcone[5]}${data.BannedChampionsIcone[6]}${data.BannedChampionsIcone[7]}${data.BannedChampionsIcone[8]}${data.BannedChampionsIcone[9]}`, true)
        .setColor('#eee')
        .setFooter('Rylow SAN')
        message.channel.sendMessage(embed);
};

const findGame = async (Name, message) => {
    const Summoner = await getSummoner(Name, message);
    const ActiveGame = await getActiveGame(Summoner, message);
    if (ActiveGame) {
        const DataActiveGame = await getDataOfActiveGame(ActiveGame, message);
        getRankIcone(DataActiveGame)
        getChampionIcone(DataActiveGame)
        getBannedChampionsIcone(DataActiveGame);
        createEmbed(DataActiveGame, message, Name)
    }else if (ActiveGame === undefined) {
        return;
    } else {
        console.log("dqsdqsdq");
    }
    
};
client.on('message', message => {
    if (message.author.bot) return;
    if (HM >= `600` && HM <= `759`) {
        let role = message.guild.roles.find('name', 'Yeslife')
        if (message.member.roles.find("name", "Yeslife")) {} else if (!message.member.roles.find("name", "Yeslife")) {
            message.member.addRole(role)
            message.channel.sendMessage(`Le bg il est en YesLife ${H}:${M}`)
        }
    };
    
    if (!message.content.startsWith(prefix)) return;

    if (message.content === prefix + 'embed') {
        message.channel.sendMessage(embed);
    };
    
    
    if (message.content === prefix + "ayy") {};
    if (message.content === prefix + 'ping') {
        message.channel.sendMessage(`Pong!  \`${message.createdTimestamp - Date.now()} ms\``);
    };
    if (message.content.startsWith(prefix + 'lol')) {
        const pseudo = message.content.slice(6)
        console.log(pseudo);
        findGame(pseudo, message)
    };
    if (message.content.startsWith(prefix + 'max')) {
        findGame(`lecyberboucher`, message)
        findGame(`lWhats Up Guys`, message)
        findGame(`The French Yasuo`, message)
    };
    if (message.content.startsWith(prefix + 'Bro')) {
        const lololo = async () => {
            const name = await findGame(`lecyberboucher`, message);
            const name1 = await findGame(`lWhats Up Guys`, message);
            const name2 = await findGame(`The French Yasuo`, message);
            const name3 = await findGame(`Xavvoss`, message);
            const name4 = await findGame(`Regard un mouton`, message);
            const name5 = await findGame(`Rylow`, message);
            const name6 = await findGame(`Araknog`, message);
            const name9 = await findGame(`bowser002`, message);
        };
        lololo()
    };
});
client.login(settings.token)