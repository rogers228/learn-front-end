

export const api = (topic='react')=>{
    
    const controller = new AbortController();  // 取消請求控制

    const promise = fetch(`https://api.github.com/search/repositories?q=topic:${topic}`,{signal: controller.signal})
        .then(res => res.json())
    return [promise, controller]
};