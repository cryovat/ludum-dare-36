// ReSharper restore InconsistentNaming
var lsBanner = "\u001B[33mw/\u001B[30;41m\u25CF\u001B[33;40mS Mainfr\u001B[30;41m\u25CF\u001B[33;40mme System 36.0.2a\nCop\u001B[30;41m\u25CF\u25CF\u001B[33;40mright (C) 1986 Winter\u001B[30;41m\u25CF\u001B[33;40may Corpor\u001B[30;41m\u25CF\u25CF\u25CF\u25CF\u001B[0m\n\n\u001B[31mCRIT 0x0\u001B[30;41m\u25CF\u001B[31;40mA7: Serial cab\u001B[30;41m\u25CF\u001B[31;40me at COM01 fau\u001B[30;41m\u25CF\u001B[31;40mty\n\u001B[31mCRIT 0x00B3: D\u001B[30;41m\u25CF\u001B[31;40msk controller failu\u001B[30;41m\u25CF\u001B[31;40me\n\u001B[31mC\u001B[30;41m\u25CF\u001B[33140m\u001B[30;41m\u25CF\u001B[31;40mT 0x00B6: Keyboard co\u001B[30;41m\u25CF\u001B[31;40mtroller fail\u001B[30;41m\u25CF\u001B[31;40mre\n\n";
var osStatus = "\n\u001B[33mWARN 0x0063: Network access limited\n\u001B[31mCRIT 0x00A2: File syst\u001B[30;41m\u25CF\u001B[31;40mm damage in sect\u001B[30;41m\u25CF\u25CF\u25CF\u25CF\u001B[31;40mr 0x0\u001B[30;41m\u25CF\u001B[31;40m91\u001B[30;41m\u25CF\u25CF\u25CF\u25CF\u001B[0m\n\u001B[31mCRIT 0x00A7: Serial cable at COM03 faulty\n\n";
var osBanner = "\u001B[33mw/OS Mainframe System 36.0.2a\nCopyright (C) 1986 Winterday Corporation\n\n\u001B[0mEden Project mainframe terminal\n";
var osMotd = "\nEden Project mainframe terminal\n-------------------------------\n\nWelcome to the mainframe computer for Eden 03. You will find educational software in the /bin folder.\n\nResident briefings and technical documentation may be found in /doc.\n\nAs the mainframe is connected to systems responsible for generators and life support, we implore users to act responsibly.\n\nIf you need technical assistance, please contact OMALLEY.\n\nHave fun and play nice! \u001B[34m(Jones: your password is grail44)\n\n";
var users = [
    {
        name: 'omalley',
        password: 'nightfever77',
        isAdmin: true,
        inbox: [
            {
                from: "djones",
                subject: "Password",
                text: "i seem to have misplaced my new password. can you put a hint t\u001B[30;41m\u25CF\u001B[0me usual place?"
            },
            {
                from: "ataiga",
                subject: "RE: Simulation",
                text: "djones requested a read\u001B[30;41m\u25CF\u001B[0mut on nitrogen and carbon dioxide levels in the air supply, can you run the attached report scripts on the [MAIL TRUNCATED]"
            }
        ]
    },
    {
        name: 'djones',
        password: 'grail44',
        isAdmin: false,
        inbox: [
            {
                from: "ataiga",
                subject: "RE: Simulation",
                text: " hmm, looks like you don't have enough pr\u001B[30;41m\u25CF\u001B[0mvileges on the mainframe. i know a little trick that might work, but don't tell omalley about it, i'll send it to you soon."
            }, {
                from: "omalley",
                subject: "RE: Sensor re\x1B[30;41m\u25CF\x1B[0mdouts password",
                text: "I've generated the sensor readouts you requested. You can find them in the temp folder \x1B[30;41m\u25CF\x1B[0mn the life support controller."
            },
            {
                from: "atai\x1B[30;41m\u25CF\x1B[0ma",
                subject: "RE: RE: Simulation",
                text: "please save this to a file and apply it to the simulation file. Don't show it to omalley\n\n-- BEGIN BINPATCH PATCH --------\noffset: 0x3151\nrem: 45b\nadd:\u001B[36;43m\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u001B[0mREAUTH\u001B[36;43m\u25CF\u25CF\u25CF\u25CF\u001B[0mATAIGA\u001B[36;43m\u25CF\u001B[0maustin99\u001B[36;43m\u25CF\u25CF\u25CF\u25CF\u001B[0m\npad: 19b\n-- END BINPATCH PATCH --------"
            }
        ]
    },
    {
        name: 'ataiga',
        password: 'austin99',
        isAdmin: false,
        inbox: [
            {
                from: "djones",
                subject: "Simulation",
                text: "The articifial life simulation you sho\u001B[30;41m\u25CF\u001B[0maed me in the lab the other day was wonderful! Could you send me a copy"
            },
            {
                from: "djones",
                subject: "RE: Simulation",
                text: "Thank you for sending me a copy so quickly.\n\nWhen I run it, there's a message about memory quota exceeded. Does that happen for you too?"
            },
            {
                from: "wallack",
                subject: "Staff party",
                text: "Just a reminder of the annual staff new year's party next friday. This will be our five year ann\x1B[30;41m\u25CF\x1B[0mversary of living here!"
            },
            {
                from: "djones",
                subject: "Gas repor\x1B[30;41m\u25CF\x1B[0ms",
                text: "Hi, can you create a report for N and CO2 readouts and have omalley run it?"
            }, {
                from: "omalley",
                subject: "Need a little help",
                text: "I'm going down to the maintenan\u001B[30;41m\u25CF\u001B[0me sector to reset a circuit breaker after a malfunction in one of the generators.\n\nIt shouldn't happen, but if the life support controller \u001B[30;41m\u25CF\u001B[0mcts up due to the power fluctuations, please log into my account using the password nightfe\u001B[30;41m\u25CF\u001B[0mer77 and\nrun lsdiag.com."
            }
        ]
    }
];
var Executable = (function () {
    function Executable(name, exec, opts) {
        this.name = name;
        this.exec = exec;
        this.opts = opts;
        this.corrupt = exec ? false : true;
    }
    return Executable;
}());
var TextFile = (function () {
    function TextFile(name, text) {
        this.name = name;
        this.text = text;
        this.corrupt = text ? false : true;
    }
    return TextFile;
}());
var BinaryFile = (function () {
    function BinaryFile(name) {
        this.name = name;
    }
    return BinaryFile;
}());
var Folder = (function () {
    function Folder(name, owner) {
        this.children = [];
        this.binaryFiles = [];
        this.executables = [];
        this.textFiles = [];
        this.name = name;
        this.owner = owner;
    }
    Folder.prototype.addChild = function (name, owner) {
        var child = new Folder(name, owner || this.owner);
        this.children.push(child);
        return child;
    };
    Folder.prototype.addBinary = function (name) {
        this.binaryFiles.push(new BinaryFile(name));
    };
    Folder.prototype.addExecutable = function (name, exec, opts) {
        this.executables.push(new Executable(name, exec, opts));
    };
    Folder.prototype.addTextFile = function (name, text) {
        this.textFiles.push(new TextFile(name, text));
    };
    Folder.prototype.addCorruptExecutable = function (name) {
        this.executables.push(new Executable(name));
    };
    Folder.prototype.addCorruptTextFile = function (name) {
        this.textFiles.push(new TextFile(name));
    };
    return Folder;
}());
var loggedInAs = null;
var root = new Folder("");
var bin = root.addChild("bin");
bin.addCorruptExecutable("edu.com");
bin.addCorruptExecutable("lssim.com");
bin.addCorruptExecutable("binpatch.com");
bin.addCorruptExecutable("nuclear.com");
bin.addCorruptExecutable("gscetutor.com");
var doc = root.addChild("doc");
doc.addCorruptTextFile("crew_profiles.txt");
doc.addCorruptTextFile("eden_op_procedures.txt");
doc.addCorruptTextFile("eden_op_structure.txt");
doc.addCorruptTextFile("fun.txt");
doc.addCorruptTextFile("history_eden_1.txt");
doc.addCorruptTextFile("history_eden_2.txt");
doc.addCorruptTextFile("history_eden_3.txt");
doc.addCorruptTextFile("world_history.txt");
doc.addBinary("encyclopedia.db");
var user = root.addChild("user");
var userOmalley = user.addChild(users[0].name, users[0].name);
userOmalley.addBinary("mail.spool");
var audit = userOmalley.addChild("audit");
var danger = userOmalley.addChild("danger");
userOmalley.addChild("reports", "broken");
userOmalley.addChild("report_old", "broken");
audit.addCorruptTextFile("log0001.txt");
audit.addCorruptTextFile("log0002.txt");
audit.addCorruptTextFile("log0003.txt");
audit.addCorruptTextFile("log0004.txt");
audit.addCorruptTextFile("log0005.txt");
userOmalley.addExecutable("lsdiag.com", fakeout, {
    onStart: function (t) {
        t.echo("\u001B[33mWARN 0x00E4: Severe degradation of life support system detected.\u001B[0m\n\n\u001B[36mConnection to life support controller detected on COM3.\n\nAutomatic recovery is possible. Initiate?\n\n");
    },
    prompt: "Y to start, other to abort: "
});
danger.addExecutable("emergency.com", victory, {
    onStart: function (t) {
        t.echo("\u001B[31mWARNING: This program will trigger emergency explosives on the seals of the vault gate.\n\nDo not proceed with this action unless the science team has verified safe conditions outside, or the Eden vault\nitself has been irreparaibly damaged to the point of being unfit for human life.\n\n");
    },
    prompt: "Enter [REBIRTH] to proceed: "
});
var userDJones = user.addChild(users[1].name, users[1].name);
userDJones.addBinary("mail.spool");
userDJones.addCorruptExecutable("tgasim.com");
userDJones.addCorruptTextFile("notes1.txt");
userDJones.addTextFile("notes2.txt", "Taiga showed me a delightful simulation program she devised the other da\u001B[30;41m\u25CF\u001B[0m.\n\nI got a copy, but have had little l\u001B[30;41m\u25CF\u001B[0mck running it. Shot off a message to her asking for help.\n\nIt g\u001B[30;41m\u25CF\u001B[0mves a strange error about access control. Seems to run fine on he\u001B[30;41m\u25CF\u001B[0m user and O'Malley's.\n");
userDJones.addCorruptTextFile("notes3.txt");
userDJones.addCorruptTextFile("notes4.txt");
var userATaiga = user.addChild(users[2].name, users[2].name);
userATaiga.addBinary("mail.spool");
userATaiga.addCorruptExecutable("sim.com");
userATaiga.addCorruptTextFile("sim.source1");
userATaiga.addCorruptTextFile("sim.source2");
userATaiga.addTextFile("notes.txt", "simulation appears to work great, but should try tweaki\u001B[30;41m\u25CF\u001B[0mg the parameter to exaggerate emergent beh\u001B[30;41m\u25CF\u001B[0mi\n\n\u001B[30;41m[TRUNCATED]");
var bin = root.addChild("bin");
var currentPath = "/";
var currentFolder = root;
function printIoError(term) {
    if (loggedInAs !== null) {
        term.echo("\x1B[31mC\x1B[30;41m\u25CF\x1B[31;40mIT 0x00A4: Cou\x1B[30;41m\u25CF\x1B[31;40md not open IO de\x1B[30;41m\u25CF\u25CF\u25CF\x1B[31;40me 0x0t\x1B[30;41m\u25CF\u25CF\x1B[31;40m4t\x1B[30;41m\u25CF\u25CF\u25CF\u25CF\u25CF\x1B[31;40m");
        term.error("Command terminated: System error.");
    }
    else {
        term.error("Access denied: Not logged in.");
    }
}
function loginTerm(user) {
    return function (command, term) {
        var normalized = command.trim().toUpperCase();
        if (normalized.length === 0) {
            term.error("Login cancelled.");
            term.pop();
        }
        else if (normalized !== user.password.toUpperCase()) {
            term.error("Login failed: Invalid password.");
            term.pop();
        }
        else {
            term.echo("\x1B[32mLogin processed.");
            loggedInAs = user;
            if (setFolder("/user/" + user.name)) {
                term.echo("\u001B[36mChanged to " + currentPath + "\n\n");
            }
            term.pop();
            term.set_prompt("(" + user.name + ")# ");
        }
    };
}
function getFolderRec(index, path, current) {
    if (current.children.length === 0)
        return null;
    for (var i = 0; i < current.children.length; i++) {
        if (path[index].trim().toUpperCase() === current.children[i].name.toUpperCase()) {
            console.log(current.children[i].owner);
            if (current.children[i].owner) {
                if (loggedInAs !== null) {
                    if (loggedInAs.name.toUpperCase() !== current.children[i].owner.toUpperCase()) {
                        return null;
                    }
                }
                else {
                    return null;
                }
            }
            if (index + 1 === path.length) {
                return current.children[i];
            }
            else {
                return getFolderRec(index + 1, path, current.children[i]);
            }
        }
    }
    return null;
}
function setFolder(relativePath) {
    var parts;
    if (relativePath === ".." && currentPath.length > 1) {
        parts = currentPath.split("/");
        console.log(parts);
        if (parts.length >= 2) {
            parts.pop();
            parts.pop();
        }
        console.log(parts);
    }
    else {
        parts = (relativePath.charAt(0) === '/' ? relativePath : currentPath + relativePath).split("/");
    }
    if (parts.length === 1 || parts[1] === "") {
        currentPath = "/";
        currentFolder = root;
        return true;
    }
    var folder = getFolderRec(1, parts, root);
    if (folder !== null) {
        currentPath = parts.join("/") + "/";
        currentFolder = folder;
        return true;
    }
    return false;
}
function fakeout(command, term) {
    if (command.toUpperCase().trim() === 'Y') {
        term.echo("\n\x1B[32mStarting automatic recovery.");
        term.echo("\x1B[33mWARN 0x0023: Packet loss detected");
        term.echo("\x1B[31mCRIT 0x00A2: File syst\x1B[30;41m\u25CF\x1B[31;40mm damage in sect\x1B[30;41m\u25CF\u25CF\u25CF\u25CF\x1B[31;40mr 0x0\x1B[30;41m\u25CF\x1B[31;40m91\x1B[30;41m\u25CF\u25CF\u25CF\u25CF\x1B[0m");
        term.echo("\x1B[31mCRIT 0x00A7: Serial cable at COM03 faulty\n\n");
        term.echo("\x1B[31mCRIT 0x00A9: Read invalid value at 0x3a\x1B[30;41m\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CFp\u25CF\u25CF\u25CFo73\u25CFt0\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CFtRa\u25CF\u25CF\u25CF###\u25CF\u25CF\u25CF\u25CFxaz\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF153\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CFf\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\n\n");
        term.error("Critical memory violation: Program terminated.\n\n");
    }
    term.pop();
}
function victory(command, term) {
    window.location.href = "victory.html";
}
function mailReader(command, term) {
    var parsed = jQuery.terminal.parse_command(command), fileName;
    switch (parsed.name.toLowerCase()) {
        case 'help':
            term.echo("list      <user>   \x1B[36mList mail in inbox");
            term.echo("show      <number> \x1B[36mShow specified mail message");
            term.echo("exit               \x1B[36mExit the program\n\n");
            break;
        case 'list':
            for (var i = 0; i < loggedInAs.inbox.length; i++) {
                term.echo((i + 1) + ". (From: " + loggedInAs.inbox[i].from + ") " + loggedInAs.inbox[i].subject);
            }
            term.echo("Total: " + loggedInAs.inbox.length + "\n\n");
            break;
        case 'show':
            console.log(loggedInAs.inbox, parsed.args[0]);
            if (parsed.args.length !== 1 ||
                typeof parsed.args[0] !== "number" ||
                parsed.args[0] - 1 < 0 ||
                parsed.args[0] - 1 >= loggedInAs.inbox.length) {
                term.error("Could not execute [" + parsed.name + "]: Invalid or missing argument.");
            }
            else {
                term.echo("From    : " + loggedInAs.inbox[parsed.args[0] - 1].from);
                term.echo("Subject : " + loggedInAs.inbox[parsed.args[0] - 1].subject + "\n");
                term.echo("" + loggedInAs.inbox[parsed.args[0] - 1].text);
                term.echo("\x1B[36m\nEnd of email.\n\n");
            }
            break;
        case 'exit':
            term.echo("\x1B[32mClosing mailbox.");
            term.pop();
            break;
        default:
            term.error("Invalid command.\n\n");
    }
}
function wterm(command, term) {
    var parsed = jQuery.terminal.parse_command(command), i, fileName;
    switch (parsed.name.toLowerCase()) {
        case 'help':
            term.echo("\x1B[36mAvailable commands:\n\n");
            term.echo("login     <user>   \x1B[36mLog in as user");
            term.echo("logout             \x1B[36mRevert to public user");
            term.echo("news               \x1B[36mShow cluster news message");
            term.echo("mail               \x1B[36mRun w/OS mail client\n\n");
            term.echo("pwd                \x1B[36mPrints current directory");
            term.echo("cd        <dir>    \x1B[36mChange directory");
            term.echo("dir       <dir>    \x1B[36mPrint directory listing\n\n");
            term.echo("print     <file>   \x1B[36mPrint text file to screen");
            term.echo("run       <file>   \x1B[36mRun command file");
            term.echo("edit      <file>   \x1B[36mEdit file text");
            term.echo("delete    <file>   \x1B[36mDelete file or directory");
            term.echo("mkdir     <file>   \x1B[36mSystem version\n\n");
            term.echo("status             \x1B[36mshow system status\n\n");
            break;
        case 'login':
            if (parsed.args.length !== 1) {
                term.error("Could not execute [" + parsed.name + "]: Invalid or missing argument.");
            }
            else {
                var user = null, name = parsed.args[0].trim().toUpperCase();
                for (i = 0; i < users.length; i++) {
                    if (users[i].name.toUpperCase() === name) {
                        user = users[i];
                    }
                }
                if (user === null) {
                    term.error("Could not execute [" + parsed.name + "]: Invalid user account.");
                }
                else {
                    term.push(loginTerm(user), {
                        prompt: 'password: ',
                        onStart: function (t) { return t.set_mask(true); },
                        onExit: function (t) { return t.set_mask(false); },
                        name: 'dummy' + Math.random()
                    });
                }
            }
            break;
        case 'logout':
            if (loggedInAs === null) {
                printIoError(term);
            }
            else {
                term.echo("\x1B[32mLogout processed.");
                term.set_prompt("# ");
                loggedInAs = null;
            }
            break;
        case 'news':
            term.echo("\x1B[36mMessage of the day (set by OMALLEY, 1992-01-04 14:33)");
            term.echo(osMotd);
            break;
        case 'mail':
            if (loggedInAs === null) {
                printIoError(term);
            }
            else {
                term.push(mailReader, {
                    prompt: 'mail: ',
                    name: 'dummy' + Math.random()
                });
                term.echo("\u001B[36mYou have 0 unr\u001B[30;41m\u25CF\u001B[0mad mail of " + loggedInAs.inbox.length + " total.\n");
            }
            break;
        case 'pwd':
            term.echo("\u001B[36m" + currentPath + "\n\n");
            break;
        case 'cd':
            if (parsed.args.length !== 1) {
                term.error("Could not execute [" + parsed.name + "]: Invalid or missing argument.");
                break;
            }
            if (!setFolder(parsed.args[0])) {
                term.error("Could not change directory: Invalid path or access denied.");
                break;
            }
        case 'dir':
        case 'ls':
            if (currentPath.length > 1) {
                term.echo("..");
            }
            for (i = 0; i < currentFolder.children.length; i++) {
                term.echo(currentFolder.children[i].name + "/");
            }
            for (i = 0; i < currentFolder.executables.length; i++) {
                term.echo("\u001B[36m" + currentFolder.executables[i].name);
            }
            for (i = 0; i < currentFolder.textFiles.length; i++) {
                term.echo("" + currentFolder.textFiles[i].name);
            }
            for (i = 0; i < currentFolder.binaryFiles.length; i++) {
                term.echo("" + currentFolder.binaryFiles[i].name);
            }
            break;
        case 'print':
            if (parsed.args.length !== 1) {
                term.error("Could not execute [" + parsed.name + "]: Invalid or missing argument.");
            }
            fileName = parsed.args[0].trim().toUpperCase();
            for (i = 0; i < currentFolder.executables.length; i++) {
                if (currentFolder.executables[i].name.toUpperCase() === fileName) {
                    term.error("Could not print [" + fileName + "]: File is an executable.");
                    return;
                }
            }
            for (i = 0; i < currentFolder.binaryFiles.length; i++) {
                if (currentFolder.binaryFiles[i].name.toUpperCase() === fileName) {
                    term.error("Could not print [" + fileName + "]: File is binary.");
                    return;
                }
            }
            for (i = 0; i < currentFolder.textFiles.length; i++) {
                if (currentFolder.textFiles[i].name.toUpperCase() === fileName) {
                    if (currentFolder.textFiles[i].corrupt) {
                        term.echo("\x1B[31mC\x1B[30;41m\u25CF\x1B[31;40mIT 0x00A4: Cou\x1B[30;41m\u25CF\x1B[31;40md not open IO de\x1B[30;41m\u25CF\u25CF\u25CF\x1B[31;40me 0x0t\x1B[30;41m\u25CF\u25CF\x1B[31;40m4t\x1B[30;41m\u25CF\u25CF\u25CF\u25CF\u25CF\x1B[31;40m");
                        term.error("Execution of [PRINT] terminated: System error.");
                        return;
                    }
                    else {
                        term.echo(currentFolder.textFiles[i].text);
                        return;
                    }
                }
            }
            term.error("Could not print [" + fileName + "]: File not found.");
            break;
        case 'run':
            if (parsed.args.length !== 1) {
                term.error("Could not execute [" + parsed.name + "]: Invalid or missing argument.");
            }
            fileName = parsed.args[0].trim().toUpperCase();
            for (i = 0; i < currentFolder.executables.length; i++) {
                if (currentFolder.executables[i].name.toUpperCase() === fileName) {
                    if (currentFolder.executables[i].corrupt) {
                        term.echo("\x1B[31mC\x1B[30;41m\u25CF\x1B[31;40mIT 0x00A4: Cou\x1B[30;41m\u25CF\x1B[31;40md not open IO de\x1B[30;41m\u25CF\u25CF\u25CF\x1B[31;40me 0x0t\x1B[30;41m\u25CF\u25CF\x1B[31;40m4t\x1B[30;41m\u25CF\u25CF\u25CF\u25CF\u25CF\x1B[31;40m");
                        term.error("Execution of [" + fileName + "] terminated: System error.");
                    }
                    else {
                        term.push(currentFolder.executables[i].exec, currentFolder.executables[i].opts);
                    }
                    return;
                }
            }
            for (i = 0; i < currentFolder.binaryFiles.length; i++) {
                if (currentFolder.binaryFiles[i].name.toUpperCase() === fileName) {
                    term.error("Could not run [" + fileName + "]: File is binary.");
                    return;
                }
            }
            for (i = 0; i < currentFolder.textFiles.length; i++) {
                if (currentFolder.textFiles[i].name.toUpperCase() === fileName) {
                    term.error("Could not run [" + fileName + "]: File is binary.");
                    return;
                }
            }
            term.error("Could not run [" + fileName + "]: File not found.");
            break;
        case 'edit':
        case 'delete':
        case 'mkdir':
            if (parsed.args.length !== 1) {
                term.error("Could not execute [" + parsed.name + "]: Invalid or missing argument.");
            }
            else {
                printIoError(term);
            }
            break;
        case 'status':
            term.echo(osStatus);
            break;
        case 'about':
            term.echo(osBanner);
            break;
        case 'clear':
        case 'cls':
            term.clear();
            break;
        default:
            term.error("Invalid command.\n\n");
    }
    //var match: string = null, i: number;
    //for (i = 0; i < users.length; i++) {
    //    if (users[i].name.toUpperCase() === command.toUpperCase().trim()) {
    //        loginAs = users[i];l
    //    }
    //}
    //if (match === null) {
    //    term.error("Invalid username.\n\n");
    //    term.echo("Valid users for this terminal are:\n");
    //    for (i = 0; i < users.length; i++) {
    //        term.echo(`${i}.\t ${users[i].name}\n`);
    //    }
    //} else {
    //    term.set_prompt("PASSWD: ");
    //}
}
;
jQuery(function ($, undefined) {
    var deadline = new Date(new Date().getTime() + 5 * 60000);
    var game = $("#term_demo").terminal(wterm, {
        greetings: osBanner + osStatus,
        width: '30rem',
        height: '20rem',
        clear: false,
        exit: false,
        history: false,
        prompt: '# '
    });
    var left = $("#term_timeleft").terminal(function (_, __) { }, {
        greetings: lsBanner,
        width: '30rem',
        height: '20rem',
        outputLimit: 30,
        clear: false,
        exit: false,
        history: false,
    });
    left.pause();
    // From https://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep:
    function beep() {
        var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
        snd.play();
    }
    var dummy = false;
    function processDeadline() {
        var remain = deadline.getTime() - new Date().getTime();
        if (remain <= 1) {
            window.location.href = "death.html";
        }
        else {
            left.echo("\x1B[31mCRIT 0x00C1: Au\x1B[30;41m\u25CF\x1B[31;40momatic system repair fail\x1B[30;41m\u25CF\x1B[31;40md.");
            left.echo("\u001B[33mWARN 0x0\u001B[30;41m\u25CF\u001B[33;40m63: Remaining air supply: " + Math.floor(remain / 60000) + " minutes, " + Math.floor((remain % 60000) / 1000) + " secon\u001B[30;41m\u25CF\u001B[33;40ms.\n\n");
            if (dummy)
                beep();
            dummy = true;
        }
    }
    setInterval(processDeadline, 15000);
    processDeadline();
    game.focus();
});
//# sourceMappingURL=app.js.map