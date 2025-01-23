document.addEventListener("DOMContentLoaded", () => {
  const fileNames = [
    "tetelek/1._Ismertesse_a_gazdasági_(üzleti)_jog_fogalmát,_mutassa_be_a_gazdasági_jog_(üzleti_jog)_alkotmányi_kereteit.txt",
    "tetelek/2._Ismertesse_az_alkotmány_és_az_alkotmányosság_fogalmát,_mutassa_be_az_alkotmányok_típusait,_jellemzőit!.txt",
    "tetelek/3._Ismertesse_a_jogállamiság,_a_demokrácia,_a_szuverenitás_és_a_piacgazdaság_fogalmát!.txt",
    "tetelek/4._Ismertesse_és_csoportosítsa_a_jogforrásokat,_jogszabályokat_és_a_jogalkotókat!!.txt",
    "tetelek/5._Ismertesse_a_jogrendszer_rétegződésének_megjelenési_formáit_és_határozza_meg_a_dologi_jog_és_a_kötelmi_jog_elhelyezkedését_a_jogrendszeren_belül!.txt",
    "tetelek/6._Határozza_meg_a_dologi_jog_fogalmát,_ismertesse_alapelveit_és_felosztási_módjait!.txt",
    "tetelek/7._Mutassa_be_a_tulajdonjog_alanyát,_tárgyát,_a_tulajdonhoz_kapcsolódó_kötelezettségeket,_korlátokat_és_a_tulajdonjog_megszerzésének_és_megszűnésének_módjait!.txt",
    "tetelek/8._Mutassa_be_a_korlátolt_dologi_jogokat!.txt",
    "tetelek/9._Mutassa_be_az_ingatlan-nyilvántartás_intézményét!.txt",
    "tetelek/10._Ismertesse_a_kötelem_fogalmát_és_általános_szabályait,_a_szerződések_fontosabb_szabályait,_típusait,_fajtáit,_illetve_az_egyéb_kötelem_keletkeztető_tényeket!.txt",
    "tetelek/11._Hasonlítsa_össze_a_közkereseti_társaság,_a_betéti_társaság,_a_korlátolt_felelősségű_társaság_és_a_részvénytársaságok_szabályozását_a_Ptk._alapján!.txt",
    "tetelek/12._Mutassa_be_a_szövetkezet_és_az_egyesülés_szabályozását_a_Ptk._alapján!.txt",
    "tetelek/13._Ismertesse_az_egyéni_vállalkozás_és_az_egyéni_cég_fogalmát,_szabályozásának_fontosabb_elemeit!.txt",
    "tetelek/16._Mutassa_be_az_általános_reklámtilalmakat_és_reklámkorlátozásokat,_illetve_az_egyes_áruk_reklámozására_és_az_azokkal_összefüggésben_történő_szponzorálásra_vonatkozó_tilalmakat_és_korlátozásokat!.txt",
    "tetelek/17._Mit_értünk_a_sajtószabadság_alatt.txt",
    "tetelek/18._Melyek_a_2010._évi_CLXXXV._törvény_a_médiaszolgáltatásokról_és_a_tömegkommunikációról_alapelvei_és_a_médiaszolgáltatások_tartalmára_vonatkozó_fontosabb_előírások!_.txt",
  ];

  const layer1 = document.getElementById("layer_1");
  const layer2 = document.getElementById("layer_2");
  const layer3 = document.getElementById("layer_3");
  const listaDesktop = document.getElementById("listaDesktop");
  const listaMain = document.getElementById("listaMain");

  // Rétegek váltásának logikája
  function updateLayers() {
    layer1.classList.add("hidden");
    layer1.classList.remove("visible");

    const showListButton = document.getElementById("showList");
    const resizeOriginalButton = document.getElementById("resize_original");

    if (window.matchMedia("(max-width: 600px)").matches) {
      layer3.classList.add("visible");
      layer3.classList.remove("hidden");
      layer2.classList.add("hidden");
      layer2.classList.remove("visible");

      // showList megjelenítése mobilnézetben
      if (showListButton) showListButton.style.display = "block";

      // resizeOriginal rejtése mobilnézetben
      if (resizeOriginalButton) resizeOriginalButton.style.display = "none";
    } else {
      layer2.classList.add("visible");
      layer2.classList.remove("hidden");
      layer3.classList.add("hidden");
      layer3.classList.remove("visible");

      // resizeOriginal megjelenítése desktop nézetben
      if (resizeOriginalButton) resizeOriginalButton.style.display = "block";

      // showList rejtése desktop nézetben
      if (showListButton) showListButton.style.display = "none";
    }
  }

  // Rétegek alapértelmezett állapota betöltéskor
  function initializeLayers() {
    layer1.classList.add("visible");
    layer1.classList.remove("hidden");
    layer2.classList.add("hidden");
    layer2.classList.remove("visible");
    layer3.classList.add("hidden");
    layer3.classList.remove("visible");
  }

  initializeLayers();

  // Frissítés ablakméret változásakor
  window.addEventListener("resize", updateLayers);

  // Gombok a rétegek közötti váltáshoz
  const resizeOriginalButton = document.getElementById("resize_original");
  const resizefullscreenButton = document.getElementById("resize_full");

  if (resizeOriginalButton && resizefullscreenButton) {
    resizeOriginalButton.addEventListener("click", () => {
      layer3.classList.add("hidden");
      layer3.classList.remove("visible");
      layer2.classList.add("visible");
      layer2.classList.remove("hidden");
    });

    resizefullscreenButton.addEventListener("click", () => {
      layer2.classList.add("hidden");
      layer2.classList.remove("visible");
      layer3.classList.add("visible");
      layer3.classList.remove("hidden");
    });
  }

  fileNames.forEach((fileName) => {
    const cleanedFileName = fileName
      .replace("tetelek/", "")
      .replace(/_/g, " ")
      .replace(".txt", "");

    const fileNumber = fileName.split("/")[1].split("_")[0];

    // Desktop listához gomb
    const desktopButton = document.createElement("button");
    desktopButton.textContent = cleanedFileName;
    desktopButton.addEventListener("click", () => {
      fetch(fileName)
        .then((response) => {
          if (!response.ok)
            throw new Error(`Nem sikerült betölteni a fájlt: ${fileName}`);
          return response.text();
        })
        .then((content) => {
          document.getElementById("textOutput_desktop").innerHTML = content;
          document.getElementById("textOutput_fullscreen").innerHTML = content;
        })
        .catch((error) => {
          const errorMessage = `<span style="color: red;">Hiba: ${error.message}</span>`;
          document.getElementById("textOutput_desktop").innerHTML =
            errorMessage;
          document.getElementById("textOutput_fullscreen").innerHTML =
            errorMessage;
        });
    });

    // Main listához gomb
    const mainButton = document.createElement("button");
    mainButton.textContent = fileNumber;
    mainButton.addEventListener("click", () => {
      updateLayers();

      fetch(fileName)
        .then((response) => {
          if (!response.ok)
            throw new Error(`Nem sikerült betölteni a fájlt: ${fileName}`);
          return response.text();
        })
        .then((content) => {
          document.getElementById("textOutput_desktop").innerHTML = content;
          document.getElementById("textOutput_fullscreen").innerHTML = content;
        })
        .catch((error) => {
          const errorMessage = `<span style="color: red;">Hiba: ${error.message}</span>`;
          document.getElementById("textOutput_desktop").innerHTML =
            errorMessage;
          document.getElementById("textOutput_fullscreen").innerHTML =
            errorMessage;
        });
    });

    listaDesktop.appendChild(desktopButton);
    listaMain.appendChild(mainButton);
  });

  // ShowListButton logika
  const showListButton = document.getElementById("showList");
  showListButton.addEventListener("click", () => {
    initializeLayers();
  });

  // Alapértelmezett állapot beállítása
  updateLayers();
});

document.addEventListener("DOMContentLoaded", () => {
  // Gomb és elemek referenciáinak megszerzése
  const githubButton = document.getElementById("InfB_Github");
  const githubInfo = document.getElementById("Inf_Github");
  const githubInnerButton = githubButton.querySelector("button"); // Gomb a #InfB_Github belsejében

  if (githubButton && githubInfo && githubInnerButton) {
    // Egér belépése az elem fölé
    githubButton.addEventListener("mouseenter", () => {
      githubInfo.style.display = "inline";

      setTimeout(() => {
        githubInfo.style.fontSize = "14px";
      }, 10); // Kis késleltetés a display és animációk között

      // Border-radius változtatása
      githubInnerButton.style.borderRadius = "64px";
    });

    // Egér elhagyása az elemről
    githubButton.addEventListener("mouseleave", () => {
      githubInfo.style.fontSize = "";

      setTimeout(() => {
        githubInfo.style.display = "none";
      }, 300);

      // Visszaállítás alapértelmezett állapotra
      githubInnerButton.style.borderRadius = "100%";
    });
  } else {
    console.error(
      "Az egyik elem hiányzik: InfB_Github, Inf_Github vagy a gomb"
    );
  }
});
