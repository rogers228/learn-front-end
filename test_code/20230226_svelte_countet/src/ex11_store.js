import { writable, readable } from 'svelte/store';
import {api} from './ex11_api.js'
// 建立 Store
export const selected = writable('react');

// 建立方法  將set邏輯寫於此store
export const setSelected = (topic)=>selected.set(topic);

// 主data 儲存於 repos 僅能讀取(故採用readable)
// 第一個引數 object 裡面可以自訂數據格式
// 第二個引數為 statr起始函數  或  啟動表達式  可以附加作用
// 將set方法傳入，做為啟動，啟動方法是:
// 使用subscribe訂閱方法，訂閱selected的值，該方法的第一個引數是start起始函數
// 第一個引數為value 指名為val帶入方法執行
// 呼叫api儲存在response, controller

export const repos = readable({
    status: 'idls', // idls閒置初始 | loading讀取中 | loaded讀取完畢 | error錯誤
    items: [],
    error: null,
    }, (set) =>{
        let currentController;
        //執行subscribe訂閱方法時會回傳 取消訂閱的方法 以供後續使用
        let unsubscribe = selected.subscribe((val) =>{
            if (currentController){        //若尚有請求
                currentController.abort(); //中止請求
            }
            set({
                status: 'loading',
                items: [],
                error: null,
            });
            const [response, controller] = api(val.toLowerCase());
            currentController = controller;
            response.then(data=>{
                currentController = null; //成功載入後清除currentController
                set({
                    status: 'loaded',
                    items: data.items,
                    error: null,
                });
            }).catch(err=>{
                if (err.name === 'AbortError'){
                    set({
                        status: 'loading',
                        items: [],
                        error: null,
                    });
                }
                else{
                    set({
                        status: 'error',
                        items: [],
                        error: err,
                    });
                }

            })
        })
    // 最後結束時記得取消訂閱
    return ()=>{ 
        unsubscribe();
    }
    });