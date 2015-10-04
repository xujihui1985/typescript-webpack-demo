import {default as moment} from 'moment';
import * as Handlebars from 'handlebars';
/**
 * use require trick to handle external resource import
 */
var hello = require('./templates/hello.handlebars');

interface IHello {
    getNow(): string;
    render(context: HelloViewModal|{():HelloViewModal}): string;
};

type List<T> = Array<T>;

interface Entity {
    desc: string;
    type: string;
}

interface HelloViewModal {
    name: string;
    listOfEntities: List<Entity>;
    updatedDate?: string;
}

export default class Hello implements IHello {
    date: string;
    template: string = hello;
    handlebarTemplate: HandlebarsTemplateDelegate;

//8.3.3 Automatic Constructors
/**
 * this is same as 
 * 
 * class xxx {
 *   x: number;
 *   y: number;
 * }
 * 
 * constructor(x: number, y: number) {
 *  ...
 * }
 */
    constructor(public x: number, public y: number) {
        this.x = x;
        this.y = y;
        this.handlebarTemplate = Handlebars.compile(hello);
    }
/**
 * 
 */
    getNumber(name: string): number {
        return this.x + this.y;
    }
    
    getNow(): string {
        this.date = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        return this.date;
    }
    
    render(context: HelloViewModal|{():HelloViewModal}): string {
        let ctx: HelloViewModal = null;
        if (isObject(context)) {
            context.updatedDate = this.getNow();
            ctx = context;
        } else {
            ctx = context();  
            ctx.updatedDate = this.getNow();
        }
        console.log(ctx);
        return this.handlebarTemplate(ctx);
    }
    
}

/**
 *  user-defined type guard functions
 * https://github.com/Microsoft/TypeScript/issues/1007
 */
function isObject(context: HelloViewModal|{():HelloViewModal}):context is HelloViewModal {
  return typeof context === 'object';
}

export {IHello, HelloViewModal};
