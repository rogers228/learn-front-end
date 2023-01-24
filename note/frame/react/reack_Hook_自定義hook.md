# reack_Hook_自定義hook
https://reactjs.org/docs/hooks-custom.html


```js
// custom-hook 自定義hook
// 為共用邏輯
function useFriendStatus(friendID) { // use開頭  自定義引數
  // useState 
  const [isOnline, setIsOnline] = useState(null);

  // useEffect
  useEffect(() => { 
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline; // 自定義返回值
}
```

```js
// 多個 ui component
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id); //引用custom-hook
  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);
  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```

## 說明
1. 他是一個純javascript function，以致可以自定義引數即回傳值
2. 名稱使用use開頭(小駝峰) 讓react可以識別


## 用途
1. 如同function 可用來共用邏輯 以小單元寫法
2. 將useState 寫在 custom hook 後 讓標準hook取用
3. 常見多個ui(component) 對應到相同的狀態(很像公用變數)
