# spacing 空間控制

{property}{direction}-{size}

## property 屬性
m = margin（外距）
p = padding（內距）

## direction 方向
t = top
r = right
b = bottom
l = left
x = left + right
y = top + bottom

## size 尺寸
Bulma 的設計理念就是希望你用 size 1~6 等語意化的工具類別，而不是直接控制 px

0 ~ 6

| size | px（預設）  |
| ---- | ------- |
| 0    | 0px     |
| 1    | 0.25rem |
| 2    | 0.5rem  |
| 3    | 0.75rem |
| 4    | 1rem (預設值)   |
| 5    | 1.5rem  |
| 6    | 3rem    |



| 類別     | 說明                  |
| ------ | ------------------- |
| `mt-4` | margin-top: 尺寸 4    |
| `mb-2` | margin-bottom: 尺寸 2 |
| `mx-3` | 左右 margin 都是 3      |
| `py-5` | 上下 padding 都是 5     |
| `p-0`  | 移除所有 padding        |
| `m-6`  | 四邊 margin 都是最大尺寸 6  |

