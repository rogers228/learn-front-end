# size

很多 component, element 都有size

無特別樣式時 為預設size


is-small   小號
is-medium  中型 (比預設size略大)
is-large   大型

is-fullwidth 填滿父元素

is-normal  強制為標準大小，有時候預設大小為較小時，可以使用此class來強制設定





## layout

| is-full           | 1
| is-three-quarters | 3/4
| is-two-thirds     | 2/3 
| is-half           | 1/2
| is-one-third      | 1/3
| is-one-quarter    | 1/4
| is-one-fifth      | 1/5
| is-narrow  自適大小其餘填滿


| 裝置        | min-width | Bulma 名稱   |
|-------------|-----------|--------------|
| 手機        | 無        | `mobile`     |
| 平板        | 768px     | `tablet`     |
| 桌機        | 1024px    | `desktop`    |
| 寬桌機      | 1216px    | `widescreen` |
| 超寬桌機    | 1408px    | `fullhd`     |

| 類別                         | 效果（在對應裝置上）  |
| -------------------------- | ----------- |
| `is-full-mobile`           | 滿版寬度（手機）    |
| `is-half-tablet`           | 50%（平板）     |
| `is-one-third-desktop`     | 33.33%（桌機）  |
| `is-two-thirds-widescreen` | 66.66%（寬桌機） |
| `is-one-quarter`           | 25%（所有裝置）   |
| `is-three-quarters`        | 75%         |
| `is-narrow`                | 寬度自適應內容大小   |

## 12等分
is-1   1/12
is-2   2/12
is-3
is-4
is-5
is-6
is-7
is-8
is-9
is-10
is-11
is-12


## 媒體尺寸
mobile      移動裝置  最大768
tablet      平板     從769px
desktop：    桌面   從1024px
widescreen： 框螢幕 從1216px
fullhd       全高清 從1408px