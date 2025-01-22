import pyperclip

# Szöveg beolvasása a felhasználótól
szoveg = input("Add meg a szöveget: ")

# Szóközök és tabulátorok cseréje alsóvonallal
modositott_szoveg = szoveg.replace("\t", "_").replace(" ", "_")

# Az eredmény vágólapra másolása
pyperclip.copy(modositott_szoveg)

# Az eredmény kiíratása
print("done!")
