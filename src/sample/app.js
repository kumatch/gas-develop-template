import { add } from './calc'

global.doFunction = function () {
    Logger.log(add(10, 20));
}
