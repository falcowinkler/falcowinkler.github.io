datei = open("woerter_zaehlen.py", "r")

summe = 0
for line in datei:
    summe += len(line.split())
print(summe)

datei.close()
