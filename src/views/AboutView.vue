<template>
  <div class="main">
    <section>
      <h1>About me</h1>
      <p class="textBox">
        東京都にて大学院生をしている。
        <br />
        大学院の研究では、C言語を用いた数値流体シミュレーションを行なっている。
        <br />
        2022年よりHTML, CSS, JavaScriptを用いてwebアプリの開発を始めた。
        <br />
        <br />
        <br />
        【言語の使用経験】
        <br />
        C：大学学部の授業、大学院での研究（約5年間使用）
        <br />
        javaScript：webアプリ開発に用いている（約半年間使用）
      </p>
      <div class="profile">
        <img src="../assets/myphoto.png" alt="" class="me" />
        <div class="aboutMe">
          氏名： 中村 悠希 (Nakamura Yuki)
          <br />
          <br />
          出身： 山口県
          <br />
          <br />
          所在地： 東京都
          <br />
          <br />
          大学： 東京工業大学大学院 工学院
          <br />
          <br />
          Email： yukimkyn1119@gmail.com
          <br />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
body {
  background: #dddddd;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
}
.main {
  min-height: 100vh;
}
section {
  font-size: 18px;
}
h1 {
  max-width: 1500px;
  padding-top: 50px;
  text-align: center;
  font-size: 60px;
  border-bottom: solid;
}
.textBox {
  text-align: left;
  padding-bottom: 50px;
}
.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.me {
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
}
.aboutMe {
  margin-left: 50px;
}
</style>
