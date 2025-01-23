# Interaktív Webes Alkalmazás

Ez a projekt egy modern, interaktív webes alkalmazást mutat be, amely dinamikus tartalomkezelést és reszponzív megjelenítést biztosít. Az alkalmazás fő célja, hogy lehetővé tegye a tételek egyszerű és hatékony megjelenítését JavaScript segítségével.

## Funkciói

### Interaktív Rétegek
- Több réteg (`layer_1`, `layer_2`, `layer_3`) közötti váltás különböző nézetekben (desktop és mobil).
- Felhasználói interakciók alapján történő váltások (`click`, `hover` események).

### Reszponzív megjelenítés
- **`window.matchMedia`** ennek segítségével a nézetek automatikus igazítása a képernyő méretéhez.
- **`@media`** szabályokkal kiegészítve biztosítja, hogy a tartalom mindig jól jelenjen meg mobilon és asztali gépen.

### Dinamikus DOM Manipuláció
- Gombnyomásra a képekhez és egyéb elemekhez új osztályokat rendel (pl. `img-fluid`), hogy a megjelenés automatikusan alkalmazkodjon.

### Animációk és Interakciók
- **Hover** és **click** események használata az elemek (pl. gombok, szövegek) animációinak indítására.
- Például: a gomb szegélyének (`border-radius`) animációja egérrel való rámutatáskor.


## Felhasznált programozási nyelvek
- **HTML**: A tartalom szerkezetének megadásához.
- **CSS**: Stílusok, animációk és reszponzív viselkedés biztosítása.
- **JavaScript**: Interaktív funkcionalitások megvalósítása, például eseménykezelők, rétegváltás, és DOM manipuláció.
- **Bootstrap** (opcionális): Képek és más elemek reszponzivitásának gyors biztosítása az `img-fluid` osztállyal.


### MIT Licensz:
1. **Bővíthetőség:** Ha vannak további funkciók, azokat is hozzáadhatjuk a leíráshoz.
2. **Pontosítás:** Ha konkrét technológiák (pl. Bootstrap verzió) szerepelnek, azokat pontosan feltüntethetjük.
3. **Képek:** A `README.md`-hez képeket is hozzáadhatsz, hogy vizuálisan bemutasd a projektet. Példa:
   ```markdown
   ![Képernyőkép](https://via.placeholder.com/600x400)
