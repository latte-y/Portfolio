<template>
  <div class="main">
    <h1>Works</h1>
    <div>
      <div class="work">
        <a href="https://bank-app-79d73.web.app/"
          ><img src="../assets/bankApp.png" alt=""
        /></a>
        <h3>銀行アプリ</h3>
        <p>Vueを用いて取引記録が表示されるアプリを作成した。</p>
      </div>
      <div class="work">
        <a href="https://shikujiri-b81a8.web.app/"
          ><img src="../assets/shikujiriSensei.png" alt=""
        /></a>
        <h3>しくじり先生</h3>
        <p>3人チームで失敗談を投稿するサイトを作成した。</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
h1 {
  max-width: 800px;
  padding-top: 50px;
  text-align: center;
  font-size: 60px;
  border-bottom: solid;
}
.work {
  text-align: center;
  margin-bottom: 100px;
}
p {
  margin: 0 auto;
}
.work img {
  width: 50vw;
}
</style>
