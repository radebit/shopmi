/**
 * Storage封装
 **/
const STORAGE_KEY = 'shopMi';
export default {
    //存储值
    setItem(key, value, moduleName) {
        if (moduleName) {
            let val = this.getItem(moduleName);
            val[key] = value;
            this.setItem(moduleName, val);
        } else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }
    },
    //获取值
    getItem(key, moduleName) {
        if (moduleName) {
            let val = this.getItem(moduleName)
            if (val) return val[key];
        }
        return this.getStorage()[key];
    },
    //获取storage
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    //清空值
    clear(key, moduleName) {
        let val = this.getStorage();
        if (moduleName) {
            if (!val[moduleName]) return;
            delete val[moduleName][key];
        } else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}
