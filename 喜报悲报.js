import fs from "fs"
import puppeteer from '../../lib/puppeteer/puppeteer.js'

export class xibao extends plugin {
    constructor() {
        super({
            name: '喜报悲报',
            event: 'message',
            priority: 500,
            rule: [
                {
                    reg: "^#喜报(.*)",
                    fnc: 'xibao'
                }, {
                    reg: "^#悲报(.*)",
                    fnc: 'beibao'
                },]
        })
    }

    async xibao(e) {
        let msg = e.message[0].text.slice(3)
        if (msg == "") return
        let data = {
            tplFile: './resources/xibao.html',
            xixun: msg
        }
        let img = await puppeteer.screenshot('123', {
            ...data,
        })
        e.reply(img)
    }

    async beibao(e) {
        let msg = e.message[0].text.slice(3)
        if (msg == "") return
        let data = {
            tplFile: './resources/beibao.html',
            beixun: msg
        }
        let img = await puppeteer.screenshot('123', {
            ...data,
        })
        e.reply(img)
    }
}