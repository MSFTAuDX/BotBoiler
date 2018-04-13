import * as BotBoiler from '../../src/botboiler';

import AlarmBot, { AlarmUser, AlarmConversation, alarmBotSymbols } from "./alarmBot";
import * as dialogs from './dialogs/dialogIndex';

import * as topics from './topics/topics';

class app{
    protected _startup:BotBoiler.Startup;    

    constructor() {
        this._startup = new BotBoiler.Startup()
        .UseState<AlarmUser, AlarmConversation>()        
        .UseStateStore<BotBoiler.MemoryStorageEx>(BotBoiler.MemoryStorageEx)        
        .UseConsoleHost()
        .UseTopics(topics)   
        .UseDialogs(dialogs)     
        .BindAll("dialogs", true, true, dialogs)
        .UseBot(AlarmBot)
        .Bind(topics.showAlarms)
        .Boot();       
    }
}

var a = new app();
