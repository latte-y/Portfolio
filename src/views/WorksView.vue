<template>
  <div class="main">
    <h1>Works</h1>
    <div>
      <div class="work">
        <a href="https://bank-app-79d73.web.app/"
          ><img src="../assets/Web-site-icon.jpeg" alt=""
        /></a>
        <h3>銀行アプリ</h3>
        <p>Vueを用いて取引記録が表示されるアプリを作成した。</p>
      </div>
      <div class="work">
        <a href="https://latte-y.github.io/my-git-practice-app/"
          ><img src="../assets/Web-site-icon.jpeg" alt=""
        /></a>
        <h3>チーム開発によるアプリ</h3>
        <p>現在開発中！！！</p>
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
</style>
