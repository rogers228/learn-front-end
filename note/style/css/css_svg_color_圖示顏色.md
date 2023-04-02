# svg color
css並無此屬性，應使用filter方式
將color轉換為filter參數，即可達到


https://codepen.io/sosuke/pen/Pjoqqp

使用此網址 可將顏色 轉為css的filter屬性
svg使用filter屬性 來改變顏色

  .icon_a{
    width: 16px; height: 16px;
    filter: invert(99%) sepia(91%) saturate(0%) hue-rotate(113deg) brightness(113%) contrast(101%); //圖示顏色
  }