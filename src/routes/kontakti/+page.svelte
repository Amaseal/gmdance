<script>
  import Phone from "svelte-material-icons/Phone.svelte";
  import Email from "svelte-material-icons/Email.svelte";
  import Facebook from "svelte-material-icons/Facebook.svelte";
  import Instagram from "svelte-material-icons/Instagram.svelte";
</script>

<svelte:head>
  <title>Kontakti</title>
</svelte:head>

<section>
  <div class="container flex align">
    <div class="image">
      <img src="./anete.jpg" alt="" />
    </div>
    <div class="contacts">
      <h2>Sazinies ar mums:</h2>
      <a href="tel: +37129366654" class="contact flex align">
        <Phone color="white" size="20px" />
        <p>+371 29 366 654</p>
      </a>
      <a href="mailto: anete_antrope@inbox.lv" class="contact flex align">
        <Email color="white" size="20px" />
        <p>anete_antrope@inbox.lv</p>
      </a>

      <div class="social flex">
        <hr />
        <a
          target="blank"
          href="https://www.facebook.com/groups/1737701199793309"
        >
          <div class="icon">
            <Facebook size="20px" />
          </div></a
        >
        <a target="blank" href="https://www.instagram.com/gmd_ogre/">
          <div class="icon">
            <Instagram size="20px" />
          </div></a
        >
      </div>
    </div>
  </div>
</section>

<style>
  section {
    padding: 120px 0;
    position: relative;
  }
  section::before {
    content: "";
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 150px;
    background: rgb(23, 23, 23);
    background: linear-gradient(
      0deg,
      rgba(23, 23, 23, 1) 20%,
      rgba(23, 23, 23, 0.6814075972185749) 49%,
      rgba(23, 23, 23, 0.006337569207370497) 100%
    );
    z-index: 9999;
  }

  .image {
    height: 68vh;
    width: 60vw;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .contacts {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: var(--primary);
    padding: 30px;
    width: 40vw;
  }
  h2 {
    margin-bottom: 40px;
  }
  p {
    margin-left: 20px;
  }
  .contact {
    margin-bottom: 10px;
  }
  a {
    color: var(--text);
    text-decoration: none;
  }
  .social {
    margin-top: 40px;
  }
  hr {
    color: var(--text);
  }

  @media only screen and (max-width: 900px) {
    .image {
      height: 70vh;
      width: 100%;
    }
    .contacts {
      position: absolute;
      top: auto;
      bottom: -40px;
      right: 50%;
      transform: translateY(0);
      transform: translateX(50%);
      background-color: var(--primary);
      padding: 20px;
      width: 80%;
      z-index: 9999999;
    }
  }
</style>
